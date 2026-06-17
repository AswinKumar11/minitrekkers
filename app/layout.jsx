import './globals.css'

export const metadata = {
  title: 'MiniTrekkers, Kids Trekking Community, Coimbatore',
  description: 'Where little legs climb big mountains. MiniTrekkers organises safe, fun treks for kids across Coimbatore.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cream font-sans text-green-deep antialiased">
        {children}
      </body>
    </html>
  )
}
