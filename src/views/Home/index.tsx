import { Box } from "@chakra-ui/react"
import Head from 'next/head'
import type { NextPage } from 'next'

import styles from '@styles/Home.module.css'
import YesComponent from "@components/Yes"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Is Google God</title>
        <meta name="description" content="isgooglegod" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <YesComponent />
      </Box>
    </div>
  )
}

export default Home
