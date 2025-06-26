

const User= ({ user }: { user: { id: string; name: string; email: string } }) => {
    return (
        <div className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
        </div>
    );
}

export default User;