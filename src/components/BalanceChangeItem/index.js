const BalanceChangeItem = ({balanceList, onDelete, onEdit}) => {


    return (
        <>
        {balanceList?.map((balance) => (
        <div key={balance.id} style={{margin: '40px'}}>
            <h1 id={balance.id} >{balance.concept}</h1>
            <h2>{balance.type}</h2>
            <h3>{balance.amount}</h3>
            <h4>{balance.date}</h4>
            <button onClick={(e)=>onEdit(e, balance)} >Edit</button>
            <button onClick={(e)=>onDelete(e, balance.id)} >Delete</button>
        </div>
        )
        )
}
</>
)}

export default BalanceChangeItem