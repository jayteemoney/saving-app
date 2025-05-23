import { useSavings } from '../context/SavingContext';

const StudentList = () => {
  const { students, removeStudent } = useSavings();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Group Members</h2>
      {students.length === 0 ? (
        <p className="text-gray-500">No students registered yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount (₦)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Interest (₦)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total (₦)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.tier}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.interest.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.total.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => removeStudent(student.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Withdraw
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;