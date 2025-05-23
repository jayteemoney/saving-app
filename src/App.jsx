import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Dashboard from './components/Dashboard';
import { SavingContext } from './context/SavingContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <SavingContext>
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Savings Group App</h1>
          <Dashboard />
          <StudentForm />
          <StudentList />
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </SavingContext>
  );
}

export default App;