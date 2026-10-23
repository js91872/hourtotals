/** Duration arithmetic uses seconds; payroll uses unrounded minutes until display. */
export function duration(value:string):number|null {
 const v=value.trim(); if(!v)return null;
 if(/^\d+(?:\.\d+)?$/.test(v))return Number(v)*60;
 const match=v.match(/^(\d+):(\d{2})(?::(\d{2}(?:\.\d+)?))?$/);
 if(!match||+match[2]>59||+(match[3]||0)>=60)return null;
 return +match[1]*3600 + +match[2]*60 + +(match[3]||0);
}
export function averageDuration(values:string[]){
 const entries=values.filter(v=>v.trim()!=="").map(duration);
 return !entries.length||entries.some(v=>v===null)?null:entries.reduce<number>((a,v)=>a+v!,0)/entries.length;
}
export function hms(seconds:number){const n=Math.round(Math.abs(seconds));return `${seconds<0?'−':''}${Math.floor(n/3600)}h ${String(Math.floor(n%3600/60)).padStart(2,'0')}m ${String(n%60).padStart(2,'0')}s`;}
export function payroll(minutes:number[],threshold=40,multiplier=1.5,rate=0){
 if(minutes.some(n=>!Number.isFinite(n)||n<0)||!Number.isFinite(threshold)||threshold<0||!Number.isFinite(multiplier)||multiplier<1||!Number.isFinite(rate)||rate<0)throw new Error("Payroll requires complete, valid inputs.");
 let regular=0,overtime=0;const weeks:number[]=[];
 for(let i=0;i<minutes.length;i+=7){const total=minutes.slice(i,i+7).reduce((a,b)=>a+b,0);weeks.push(total);regular+=Math.min(total,threshold*60);overtime+=Math.max(0,total-threshold*60);}
 return {regular,overtime,weeks,total:regular+overtime,pay:(regular+overtime*multiplier)/60*rate};
}
export function pto(start:number,perPeriod:number,periods:number,used:number,day:number){return {earned:perPeriod*periods,balance:start+perPeriod*periods-used,days:day>0?(start+perPeriod*periods-used)/day:null};}

export function accrualRate(mode:string,annual:number,frequency:number,perPeriod:number){return mode==="annual"?(Number.isFinite(annual)&&annual>=0&&Number.isFinite(frequency)&&frequency>0?annual/frequency:NaN):(Number.isFinite(perPeriod)&&perPeriod>=0?perPeriod:NaN);}
