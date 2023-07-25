import React from "react";
import { useQuery } from "react-query";

const fetchProductList = async () => {
    
  try {
    const headers = {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
      "x-idempotence-key": "dad2sa",
      "platform-type": "sddd",
      "app-version": "1",
      "os-version": "2",
      "device-model": "apple",
      "device-id": "guest",
      "user-name": "guest",
    };

    const response = await fetch(
      "https://qagateway.eshop2drop.com/api/recommend/products?pageSize=100&pageIndex=1&username=albert95797",
      {
        method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }

    const data = await response.json();
    return data.data.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const ProductList = () => {
  // Use the useQuery hook to fetch the product list and handle caching, refetching, etc.
  const { data, isLoading, error } = useQuery("productList", fetchProductList);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Product List:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProductList;
