import { useState } from 'react';
import { useSavings } from '../context/SavingContext';
import TierSelector from './TierSelector';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [tier, setTier] = useState('');
  const { addStudent } = useSavings();

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(name, tier);
    setName('');
    setTier('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter student name"
            required
          />
        </div>
        <TierSelector tier={tier} setTier={setTier} />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;