export const DAYS=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] as const;
export type Row={day:string;clockIn:string;clockOut:string;breakMinutes:number};
export function parseTime(v:string){const m=v.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);if(!m)return null;let h=+m[1],min=+m[2];if(min>59)return null;const ap=m[3]?.toUpperCase();if(ap){if(h<1||h>12)return null;if(h===12)h=0;if(ap==="PM")h+=12}else if(h>23)return null;return h*60+min}
export function worked(a:string,b:string,br=0){const x=parseTime(a),y=parseTime(b);if(x===null||y===null||!Number.isFinite(br)||br<0)return NaN;const elapsed=(y-x+1440)%1440;return br>elapsed?NaN:elapsed-br}
export function hm(n:number){const m=Math.round(Math.abs(n));return `${n<0?"−":""}${Math.floor(m/60)}h ${String(m%60).padStart(2,"0")}m`}
export function clock(n:number){n=((Math.round(n)%1440)+1440)%1440;const h24=Math.floor(n/60),m=n%60,ap=h24>=12?"PM":"AM",h=h24%12||12;return `${h}:${String(m).padStart(2,"0")} ${ap}`}
export function decimal(n:number){return (n/60).toFixed(2)}
export function defaultRows():Row[]{return DAYS.map((day,i)=>({day,clockIn:i<5?"08:00":"",clockOut:i<5?"17:00":"",breakMinutes:i<5?30:0}))}


/** Unused rows are allowed; partially entered or impossible shifts block payroll. */
export function validateShift(row:Row):{minutes:number|null;error?:string}{
 if(!Number.isFinite(row.breakMinutes)||row.breakMinutes<0)return {minutes:null,error:"Enter unpaid break minutes (use 0 for no break)."};
 if(!row.clockIn&&!row.clockOut&&row.breakMinutes===0)return {minutes:0};
 if(!row.clockIn||!row.clockOut)return {minutes:null,error:"Enter both clock-in and clock-out times, or clear the entire row."};
 const start=parseTime(row.clockIn),end=parseTime(row.clockOut);
 if(start===null||end===null)return {minutes:null,error:"Enter valid clock-in and clock-out times."};
 const elapsed=(end-start+1440)%1440;
 if(row.breakMinutes>elapsed)return {minutes:null,error:"Unpaid break exceeds shift duration. Correct the break or clock times."};
 return {minutes:elapsed-row.breakMinutes};
}
export function timeCardCsv(rows:Row[]){
 const validated=rows.map(validateShift);
 if(validated.some(r=>r.error))throw new Error("Correct invalid time-card rows before exporting.");
 return ["Day,Clock in,Clock out,Unpaid break minutes,Paid minutes",...rows.map((r,i)=>[r.day,r.clockIn,r.clockOut,r.breakMinutes,validated[i].minutes].map(v=>'"'+String(v).replaceAll('"','""')+'"').join(','))].join('\r\n');
}
