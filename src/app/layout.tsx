import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={metadataBase:new URL("https://hourtotals.com"),title:{default:"HourTotals — Free Time & Work Hours Calculators",template:"%s | HourTotals"},description:"Fast, free calculators for time, work hours, time cards, breaks, overtime and decimal hours.",openGraph:{siteName:"HourTotals",type:"website",url:"https://hourtotals.com"}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en-US"><body>{children}</body></html>}
