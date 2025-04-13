import Aside from "./_componet/aside/Aside";
import Header from "./_componet/header/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-screen flex overflow-hidden ">
      <Aside />
      <div className="w-full h-full flex flex-col gap-px   ">
        <Header />
        {/* <div className="h-14 w-f  ull bg-white"></div> */}
        <div className="h-full w-full overflow-auto"> {children}</div>
        
      </div>
    </main>
  );
}
