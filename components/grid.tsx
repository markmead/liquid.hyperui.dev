import type { FunctionComponent } from 'react'
import { Component } from '../interface/component'

import Card from './card'

type Props = {
  className: string
  blocks: Array<Component>
}

const Grid: FunctionComponent<Props> = ({ className, blocks }) => {
  return (
    <div className={`grid ${className}`}>
      {blocks.map((block, index) => (
        <Card component={block} key={index} />
      ))}
    </div>
  )
}

export default Grid
