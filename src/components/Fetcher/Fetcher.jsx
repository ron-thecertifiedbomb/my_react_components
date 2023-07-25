import React, { useState, useEffect } from "react";

const sortByName = (data) => {
  const sortedData = [...data]; // Create a shallow copy of the original array

  // Sort the array based on the 'name' property
  sortedData.sort((a, b) => {
    // Convert names to lowercase for case-insensitive sorting
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return sortedData;
};

const Fetcher = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the data is already fetched and cached
        const cachedData = sessionStorage.getItem("cachedData");
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setIsLoading(false);
        } else {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          const fetchedData = await response.json();
          const sortedData = sortByName(fetchedData); // Sort the data by name
          setData(sortedData);
          setIsLoading(false);
          // Cache the data in sessionStorage
          sessionStorage.setItem("cachedData", JSON.stringify(sortedData));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fetcher;
