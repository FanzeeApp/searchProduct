import { useState } from "react";
import axios from "axios";

function Admin() {
  let [productInfo, setProductInfo] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
  });

  async function submitBtn(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        productInfo
      );
      console.log("Product added successfully:", response.data);

      setProductInfo({
        name: "",
        image: "",
        description: "",
        price: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Product Qo'shish
        </h1>
        <form className="flex flex-col gap-6" onSubmit={submitBtn}>
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            placeholder="Product name..."
            value={productInfo.name}
            onChange={(e) => {
              setProductInfo((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            placeholder="Product image URL..."
            value={productInfo.image}
            onChange={(e) => {
              setProductInfo((prev) => ({ ...prev, image: e.target.value }));
            }}
          />
          <textarea
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none h-24"
            placeholder="Product description..."
            value={productInfo.description}
            onChange={(e) => {
              setProductInfo((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
          ></textarea>
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            placeholder="Price..."
            value={productInfo.price}
            onChange={(e) => {
              setProductInfo((prev) => ({ ...prev, price: e.target.value }));
            }}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition duration-300"
          >
            Qo'shish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
