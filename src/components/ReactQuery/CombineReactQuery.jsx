import React from "react";
import { useQuery} from "react-query";

const CombineReactQuery = () => {

  const usersQuery = useQuery("users", () =>
  
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
  );

  const todosQuery = useQuery("todos", () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json())
  );

  if (usersQuery.isLoading || todosQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (usersQuery.error || todosQuery.error) {
    return <div>Error: Unable to fetch data</div>;
  }

  const users = usersQuery.data;
  const todos = todosQuery.data;

 
  const combinedData = [...users, ...todos];

  return (
    <div>
      <h2>Combined Data:</h2>
      <pre>{JSON.stringify(combinedData, null, 2)}</pre>
    </div>
  );
};



export default CombineReactQuery;
