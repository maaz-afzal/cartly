import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard";

const Home = () => {
  const products = [
    {
      title: "Beauty",
      description: "This is the fake description",
      price: 100,
      category: "Beauty",
      image:
        "https://i1-e.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg",
    },
    {
      title: "Beauty",
      description: "This is the fake description",
      price: 100,
      category: "Beauty",
      image:
        "https://i1-e.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg",
    },
    {
      title: "Beauty",
      description: "This is the fake description",
      price: 100,
      category: "Beauty",
      image:
        "https://i1-e.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg",
    },
    {
      title: "Beauty",
      description: "This is the fake description",
      price: 100,
      category: "Beauty",
      image:
        "https://i1-e.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg",
    },
  ];
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
          <Button label="All" isActive={true} />
          <Button label="Electronics" isActive={false} />
          <Button label="Jewelery" isActive={false} />
          <Button label=" Men Clothing" isActive={false} />
          <Button label="Women Clothing" isActive={false} />
        </div>
      </section>

      {/* Product section */}
      <section className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Home;
