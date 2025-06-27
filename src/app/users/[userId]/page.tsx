import fetchData from "@/lib/fetch-data";

export default async function UserId({ params }: { params: Promise<{ userId:string }> }) {
    const {userId} = await params;
    const user = await fetchData({ path: `users?id=${userId}` });
    console.log(user);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Utilisateur: {user.firstname}</h1>
                <p className="text-lg text-gray-700">Bienvenue sur la page de l&apos;utilisateur {user.lastname}.</p>
            </div>
        </div>
    );
}