import { FunctionComponent } from 'react'

import Link from 'next/link'

const Header: FunctionComponent = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-white border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">
        <nav role="navigation" className="flex items-center space-x-4">
          <Link href="/">
            <a className="text-sm font-medium">
              HyperUI
              <span role="img" className="ml-1.5">
                🚀
              </span>
            </a>
          </Link>

          <span className="hidden w-px h-6 bg-gray-100 lg:block"></span>

          <Link href="/">
            <a className="hidden text-xs font-medium lg:block">Components</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
