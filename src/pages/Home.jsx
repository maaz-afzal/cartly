import { Loader } from "lucide-react";
import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products",
  );

  const [filter, setFilter] = useState("");

  if (loading)
    return (
      <div className="w-full max-w-6xl mx-auto">
        <Loader
          size={50}
          className="mx-auto flex items-center justify-center h-screen animate-spin"
        />
      </div>
    );

  if (error)
    return <div className="w-full max-w-6xl mx-auto mt-8 px-4">{error}</div>;

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4">
      {/* Hero section */}
      <section className="flex flex-col items-center text-center py-20 rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
          Shop Smarter, <span className="text-[#256EFF]">Live Better</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl text-sm md:text-base">
          Discover trending products, unbeatable deals, and a seamless shopping
          experience designed just for you.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-[#256EFF] text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition cursor-pointer">
            Shop Now
          </button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="mt-8 flex flex-wrap justify-between items-center">
        <h2 className="text-2xl font-serif font-bold">Featured Products</h2>
        <div className="flex gap-2">
          <Button
            label="All"
            isActive={filter === "All" || filter === "" ? true : false}
            onClick={() => handleFilter("All")}
          />
          <Button
            label="Electronics"
            isActive={filter === "electronics"}
            onClick={() => handleFilter("electronics")}
          />
          <Button
            label="Jewelery"
            isActive={filter === "jewelery"}
            onClick={() => handleFilter("jewelery")}
          />
          <Button
            label=" Men Clothing"
            isActive={filter === "men's clothing"}
            onClick={() => handleFilter("men's clothing")}
          />
          <Button
            label="Women Clothing"
            isActive={filter === "women's clothing"}
            onClick={() => handleFilter("women's clothing")}
          />
        </div>
      </section>

      {/* Product section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {(filter === "All" || filter === ""
          ? data
          : data.filter((p) => p.category === filter)
        ).map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            category={product.category}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
