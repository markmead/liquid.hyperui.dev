import type { FunctionComponent } from 'react'

import Announcements from './announcements'
import Announcement from './announcement'
import Header from './header'
import Footer from './footer'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
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
