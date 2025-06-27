import fetchData from "@/lib/fetch-data";
//{ user }: { user: { id: string; firstname: string; lastname: string; email: string }
const IdData = ( keys: string[] ,url: string,id: string) => {
    const response= fetchData({path: `${url}/${id}`});
    return (
        <>
        {response.map((e) => (
        <div key={e.id} className="p-4 border rounded shadow-sm">
            {keys.map((k)=>(
                <h2 className="text-xl font-semibold" >{e.k}</h2><br />
                
            ))
            }
            </div>
         ))
        }
        </>
    );
}

export default IdData;