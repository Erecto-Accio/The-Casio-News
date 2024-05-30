import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl font-semibold">All Category</h1>

      <div className="bg-base-200 mb-2">
        {category.map((item) => (
          <Link key={item.id} to={`/category/${item.id}`}>
            <a className="block hover:bg-gray-200 p-3">{item.name}</a>
          </Link>
        ))}
      </div>

      
    </div>
  );
};

export default LeftNav;
