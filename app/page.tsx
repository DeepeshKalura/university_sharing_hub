'use client'

import Head from 'next/head';
import { useRouter } from 'next/navigation';


const Home = () => {
  const router = useRouter();
  const handleGetStartedClick = () => {
    router.push('/sign-up');
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>University Sharing Hub</title>
        <meta name="description" content="University Sharing Hub - Share, Connect, Grow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold mb-4">University Sharing Hub</h1>
        <p className="text-lg text-gray-700 mb-8">Share, Connect, Grow Together</p>
        <div className="flex justify-center mb-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleGetStartedClick}>
            Get Started
          </button>

        </div>
        <p className="text-gray-600 mb-8">Why choose University Sharing Hub?</p>
        <ul className="text-left text-gray-700 mb-8">
          <li className="mb-2">
            📚 Share study materials, notes, and resources with fellow students.
          </li>
          <li className="mb-2">
            🗓️ Stay updated with university events, seminars, and workshops.
          </li>
          <li className="mb-2">👥 Connect with peers, mentors, and professors.</li>
          <li className="mb-2">📢 Share your ideas, projects, and achievements.</li>
        </ul>
        <div className="flex items-center mb-8">
          <input
            type="email"
            placeholder="Enter your email for newsletter"
            className="bg-gray-200 border border-gray-400 rounded py-2 px-4 mr-2 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
        <div className="flex">
          <a href="#" className="text-gray-600 hover:text-blue-500 mr-4">
            Facebook
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 mr-4">
            Twitter
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 mr-4">
            Instagram
          </a>
        </div>
      </main>

      <footer className="w-full h-16 flex justify-center items-center bg-gray-200">
        <p className="text-gray-600">© 2024 University Sharing Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
