"use client";
import Link from 'next/link';

const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link href="/form">Formulaire</Link>
      </li>
      <li>
        <Link href="/pagePosts">Posts</Link>
      </li>
      <li>
        <Link href="/pageUsers">Utilisateurs</Link>
      </li>
      <li>
        <Link href="/pageComments">Commentaires</Link>
      </li>
    </ul>
    <style jsx>{`
  
      nav {
        background:rgb(179, 178, 178);
        padding: 1rem;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 10px 10px 10px rgba(19, 18, 18, 0.1);
        margin-bottom: 2rem;
      }
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
      }
      li {
        margin: 0;
      }
      a {
        text-decoration: none;
        color: #333;
      }
      a:hover {
        text-decoration: underline;
        font-weight: bold;
        color:rgb(230, 207, 4);
      }
    `}</style>
  </nav>
);

export default Menu;