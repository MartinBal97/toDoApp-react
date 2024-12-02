import "./Category.css";

export default function Category({
  data,
  setTasksSameCategory,
  tasksSameCategory,
}) {
  const allCategories = [
    "All",
    ...new Set(data.map((task) => task.category.category)),
  ];

  const filterCategory = (e) => {
    const category = e.target.innerText;

    if (category === "ALL") {
      setTasksSameCategory(data);
      if (tasksSameCategory.length === 0) {
        alert("You have not added tasks yet");
      }
    } else {
      setTasksSameCategory(
        data.filter((e) => e.category.category === category)
      );
    }
  };

  return (
    <div className="containerCategory">
      <h2 className="titleCateg">Categories</h2>
      {allCategories.map((categs, i) => {
        return (
          <button onClick={filterCategory} className="categ" key={i}>
            {categs.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
