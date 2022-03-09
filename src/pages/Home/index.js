import React, { useContext } from "react";
import { useState, useEffect } from "react";
import OperationsList from "../../components/OperationsList";
import ModalOperationForm from "../../components/ModalOperationForm";
import operationService from "../../services/operations";
import SearchBar from "../../components/SearchBar";
import BalanceBox from "../../components/BalanceBox";
import { QueriesContext } from "../../QueriesContext";
import ModalWindow from "../../components/ModalWindow";

export default function Home() {
  const [total, setTotal] = useState(0);
  const newOperationInit = {
    concept: "",
    category: "Crypto",
    amount: 0,
    type: "Income",
    date: "",
  };
  const [operationList, setOperationList] = useState([]);
  const [newOperationItem, setNewOperationItem] = useState(newOperationInit);
  const [isOpen, setIsOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [isLoadingOperation, setIsLoadingOperation] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [cantOperations, setCantOperations] = useState(0);
  const { querys } = useContext(QueriesContext);
  const [modalText, setModalText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    operationService.getOperationList(querys).then((operations) => {
      const { rows, count, total } = operations || {};
      setCantOperations(count);
      setOperationList(rows);
      setTotal(total);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingOperation, querys]);

  const handleSubmitOperationItem = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    operationService.submitOperationItem(isEdit, newOperationItem).then(() => {
      setIsSubmitting(false)
      setIsLoadingOperation(!isLoadingOperation);
      setIsOpen(false);
      setNewOperationItem(newOperationInit);
      setTimeout(() => {
        if (isEdit) {
          setModalText("The operation has been updated successfully");
        } else {
          setModalText("The operation has been created successfully");
        }
        setOpenConfirmModal(true);
      }, 300);
    });
  };

  const handleDeleteOperationItem = (id) => {
    operationService.deleteOperationItem(id).then(() => {
      setIsLoadingOperation(!isLoadingOperation);
      setTimeout(() => {
        setModalText("The operation has been deleted successfully");
        setOpenConfirmModal(true);
      }, 300);
    });
  };

  const handleUpdateOperationItem = (operationItem) => {
    setIsEdit(true);
    setIsOpen(true);
    setNewOperationItem(operationItem);
  };

  const handleChangeInputOperationItem = (e) => {
    setNewOperationItem({
      ...newOperationItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenModal = () => {
    setNewOperationItem(newOperationInit);
    setIsOpen(true);
    setIsEdit(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setOpenConfirmModal(false);
  };

  return (
    <>
      <BalanceBox total={total} handleOpenModal={handleOpenModal} />
      <SearchBar />
      <OperationsList
        operationList={operationList}
        onEdit={handleUpdateOperationItem}
        onDelete={handleDeleteOperationItem}
        cantOperations={cantOperations}
      />
      <ModalOperationForm
        onSubmit={handleSubmitOperationItem}
        onChange={handleChangeInputOperationItem}
        newOperationItem={newOperationItem}
        isEdit={isEdit}
        isOpen={isOpen}
        isSubmitting={isSubmitting}
        handleCloseModal={handleCloseModal}
      />
      <ModalWindow
        modalText={modalText}
        open={openConfirmModal}
        handleConfirm={handleConfirm}
        type="confirm"
      />
    </>
  );
}
