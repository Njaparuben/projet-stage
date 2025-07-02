import fetchData from '@/lib/fetch-data';
import React from 'react'

export default async function StreamingPosts() {

    await new Promise((resolve) => setTimeout(resolve, 5000));

    const posts = await fetchData({ path:"posts"});

    return (
        <div className='flex flex-wrap text-black justify-content-center'>
            {posts.map((post:any) => (
                <div key={post.id} className='w-90 bg-gray-10 p-5 m-10 shadow-md'>
                    <img src={post.image} alt="Image" className="w-full h-auto border-radius-10px mt-10 mb-20" />
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}
