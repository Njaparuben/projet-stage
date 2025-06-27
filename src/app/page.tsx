"use client";
import ListUsers from '@/components/shared/list-users';
import StreamingPosts from '@/components/shared/streaming-posts';
import StreamingUsers from '@/components/shared/streaming-users';
import fetchData from '@/lib/fetch-data';
import Link from 'next/link';
import { Suspense } from 'react';


export default async function Home() {

  // const data = await fetchData({ path: "users" });

  // await new Promise((resolve) => setTimeout(()=> {}, 15000))


  return (
    <div>
      {/* <ListUsers data={data} /> */}
      <nav className='bg-white p-4 shadow-md text-black flex justify-center align-items-center box-shadow-md mb-2rem'>
        <ul className='list-none flex gap-1rem m-0 p-0 '>
          <li className='m-0 '>
            <Link href="/form" className='ml-10 text-black  text-decoration-none hover:text-blue-500 hover:text-decoration-underline hover:font-bold'>Formulaire</Link>
          </li>
          <li className='m-0'>
            <Link href="/posts" className='ml-10 text-black text-decoration-none hover:text-blue-500 hover:text-decoration-underline hover:font-bold'>Posts</Link>
          </li>
          <li className='m-0'>
            <Link href="/users" className='ml-10 text-black text-decoration-none hover:text-blue-500 hover:text-decoration-underline hover:font-bold'>Utilisateurs</Link>
          </li>
          <li className='m-0'>
            <Link href="/comments" className='ml-10 text-black text-decoration-none hover:text-blue-500 hover:text-decoration-underline hover:font-bold'>Commentaires</Link>
          </li>
          <li className='m-0'>
            <Link href="/pages/user" className='ml-10 text-black text-decoration-none hover:text-blue-500 hover:text-decoration-underline hover:font-bold'>test</Link>
          </li>
        </ul>
      </nav>

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-96 bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-lg text-gray-700">Chargement users...</p>
          </div>
        }
      >
        <StreamingUsers />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-96 bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-lg text-gray-700">Chargement post...</p>
          </div>
        }
      >
        <StreamingPosts />
      </Suspense>
      <footer>
        djakhdaf adhfv adfhakd
      </footer>
    </div>
  );
}

