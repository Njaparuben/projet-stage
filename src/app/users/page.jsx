
import ListUsers from "@/components/shared/list-users"
import fetchData from "@/lib/fetch-data"

export default async function PageUsers() {

  const data = await fetchData({path:"users"});
    return (
      <ListUsers data={data} />
    );
}