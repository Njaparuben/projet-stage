import TableUser from "@/components/shared/tableau";

export default function UserPage() {
    const keys = ['id', 'firstName', 'lastName', 'email', 'birthDate'];
    const path = "https://jsonplaceholder.org/users";
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <TableUser url={path} keys={keys} className="text-gray-800"/>
    </div>
  );
}