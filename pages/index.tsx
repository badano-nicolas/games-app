import type { NextPage } from "next";
import Head from "next/head";
import FakemonGame from "../components/fakemon/FakemonGame";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Indie Games</title>
        <meta name="description" content="Games that i used to play." />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-slate-800">
        <Navbar />
      </header>

      <main className="bg-slate-600">
        <FakemonGame />
      </main>

      <footer className="bg-slate-800">
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
