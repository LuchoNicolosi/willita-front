import type { Metadata } from 'next';
import './globals.css';
import NavBar from './ui/client/navbar';
import Footer from './ui/client/footer';

export const metadata: Metadata = {
  title: 'Willita Bakery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
