import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'
import Head from 'next/head'

export async function getServerSideProps (context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: { 
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix-clone</title>
        <meta name="description" content="A clone for learning purposes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className='text-3xl text-red-600'>Netflix Clone</h1>
        <button onClick={ () => signOut()} className='h-10 w-full bg-white'>Logout!</button>
      </main>
    </>
  )
}
