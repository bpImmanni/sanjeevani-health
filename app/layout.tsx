// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Sanjeevani Health",
  description: "AI Care Agent + MythBuster",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
