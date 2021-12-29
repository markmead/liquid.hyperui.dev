import type { FunctionComponent } from 'react'

import Link from 'next/link'

import { Component } from '../interface/component'

type Props = {
  component: Component
}

const Breadcrumbs: FunctionComponent<Props> = ({ component }) => {
  return (
    <nav className="text-xs text-gray-500">
      <ol className="container flex items-center h-12 space-x-1">
        <li className="inline-flex items-center">
          <Link href="/">
            <a className="underline">Components</a>
          </Link>
        </li>

        <li>&raquo;</li>

        <li>{component.title}</li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
