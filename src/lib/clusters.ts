export const clusters=[
 {name:'Time Card and Payroll Calculators',slugs:['time-card-calculator','time-card-calculator-with-lunch','biweekly-time-card-calculator','hours-calculator','work-hours-calculator','time-clock-calculator','overtime-calculator','clock-out-time-calculator'],guide:'time-card-payroll',guideTitle:'How to check a time card before payroll'},
 {name:'Hours and Minutes Calculators',slugs:['hours-minutes-calculator','time-duration-calculator','elapsed-time-calculator','add-time-calculator','average-time-calculator'],guide:'duration-math',guideTitle:'Clock times, durations and midnight crossings'},
 {name:'Decimal Time Conversions',slugs:['decimal-time-calculator'],guide:'decimal-hours',guideTitle:'Decimal hours for timesheets and payroll'},
 {name:'Vacation and PTO Calculators',slugs:['vacation-hours-calculator','pto-accrual-calculator','pto-time-calculator'],guide:'pto-accrual',guideTitle:'Convert an annual PTO allowance into accrual'},
 {name:'Billable Hours and Productivity',slugs:['billable-hours-calculator'],guide:'billable-utilization',guideTitle:'Understand billable utilization and collection estimates'},
];
export function clusterFor(slug:string){return clusters.find(c=>c.slugs.includes(slug))??clusters[0];}
