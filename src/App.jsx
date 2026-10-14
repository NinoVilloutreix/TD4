import useFetch from "./hooks/useFetch";
import Card from "./components/Card"
import { motion } from "motion/react";

function App() {  
  const { data, error, isLoading } = useFetch("https://rickandmortyapi.com/api/character");

  if (isLoading) return <p>isloading</p>
  if (error) return <p>error</p>

  console.log(data.results[0]);

  const user = data.results[0];
  const users = data.results;
  return (
    <>
      <div className="flex justify-center flex-col gap-10 items-center font-roboto text-white bg-dark">
        <img src="src\assets\Rick_and_Morty_logo.png" alt="Rick&MortyLogo"></img>
        <ul className="flex justify-center flex-wrap gap-5">
          {users.map((user,i) => (
            <li key={i}>
            <Card id = {i} user={user}/>
            </li>
          ))}
        </ul>

      </div>

    </>
  );
}

export default App;