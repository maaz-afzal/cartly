import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {
  Loader,
  ShoppingBag,
  Heart,
  Truck,
  RotateCcw,
  ArrowLeft,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`,
  );

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size={32} className="animate-spin text-gray-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-red-500 text-lg">Something went wrong!</p>
          <p className="text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 cursor-pointer"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-2xl p-8">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-auto max-h-125 object-contain"
          />
        </div>

        <div className="space-y-5">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wide">
              {data.category}
            </span>
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            {data.title}
          </h1>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl lg:text-4xl font-bold text-gray-900">
              ${data.price}
            </span>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <p className="text-gray-600 leading-relaxed">{data.description}</p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <span className="text-sm font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center gap-3">
              <button
                onClick={decreaseQuantity}
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition flex items-center justify-center"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center font-medium text-gray-900">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition flex items-center justify-center"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-gray-900 text-white py-3 rounded-full font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2">
              <ShoppingBag size={20} />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-full hover:border-red-500 hover:text-red-500 transition">
              <Heart size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck size={18} />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <RotateCcw size={18} />
              <span>30 Days Return</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
