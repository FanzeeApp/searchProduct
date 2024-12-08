import { useState, useEffect } from "react";
import axios from "axios";
import AvtoCard from "./components/Avtocard/avtocard";

function App() {
  let [products, setProducts] = useState([]);
  let [allProducts, setAllProducts] = useState([]);
  let [search, setSearch] = useState("");

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data.data);
      setAllProducts(res.data.data);
    } catch (error) {
      console.error("Product fetch qilishda xatolik: ", error);
    }
  };

  const fetchFilteredProducts = async () => {
    if (search === "") {
      setProducts(allProducts);
    } else {
      try {
        const res = await axios.get(
          `http://localhost:5000/products?search=${search}`
        );
        setProducts(res.data.data);
      } catch (error) {
        console.error("Fetch da xatolik: ", error);
      }
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    fetchFilteredProducts();
  }, [search]);

  function searchInput(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center mt-8 mb-8">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Mahsulotni qidish..."
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={searchInput}
              value={search}
            />
            <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l6-6m0 0l6 6m-6-6v12"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between pl-3 pr-3 mt-5 mb-5">
          <h2 className="text-stone-400">Popular Car</h2>
          <h2 className="text-cyan-400">View All</h2>
        </div>
        <div className="flex flex-row flex-wrap gap-6 justify-between">
          {products.map((item) => (
            <AvtoCard
              key={item.id}
              imageUrl={item.image}
              carName={item.name}
              price={item.price}
            />
          ))}
        </div>

        <div className="flex justify-center mt-[60px] mb-[60px]">
          <button className="pt-3 pb-3 pl-4 pr-4 bg-blue-600 text-cyan-50 rounded-[8px]">
            <a href="/Admin">Admin</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
