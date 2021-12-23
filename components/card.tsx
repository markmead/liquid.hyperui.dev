import type { FunctionComponent } from 'react'

import Link from 'next/link'

import { Collection } from '../interface/collection'

type Props = {
  collection: Collection
}

const Card: FunctionComponent<Props> = ({ collection }) => {
  let { id, title, subtitle } = collection

  return (
    <Link href={`/components/${id}`}>
      <a className="p-8 border-2 border-black">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="mt-1 text-sm">{subtitle}</p>
      </a>
    </Link>
  )
}

export default Card
