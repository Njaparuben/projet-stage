import Link from "next/link";
export default async function PageUsers() {
  const reponse = await fetch("https://jsonplaceholder.org/users");
    const users = await reponse.json();
    return (
      <div className='flex flex-wrap text-black justify-content-center'>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div key={user.id} className='w-90 bg-gray-10 p-5 m-10 shadow-md'>
              <p>Nom: {user.firstname}</p>
              <h2>Prenom:{user.lastname}</h2>
              <p>Mail: {user.email}</p>
              <p>Anniversaire: {user.birthDate}</p>
            </div>
          </Link>
        ))}
      </div>
    );
}