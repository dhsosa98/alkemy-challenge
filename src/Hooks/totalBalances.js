const totalBalances = (balances) => {
    let total = 0;
    balances?.forEach(balance => {
    let amountInt = parseInt(balance.amount)
        if (balance.type === 'Income'){
            total += amountInt
        }
        else {
            total -= amountInt
        }
    }
    )
    return total
}

export default totalBalances;
