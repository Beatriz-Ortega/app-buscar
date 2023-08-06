import Header from "../pages/header"
import Head from 'next/head'

export default function Layout({children, producto}) {
  return (
    <>
        <Head>
          <title>Prueba Beatriz Ortega</title>
          <meta name="description" content="App buscar" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
        </Head>
        <Header producto={producto} />
        {children}
        
    </>
  )
}
