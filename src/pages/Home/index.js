import BalanceChangeList from '../../components/BalanceChangeList'

export default function Home({user}) {
    return (
        
        <>
        <h1>Hello user {user}</h1>
        <BalanceChangeList />
        </>
    )
    
}
