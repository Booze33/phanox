import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <NavBar />
      <Banner />
      {children}
    </div>
  );
}