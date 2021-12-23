import type { FunctionComponent } from 'react'
import Head from 'next/head'

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

      <aside className="p-4 bg-black">
        <p className="text-sm font-medium text-center text-white">
          🚨 Status: WIP | Updates on Twitter{' '}
          <a
            href="https://twitter.com/itsmarkmead"
            target="_blank"
            rel="noreferrer noopener"
            className="underline"
          >
            @itsmarkmead
          </a>
        </p>
      </aside>

      <Header />

      <main role="main">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
