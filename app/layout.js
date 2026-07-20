import './globals.css';

export const metadata = {
  title: 'FixScout | Find the Right Repair Shop',
  description: 'Find and book repair shops for lawn equipment, small engines, ATVs, UTVs, golf carts and compact tractors.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
