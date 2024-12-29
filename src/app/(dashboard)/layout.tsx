export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <div className='h-screen flex'>
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-[#c1e2ef]">left</div>
        
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#d8ebf2]">right</div>
      </div>
    </html>
  )
}