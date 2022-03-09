import { SortAscendingIcon, SortDescendingIcon } from "@heroicons/react/solid";
import React from "react";

function HeaderTable({ handleResetSort, handleToggleSort, toggleSort }) {
  return (
    <thead className="bg-indigo-600">
      <tr className=" bg-indigo-600">
        <th
          scope="col"
          className="px-3 sm:px-6 py-3 text-left  text-white uppercase tracking-wider bg-indigo-600"
        >
         <ItemHeader
            handleResetSort={handleResetSort}
            handleToggleSort={handleToggleSort}
            toggleSort={toggleSort}
            name={"concept"}
          />
        </th>
        <th
          scope="col"
          className="px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider bg-indigo-600"
        >
          <ItemHeader
            handleResetSort={handleResetSort}
            handleToggleSort={handleToggleSort}
            toggleSort={toggleSort}
            name={"category"}
          />
        </th>
        <th
          scope="col"
          className="px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider bg-indigo-600"
        >
          <ItemHeader
            handleResetSort={handleResetSort}
            handleToggleSort={handleToggleSort}
            toggleSort={toggleSort}
            name={"amount"}
          />
        </th>
        <th
          scope="col"
          className="px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider bg-indigo-600"
        >
          <ItemHeader
            handleResetSort={handleResetSort}
            handleToggleSort={handleToggleSort}
            toggleSort={toggleSort}
            name={"type"}
          />
        </th>
        <th
          scope="col"
          className="px-3 sm:px-6 py-3 text-left text-white uppercase tracking-wider bg-indigo-600"
        >
          <ItemHeader
            handleResetSort={handleResetSort}
            handleToggleSort={handleToggleSort}
            toggleSort={toggleSort}
            name={"date"}
          />
        </th>
        <th scope="col" className="relative px-3 sm:px-6 py-3 bg-indigo-600">
          <span className="sr-only">Delete</span>
        </th>
        <th scope="col" className="relative px-3 sm:px-6 py-3 bg-indigo-600">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
}

function ItemHeader({ handleResetSort, handleToggleSort, toggleSort, name }) {
  return (
    <div className="inline-flex">
      <button
        name={name}
        className={"mr-1 hover:text-indigo-300"}
        onClick={(e) => {
          handleResetSort(e);
        }}
      >
        {name?.toUpperCase()}
      </button>
      {toggleSort[name] ? (
        <SortAscendingIcon
          name={name}
          className=" h-4 sm:h-8 cursor-pointer hover:text-indigo-300"
          onClick={(e) => {
            handleToggleSort(e);
          }}
        />
      ) : 
      ( 
        <SortDescendingIcon
          name={name}
          className=" h-4 sm:h-8 cursor-pointer hover:text-indigo-300"
          onClick={(e) => {
            handleToggleSort(e);
          }}
        />
      )}
    </div>
  );
}
export default HeaderTable;
