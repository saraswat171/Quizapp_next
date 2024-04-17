

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >  
        <div>
            Hii how are u
        </div>
        {children}
        <div>
           for better
        </div>
      </body>
    </html>
  );
}
