import { useSavings } from '../context/SavingContext';

const Dashboard = () => {
  const { totalSavings, students } = useSavings();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Savings Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-md">
          <h3 className="text-lg font-semibold">Total Savings</h3>
          <p className="text-2xl">₦{totalSavings.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-green-100 rounded-md">
          <h3 className="text-lg font-semibold">Total Members</h3>
          <p className="text-2xl">{students.length}/12</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-md">
          <h3 className="text-lg font-semibold">Game ROI</h3>
          <p className="text-2xl">20%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;