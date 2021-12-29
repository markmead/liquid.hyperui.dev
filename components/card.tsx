import type { FunctionComponent } from 'react'

import Link from 'next/link'

import { Component } from '../interface/component'

type Props = {
  component: Component
}

const Card: FunctionComponent<Props> = ({ component }) => {
  let { id, title, description } = component

  return (
    <Link href={`/components/${id}`}>
      <a className="p-8 border-2 border-black">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="mt-1 text-sm">{description}</p>
      </a>
    </Link>
  )
}

export default Card
