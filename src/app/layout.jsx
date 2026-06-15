import './globals.css'

export const metadata = {
  title: 'Los Dulcitos de Caro | Tortas y postres caseros',
  description:
    'Tortas, galletas y postres caseros por encargo, hechos con amor por Carolina.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
