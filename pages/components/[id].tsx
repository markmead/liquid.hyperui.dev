import type { NextPage } from 'next'
import Head from 'next/head'

import { Component } from '../../interface/component'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ToastContext from '../../context/toast'

import Breadcrumbs from '../../components/breadcrumbs'
import Banner from '../../components/banner'
import Example from '../../components/example'

import { componentIds, currentComponent } from '../../lib/components'

export async function getStaticPaths() {
  let paths = componentIds()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { id } }: Params) {
  let component = currentComponent(id)

  return {
    props: {
      component,
    },
  }
}

type Params = {
  params: {
    id: string
  }
}

type Props = {
  component: Component
}

const component: NextPage<Props> = ({ component }) => {
  let meta = {
    title: `${component.title} Tailwind CSS Components | HyperUI`,
    description: `Range of ${component.title} Tailwind CSS components.`,
  }

  return (
    <ToastContext.Provider value={toast}>
      <>
        <Head>
          <title>{meta.title}</title>
          <meta property="og:title" content={meta.title} />
          <meta name="description" content={meta.description}></meta>
          <meta property="og:description" content={meta.description} />
        </Head>

        <div>
          <Breadcrumbs component={component} />

          <Banner
            title={component.title}
            subtitle={component.description}
            button={false}
          />

          <div className="container py-8 sm:py-16">
            <div className="flow-root">
              <ul className="-my-8 divide-y divide-gray-100 lg:-my-16">
                <Example title={component.title} />
              </ul>
            </div>
          </div>

          <ToastContainer
            hideProgressBar
            limit={1}
            closeButton={false}
            draggable={false}
            position="bottom-center"
            theme="dark"
            className="text-center"
          />
        </div>
      </>
    </ToastContext.Provider>
  )
}

export default component
