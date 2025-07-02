"use client";

import Faqs from '@/components/shared/faqs';
import DefaultFaqs from '@/components/shared/faqs';
import Link from 'next/link';


const Menu = () => (
  <div>
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
  <Faqs title='Question 1' description='reponse 1' />

  </div>
  
);

export default Menu;