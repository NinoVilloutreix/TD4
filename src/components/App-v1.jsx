import { useEffect, useState } from "react";
import RandomUser from "./components/RandomUser"
import useFetch from "./hooks/useFetch";


function App() {
  const [gender, SetGender] = useState("");
  const handleChange = (e) => {
    SetGender(e.target.value);
  }
  
  const { data, error, isLoading } = useFetch(`https://randomuser.me/api/?results=6&gender=${gender}`);

  if (isLoading) return <p>isloading</p>
  if (error) return <p>error</p>

  console.log(data.results[0]);

  const user = data.results[0];
  const users = data.results;
  return (
    <>
      <div className="flex justify-center flex-col gap-10 items-center">
        <select value={gender} onChange={handleChange}>
          <option value="">All</option>
          <option value="female">Femmes</option>
          <option value="male">Hommes</option>

        </select>
        <div className="flex flex-col gap-5">
          {users.map((user) => (
            <article key ={user.login.uuid} className="flex w-100 flex-row gap-5 p-5 bg-blue-100 rounded-xl">
              <div>
                <img src={user.picture.large} alt={user.name.last} className="w-30" />
              </div>
              <div>
                <div className="flex flex-col gap-5">
                  <p className="text-3xl font-bold">{user.name.first} {user.name.last}</p>

                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-xs font-bold">Location : {user.location.city}</p>
                  <p className="text-xs font-bold">Code Postal : {user.location.postcode}</p>
                  <p className="text-xs font-bold">Pays : {user.location.state}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

    </>
  );
}

export default App;