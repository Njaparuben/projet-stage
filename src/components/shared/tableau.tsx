


export default async function TableUser(keys: string[]=[], url: string) {
  

  
      const response = await fetch("https://jsonplaceholder.org/users");
        const data = await response.json();
  return (
    <>
      {data.map((e) => (
        <div key={e.id} className="border-2 border-solid">
          {keys.map((key) => (
            <h3 className="border-solid" key={(key)}>{e[key]} </h3>
          ))}
          <br />
        </div>
      ))}
    </>
  );
}
