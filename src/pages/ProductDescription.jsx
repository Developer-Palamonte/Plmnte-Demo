import { useParams, useNavigate } from "react-router-dom";
import products from "../data/All_Products";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);
  const [pack, setPack] = useState(product.packSizes[0]);
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <section className="bg-[#fbfaf5] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={() => navigate("/products")}
          className="mb-6 text-xl cursor-pointer text-gray-600"
        >
          ← Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <img
            src={product.img}
            className="rounded-xl w-full object-cover"
          />

          <div>
            <h1 className="text-4xl font-serif mb-2">{product.title}</h1>
            <p className="mb-4">{product.price}</p>
            <p className="text-gray-600 mb-6">{product.desc}</p>

            <p className="mb-2 font-medium">Pack Size</p>
            <div className="flex gap-2 mb-6">
              {product.packSizes.map((p) => (
                <button
                  key={p}
                  onClick={() => setPack(p)}
                  className={`px-4 py-2 rounded-full shadow-xl cursor-pointer ${
                    pack === p
                      ? "bg-[#11261d] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6 text-lg font-semibold">
              <button className="cursor-pointer" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button className="cursor-pointer" onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <button
              onClick={() => addToCart(product, pack, qty)}
              className="w-full bg-orange-600 text-white py-4 rounded-full cursor-pointer"
            >
              Add to Cart
            </button>

            <h3 className="mt-10 text-lg font-semibold">Health Benefits</h3>
            <ul className="mt-4 space-y-2">
              {product.benefits.map((b) => (
                <li key={b} className="border-b py-2">{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif mb-8 text-center">
            Customer Reviews
          </h2>

          <div className="max-w-2xl mx-auto bg-[#f5f7f3] p-8 rounded-xl">
            <p className="font-medium mb-2">Write a Review</p>
            <input
              placeholder="Your Name"
              className="w-full border p-3 rounded mb-4"
            />
            <textarea
              placeholder="Your Review"
              className="w-full border p-3 rounded mb-4"
            />
            <button className="bg-[#163d2d] text-white px-6 py-2 rounded-full cursor-pointer">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDescription;
