export const DAYS=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] as const;
export type Row={day:string;clockIn:string;clockOut:string;breakMinutes:number};
export function parseTime(v:string){const m=v.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);if(!m)return null;let h=+m[1],min=+m[2];if(min>59)return null;const ap=m[3]?.toUpperCase();if(ap){if(h<1||h>12)return null;if(h===12)h=0;if(ap==="PM")h+=12}else if(h>23)return null;return h*60+min}
export function worked(a:string,b:string,br=0){const x=parseTime(a),y=parseTime(b);if(x===null||y===null)return 0;let d=y-x;if(d<0)d+=1440;return Math.max(0,d-Math.max(0,br))}
export function hm(n:number){const m=Math.round(Math.abs(n));return `${n<0?"−":""}${Math.floor(m/60)}h ${String(m%60).padStart(2,"0")}m`}
export function clock(n:number){n=((Math.round(n)%1440)+1440)%1440;const h24=Math.floor(n/60),m=n%60,ap=h24>=12?"PM":"AM",h=h24%12||12;return `${h}:${String(m).padStart(2,"0")} ${ap}`}
export function decimal(n:number){return (n/60).toFixed(2)}
export function defaultRows():Row[]{return DAYS.map((day,i)=>({day,clockIn:i<5?"08:00":"",clockOut:i<5?"17:00":"",breakMinutes:i<5?30:0}))}
