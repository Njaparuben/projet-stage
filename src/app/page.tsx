"use client";

import Faqs from '@/components/shared/faqs';
import DefaultFaqs from '@/components/shared/faqs';
import Link from 'next/link';


const Menu = () => (
  <div>
    
    <div className='max-w-2xl mx-auto' >
      {/* <Faqs title='Question 1' description='reponse 1' /> */}
      <Faqs title='Question deux' description='reponse deux' />

    </div>

  </div>

);

export default Menu;