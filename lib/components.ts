import { Component } from '../interface/component'

export const components: Array<Component> = [
  {
    id: 'announcement',
    title: 'Announcement',
    description: 'Announce new offers, latest news and much more!',
  },

  {
    id: 'banner',
    title: 'Banner',
    description: 'Showcase offers and products in the banner.',
  },
]

export function componentIds(): Array<object> {
  let paths = components.map((component) => {
    return {
      params: {
        id: component.id,
      },
    }
  })

  return paths
}

export function currentComponent(id: string): Component | undefined {
  return components.find((component) => component.id === id)
}
