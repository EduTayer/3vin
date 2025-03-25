import "./globals.css";

export const metadata = {
  title: "3.vin",
  description: "Luxury Car AI Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
