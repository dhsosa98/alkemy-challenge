import { useState } from "react";
import ModalWindow from "../ModalWindow";

const OperationItem = ({ ...props }) => {
  const { operationList, onEdit, onDelete } = props;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [id, setId] = useState(null);

  const handleClose = () => {
    setOpenDeleteModal(false);
  };

  const handleDelete = (id) => {
    onDelete(id);
    setOpenDeleteModal(false);
  };

  return (
    <tbody className="">
      {operationList?.map((operation, count) => (
        <tr
          key={operation.id}
          className={`${
            count % 2 === 0
              ? "bg-indigo-100 "
              : "bg-indigo-50 "
          } transform hover:scale-105 relative duration-300 ease-in-out hover:z-10 cursor-pointer`}
        >
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
            {operation.concept}
          </td>
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
            {operation.category}
          </td>
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
            {"$"}
            {operation["type"] === "Expense" && <>{"-"}</>}
            {operation.amount}
          </td>
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
            {operation["type"] === "Expense" ? (
              <strong className=" text-red-500">{operation.type}</strong>
            ) : (
              <strong className=" text-green-500">{operation.type}</strong>
            )}
          </td>
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
            {operation.date}
          </td>
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
            <button
              className=" w-20 bg-red-600 hover:bg-red-700 text-white rounded-lg p-1 transform hover:scale-105 duration-300 ease-in-out"
              onClick={() => {
                setOpenDeleteModal(true);
                setId(operation.id);
              }}
            >
              Delete
            </button>
          </td>
          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
            <button
              className="text-indigo-600 hover:text-indigo-900 hover:underline"
              onClick={() => onEdit(operation)}
            >
              Edit
            </button>
          </td>
        </tr>
      ))}
      <ModalWindow
        modalText={"Are you sure you want to delete this operation?"}
        open={openDeleteModal}
        handleClose={() => handleClose()}
        handleConfirm={() => handleDelete(id)}
        type={"delete"}
      />
    </tbody>
  );
};

export default OperationItem;
