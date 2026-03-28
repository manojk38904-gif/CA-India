export const metadata = {
  title: "Collective Action India",
  description: "NGO Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}