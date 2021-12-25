const OperationItem = ({operationList, onEdit, setOpen, setDeleteId, pageLimit}) => {
    return (  
      <tbody className="bg-white divide-y divide-gray-200">
      {operationList?.slice(pageLimit.prev, pageLimit.next+1).map((operation, count) => (
        <tr key={operation.id} >
          <td className="px-6 py-4 whitespace-nowrap">
           {operation.concept}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
      {operation["type"] === "Expense" && <>{"-"}</>}{operation.amount}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {operation["type"] === "Expense" ? <strong className=" text-red-500">{operation.type}</strong> : <strong className=" text-green-500">{operation.type}</strong>}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {operation.date}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              <button className=" w-20 bg-red-600 text-white rounded-lg p-1" onClick={()=>{setOpen(true)
              setDeleteId(operation.id)}} >Delete</button>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              <button className="text-indigo-600 hover:text-indigo-900" onClick={()=>onEdit(operation)} >Edit</button>
          </td>
        </tr>
      ))}
    </tbody>
    )
}

export default OperationItem