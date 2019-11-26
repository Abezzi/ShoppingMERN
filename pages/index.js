import React from "react";
import axios from "axios";

function Home(products) {
  console.log(products);
  //React.useEffect(() => {
  //  //perform a side effect, interacting with the outside world
  //  getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = "http://localhost:3000/api/products";
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // }

  return <>HOlaaa</>;
}

Home.getInitialProps = async () => {
  //fetch data on server
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url);
  //return the response data as an object
  return { products: response.data };
  //note this object will be merge with existing props
  return { hello: "world" };
};

export default Home;
