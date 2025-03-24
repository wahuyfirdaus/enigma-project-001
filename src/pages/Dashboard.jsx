import Navbar from "../components/Navbar";
import TransactionList from "../components/TransactionList";


const Dashboard = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div className="p-40">
      <div>
      <TransactionList/>
      </div>
      </div>
    </div>
  )
}
export default Dashboard
