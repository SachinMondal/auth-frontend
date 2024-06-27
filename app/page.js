"use client"
import Head from "next/head";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-cyan-500">Welcome to MyApp</h1>
      </main>
    </div>
  )
}