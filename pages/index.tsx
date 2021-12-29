import type { NextPage } from 'next'
import Head from 'next/head'

import { Component } from '../interface/component'
import { components } from '../lib/components'

import Banner from '../components/banner'
import Grid from '../components/grid'

export async function getStaticProps() {
  return {
    props: {
      components,
    },
  }
}

type Props = {
  components: Array<Component>
}

const Home: NextPage<Props> = ({ components }) => {
  let meta = {
    title: 'Open Source Tailwind CSS Components | HyperUI',
    description:
      'HyperUI is a free, open source library of Tailwind CSS components.',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta name="description" content={meta.description}></meta>
        <meta property="og:description" content={meta.description} />
      </Head>

      <Banner
        title="HyperUI"
        subtitle="Open Source Shopify Components Styled by Tailwind CSS "
        button={true}
        buttonText="Get Started"
        buttonLink="#componentGrid"
      />

      <div className="container py-8" id="componentGrid">
        <Grid
          className="gap-4 sm:grid-cols-2 md:grid-cols-3"
          blocks={components}
        />
      </div>
    </>
  )
}

export default Home
