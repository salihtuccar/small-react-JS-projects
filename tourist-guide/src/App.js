import "./App.css";
import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import Categories from "./Categories";

function App() {
  const [menuItems, setMenuItems] = useState(items); //tatil bölgelerimiz
  const [activeCategory, setActiveCategory] = useState(""); //adana mı , mersin mi kategori
  const [categories, setCategories] = useState([
    "all",
    ...new Set(items.map((item) => item.category)),
  ]);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="holiday section">
        <div className="title">
          <h2>Swimming Places in Cukurova</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />

        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
