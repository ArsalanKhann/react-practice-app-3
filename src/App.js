import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const filterItems = (category) => {
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
};

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([allCategories]);

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
