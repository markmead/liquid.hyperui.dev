import type { FunctionComponent } from 'react'
import Head from 'next/head'

import Announcements from './announcements'
import Announcement from './announcement'
import Header from './header'
import Footer from './footer'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E59GXQ9HGR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-E59GXQ9HGR');
            `,
          }}
        />
      </Head>

      <Announcements>
        <Announcement
          text="🌟 HyperUI Liquid is Open Source! Drop a Star on GitHub 🌟"
          url="https://github.com/markmead/hyperui-liquid"
        />

        <Announcement
          text="🚀 Find More Components on HyperUI! Purely HTML 🚀"
          url="https://hyperui.dev"
        />
      </Announcements>

      <Header />

      <main role="main">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
