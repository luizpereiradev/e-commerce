import { FiSearch } from "react-icons/fi";

function SearchInput({ categories }: { categories: string[]}) {
  return (
    <div className="input-group justify-center">
      <input
        type="text"
        placeholder="Search…"
        className="input bg-white lg:w-72 w-10/12 max-w-md border-blue-500 input-bordered"
      />
      <select className="select border-blue-500  bg-white hidden w-max lg:block select-bordered">
        <option disabled selected>
          Categories
        </option>
        {categories.map((category) => (
          <option key={category + 1}>{category}</option>
        ))}
      </select>
      <button className="btn bg-blue-500 border-none hover:bg-blue-400">
        <FiSearch size={20} className='text-white' />
      </button>
    </div>
  );
}

export default SearchInput;
