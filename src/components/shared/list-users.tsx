import Link from "next/link";

type User = {
  id: string | number;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
};

export default function ListUsers({ data }: { data: User[] }) {

  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 text-black '>
      {data.map((user) => (
        <Link className="col-span-1 hover:scale-110 hover:shadow-2xl hover:shadow-amber-500" href={`/users/${user.id}`} key={user.id}>
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