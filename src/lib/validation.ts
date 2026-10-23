/** Empty, incomplete, out-of-range and non-finite values are never numeric zero. */
export function numeric(text:string,min?:number,max?:number,step?:number){
 if(!text.trim()||!/^[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?$/i.test(text.trim()))return NaN;
 const value=Number(text);
 if(!Number.isFinite(value)||(min!==undefined&&value<min)||(max!==undefined&&value>max))return NaN;
 if(step!==undefined){const count=(value-(min??0))/step;if(Math.abs(count-Math.round(count))>1e-8)return NaN;}
 return value;
}
export const complete=(...values:number[])=>values.every(Number.isFinite);
