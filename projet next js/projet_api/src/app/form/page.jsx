// pages/index.js
'use client';
import { useState } from 'react';
import {CollapsibleDemo} from '@/components/test';


import styles from './formStyle.module.css'; 

export default function Home() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    tel: '',
  });

  
  return (
    <div className='flex flex-col items-center p-2rem bg-gray-100 min-h-100vh font-family-sans-serif '>
      <h1 className='text-black font-size-2.5rem font-bold mb-4'>Formulaire</h1>
      <form className='flex flex-col h-full bg-white p-4 rounded shadow-md border-radius-8 text-black m-15 w-100 max-w-500 justify-center align-items-center text-center'>
        <div className='mb-1.5rem justify-center align-items-center text-center'>
          <label htmlFor="nom" className='block mt-5 text-black font-bold mb-0.5rem'>Nom <strong className='text-red-500'>*</strong>:</label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder='Entrez votre nom'
            value={formData.nom}
            className='w-full p-0.8rem mt-2 border-1px border-solid hover:border-blue-500 bg-gray-100 justify-center align-center  text-black rounded font-size-1rem focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='mb-1.5rem justify-center align-items-center text-center'>
          <label htmlFor="prenom" className='block mt-5 text-gray-555 font-bold mb-0.5rem'>Prénom <strong className='text-red-500'>*</strong>:</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            placeholder='Entrez votre prénom'
            className='w-full p-0.8rem mt-2 border-1px border-solid hover:border-blue-500 bg-gray-100 justify-center align-center  text-black rounded font-size-1rem focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='mb-1.5rem justify-center align-items-center text-center'>
          <label htmlFor="age" className='block mt-5 text-gray-555 font-bold mb-0.5rem'>Âge <strong className='text-red-500'>*</strong>:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            placeholder='Entrez votre âge'
            className='w-full p-0.8rem mt-2 border-1px border-solid hover:border-blue-500 bg-gray-100 justify-center align-center  text-black rounded font-size-1rem focus:outline-none focus:ring-2 focus:ring-blue-500'
            min="0"
            required
          />
        </div>

        <div className='mb-1.5rem justify-center align-items-center text-center'>
          <label htmlFor="tel" className='block mt-5 text-gray-555 font-bold mb-0.5rem'>Téléphone <strong className='text-red-500'>*</strong>:</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.tel}
            placeholder='Entrez votre téléphone'
            className='w-full p-0.8rem mt-2 border-1px border-solid hover:border-blue-500 bg-gray-100 justify-center align-center  text-black rounded font-size-1rem focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <button type="submit" className='bg-blue-500 text-white mt-20 font-bold py-2 px-4 rounded hover:bg-blue-600 hover:cursor-pointer transition-bg-0.3s-ease'>Envoyer</button>
      </form>
      <CollapsibleDemo />
    </div>
    

  );
}