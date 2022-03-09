import { SearchIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { QueriesContext } from "../../QueriesContext";

const SearchBar = ({ ...props }) => {
  const { search, from, to, querys, setHistorySearchParams } =
    useContext(QueriesContext);

  const handleChangeSearch = (e) => {
    querys.set("search", e.target.value);
    setHistorySearchParams(querys);
  };

  const handleChangeSearchFrom = (e) => {
    querys.set("from", e.target.value);
    setHistorySearchParams(querys);
  };

  const handleChangeSearchTo = (e) => {
    querys.set("to", e.target.value);
    setHistorySearchParams(querys);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setHistorySearchParams(querys);
  };
  return (
    <form
      className="flex sm:flex-row flex-col justify-center  px-5 my-5 sm:gap-0 gap-2 "
      onSubmit={handleSearch}
    >
      <div className=" flex flex-row w-full sm:w-96">
        <input
          type="text"
          placeholder="Search by concept or category"
          className="w-full sm:text-lg pl-2 bg-white h-11 border-indigo-600 border-2 rounded-l-full outline-none text-xs"
          value={search}
          onChange={handleChangeSearch}
        />
        <button className=" bg-indigo-600 rounded-r-full sm:rounded-none">
          <SearchIcon className="h-11 sm:text-lg py-3 px-2 sm:rounded-none rounded-r-full text-white border border-indigo-600 sm:hover:text-gray-300 cursor-pointer text-xs" />
        </button>
      </div>
      <div className=" flex flex-col sm:flex-row">
        <label className="sm:hidden">From:</label>
        <input
          type={from ? "date" : "text"}
          placeholder="From: dd/mm/aaaa"
          onFocus={(e) => {
            e.currentTarget.type = "date";
            e.currentTarget.focus();
          }}
          className=" w-full sm:text-lg p-1 bg-white h-11 border-indigo-600 sm:border-l-0 sm:border-r-0 border-2 sm:border-t-2 sm:border-b-2 outline-none text-xs"
          value={from}
          onChange={handleChangeSearchFrom}
        />
        <label className="sm:hidden">To:</label>
        <input
          type={to ? "date" : "text"}
          placeholder="To: dd/mm/aaaa"
          onFocus={(e) => {
            e.currentTarget.type = "date";
            e.currentTarget.focus();
          }}
          className=" w-full sm:text-lg p-1  bg-white h-11 border-indigo-600 border-2 sm:rounded-r-full outline-none text-xs"
          value={to}
          onChange={handleChangeSearchTo}
        />
      </div>
    </form>
  );
};

export default SearchBar;
