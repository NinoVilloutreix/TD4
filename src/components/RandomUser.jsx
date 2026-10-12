import useFetch from "../hooks/useFetch";

function RandomUser() {
  const { data, error, isLoading } = useFetch("https://randomuser.me/api/");
  console.log(data.results[0]);
    if(isLoading) return <p>IsLoading</p>

  return
  <>
  {isLoading && <p>IsLoading</p>}
  {error && <p>IsLoading</p>}
  <p>{data.result.name.first}</p>
  </>
}

export default RandomUser;