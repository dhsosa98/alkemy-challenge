const BalanceForm = ({ newBalanceItem, onSubmit, onChange }) => {
    return (
        <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <label>Concept: </label>
            <input name='concept' value={newBalanceItem.concept} onChange={onChange} />

            <label>Amount: </label>
            <input type='number' name='amount' value={newBalanceItem.amount} onChange={onChange} />

            <label>Type: </label>
            <select name='type' value={newBalanceItem.typeOfBalance} onChange={onChange} >
                <option>Income</option>
                <option>Expense</option>
            </select>
            
            <label>Date: </label>
            <input type='date' name='date' value={newBalanceItem.date} onChange={onChange} />
            <button>Add Balance</button>
        </form>
    )
}

export default BalanceForm