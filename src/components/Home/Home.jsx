import React from "react";
import { Data } from "../data/data";
import Product from "../Product/Product";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="py-28 px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto sm:max-w-none sm:mx-0">
            {Data.map((product) => {
              return <Product product={product} key={product.name} />;
            })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
