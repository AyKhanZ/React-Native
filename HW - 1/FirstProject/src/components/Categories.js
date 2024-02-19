import React, { useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState(["Goal", "Event", "Task"]);

  function drawCategories() {
    return categories.map((category, i) => (
      <Category key={i} title={category} />
    ));
  }
  return drawCategories();
};

export default Categories;
