import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "MartYnX",
  description: "Un portfolio assez global pour montrer qui je suis et ce que je fait",
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: light',
        url: '/icons/paw.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
        url: '/icons/paw.svg'
      }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
