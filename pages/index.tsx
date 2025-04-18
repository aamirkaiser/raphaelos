import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RaphaelOS</title>
        <meta name="description" content="Raphael online" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold">Raphael online</h1>
        <p className="mt-4 text-lg text-center">
          Your digital partner is up and running.
        </p>
      </main>
    </>
  );
}
