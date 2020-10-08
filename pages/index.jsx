import Head from 'next/head';
import Layout from './components/Layout/Layout';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>SpaceX Prore</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      </Head>

      <Layout/>
    
    </React.Fragment>
  )
}
