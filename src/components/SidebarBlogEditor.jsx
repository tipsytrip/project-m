import React from "react";

function SidebarBlogEditor() {
  return (
    <main
      className="h-screen w-full flex"
      // className="fixed right-0 top-0 w- border border-black h-screen"
    >
      <div className="w-2 flex justify-center items-center bg-light-mode-white-1"/>
      <div className="px-5 overflow-y-auto">
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Name
          </label>
          <input
            // value={form.name}
            type="text"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md w-full"
            onChange={(e) => {
              // setForm({ ...form, name: e.target.value });
            }}
          ></input>
        </div>

        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Price
          </label>
          <input
            // value={form.price}
            type="number"
            min="0"
            maxLength="1000000000"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md w-full"
            onChange={(e) => {
              // setForm({ ...form, price: e.target.value });
            }}
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Stock
          </label>
          <input
            // value={form.stock}
            type="number"
            min="0"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md w-full"
            onChange={(e) => {
              // setForm({ ...form, stock: e.target.value });
            }}
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Brand
          </label>
          <input
            // value={form.brand}
            type="text"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md w-2/5"
            onChange={(e) => {
              // setForm({ ...form, brand: e.target.value });
            }}
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Weight
          </label>
          <input
            // value={form.weight}
            type="number"
            min="0"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md w-full"
            onChange={(e) => {
              // setForm({ ...form, weight: e.target.value });
            }}
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Category
          </label>
          <select
            // value={form.category}
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md w-2/5"
            name="category"
            id="category"
            onChange={(e) => {
              // setForm({ ...form, category: e.target.value });
            }}
          >
            <option value="business">Business</option>
            <option value="artist">Artist</option>
            <option value="gaming">Gaming</option>
            <option value="school">School</option>
          </select>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Condition
          </label>
          <select
            // value={form.condition}
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md w-2/5"
            name="condition"
            id="condition"
            onChange={(e) => {
              // setForm({ ...form, condition: e.target.value })
            }}
          >
            <option value="new">New</option>
            <option value="second">Second</option>
          </select>
        </div>
        <div className="px-5 py-2">
        <button
                  className="text-2xl py-2 border text-lightColor hover:border-lightColor focus:border-lightColor bg-darkColor p-2 rounded-md"
                  name="condition"
                  id="condition"
                  onClick={() => {
                    // editProductHandler();
                    // navigate("/cms/dashboard");
                  }}
                >
                  Save
                </button>
                </div>
      </div>
    </main>
  );
}

export default SidebarBlogEditor;
