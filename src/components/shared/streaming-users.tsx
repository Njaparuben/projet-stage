
import fetchData from "@/lib/fetch-data"
import ListUsers from "./list-users";

export default async function StreamingUsers() {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await fetchData({ path: "users" });

    return (
        <ListUsers data={data.slice(0,3)} />
    );
}