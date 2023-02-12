import { FiSearch } from "react-icons/fi";

function SearchInput({ categories }: { categories: string[]}) {
  return (
    <div className="input-group justify-center">
      <input
        type="text"
        placeholder="Search…"
        className="input w-10/12 max-w-xs input-bordered"
      />
      <select className="select hidden w-max lg:block select-bordered">
        <option disabled selected>
          Categories
        </option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button className="btn btn-square">
        <FiSearch size={20} />
      </button>
    </div>
  );
}

export default SearchInput;
