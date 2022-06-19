import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-black h-screen'> 
      <Head>
        <title>Bug Tracker</title>
        <meta name="description" content="bug tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <h1 className='text-7xl text-green-400 text-center'>
          Bug Tracker
        </h1>

        
      </main>
    </div>
  )
}
