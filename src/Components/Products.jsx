import { useNavigate } from "react-router-dom";
import products from "../data/All_Products";

function Products() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#fbfaf5] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-semibold text-[#153127] mb-2">
          Our Products
        </h2>
        <p className="text-gray-600 mb-10">
          Discover our complete collection of premium organic seeds
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ id, title, desc, img }) => (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition transform hover:-translate-y-3"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-[#153127] mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-3">{desc}</p>

                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#153127]">TBD</span>
                  <button
                    onClick={() => navigate(`/products/${id}`)}
                    className="text-orange-600 hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
