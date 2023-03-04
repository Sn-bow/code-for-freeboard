import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { global } from '../src/commons/global/GlobalStyle'
import ApolloSetting from '../src/components/commons/apollo/Apollo'
import Layout from '../src/components/commons/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={global} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  )
}
