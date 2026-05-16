import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ProductCard = ({ title, price, image, description, category, id }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, title, price, image, category }, 1);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    console.log("Add to wishlist");
  };

  return (
    <div
      className="group relative w-full bg-white rounded-4xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="relative h-60 w-full overflow-hidden bg-gray-50 p-6">
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 transition-all group-hover:bg-[#256EFF] group-hover:text-white group-hover:ring-[#256EFF]">
            {category}
          </span>
        </div>

        <button
          aria-label="Add to wishlist"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm ring-1 ring-gray-200 transition-all hover:bg-red-50 hover:text-red-500 hover:scale-110 active:scale-95"
          onClick={handleFavorite}
        >
          <Heart size={18} className="text-gray-600" />
        </button>

        <img
          src={image}
          alt={title}
          className="h-full w-full transition-transform duration-500 object-cover group-hover:scale-105 drop-shadow-sm rounded-xl"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1 mb-2 group-hover:text-[#256EFF] transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
              Price
            </span>
            <span className="text-xl font-extrabold text-gray-900">
              ${price}
            </span>
          </div>

          <button
            className="flex items-center gap-2 rounded-full bg-[#256EFF] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#1a54cc] hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 cursor-pointer"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
