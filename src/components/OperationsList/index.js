import { useContext, useState } from "react";
import Pagination from "../Pagination";
import OperationItem from "../OperationItem";
import HeaderTable from "../HeaderTable";
import TableLayout from "../TableLayout";
import { QueriesContext } from "../../QueriesContext";

const OperationsList = ({ ...props }) => {
  const { operationList, onDelete, onEdit, cantOperations } = props;

  const [toggleSort, setToggleSort] = useState({
    concept: false,
    category: false,
    amount: false,
    type: false,
    date: false,
  });
  const { setHistorySearchParams, querys } = useContext(QueriesContext);

  const handleToggleSort = (e) => {
    e.preventDefault();
    const name = e.currentTarget.getAttribute("name") || "concept";
    let sortString = "";
    toggleSort[name]
      ? (sortString = name + ":ASC")
      : (sortString = name + ":DESC");
    querys.get("sort")
      ? querys.get("sort").includes(name)
        ? querys.set("sort", querys.get("sort").split(name)[0] + sortString)
        : querys.set("sort", querys.get("sort") + "," + sortString)
      : querys.set("sort", sortString);
    toggleSort[name] = !toggleSort[name];
    setToggleSort(toggleSort);
    setHistorySearchParams(querys);
  };

  const handleResetSort = (e) => {
    let name = e.currentTarget.getAttribute("name") || "concept";
    let sort = querys.get("sort");
    let regex = new RegExp(`,*${name}:ASC,*|,*${name}:DESC,*`, "i");
    !sort?.split(",")[0]?.search(regex) ||
    !sort?.split(",")[sort?.split(",").length - 1]?.search(regex)
      ? (sort = sort?.replace(regex, ""))
      : (sort = sort?.replace(regex, ","));
    querys.set("sort", sort);
    !sort && querys.delete("sort");
    toggleSort[name] = false;
    setToggleSort(toggleSort);
    setHistorySearchParams(querys);
  };

  return (
    <>
      <TableLayout>
        <HeaderTable
          handleResetSort={handleResetSort}
          handleToggleSort={handleToggleSort}
          toggleSort={toggleSort}
        />
        <OperationItem
          operationList={operationList}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </TableLayout>
      <Pagination cantOperations={cantOperations} />
    </>
  );
};

export default OperationsList;
