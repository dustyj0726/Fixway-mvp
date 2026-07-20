import './globals.css';

export const metadata = {
  title: 'Fixway | Find Power Equipment Repair',
  description: 'Find and book trusted repair shops for lawn equipment, ATVs, golf carts, small tractors and small engines.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
