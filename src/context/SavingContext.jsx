import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const SavingsContext = createContext();

export const SavingContext = ({ children }) => {
  const [students, setStudents] = useState([]);

  const tiers = {
    'Tier 1': { amount: 10000, interestRate: 0.05 },
    'Tier 2': { amount: 20000, interestRate: 0.10 },
    'Tier 3': { amount: 30000, interestRate: 0.20 },
  };

  const addStudent = (name, tier) => {
    if (!name || !tier) {
      toast.error('Please provide a name and select a tier.');
      return;
    }

    if (students.length >= 12) {
      toast.error('Cannot add more than 12 students.');
      return;
    }

    const selectedTier = tiers[tier];
    if (!selectedTier) {
      toast.error('Invalid tier selected.');
      return;
    }

    const newStudent = {
      id: uuidv4(),
      name,
      tier,
      amount: selectedTier.amount,
      interest: selectedTier.amount * selectedTier.interestRate,
      total: selectedTier.amount * (1 + selectedTier.interestRate),
    };

    setStudents([...students, newStudent]);
    toast.success(`${name} added to ${tier} successfully!`);
  };

  const removeStudent = (id) => {
    const student = students.find((s) => s.id === id);
    setStudents(students.filter((s) => s.id !== id));
    toast.success(`${student?.name} has withdrawn and left the group.`);
  };

  const totalSavings = students.reduce((sum, student) => sum + student.total, 0);

  return (
    <SavingsContext.Provider value={{ students, addStudent, removeStudent, totalSavings }}>
      {children}
    </SavingsContext.Provider>
  );
};

export const useSavings = () => {
  const context = useContext(SavingsContext);
  if (!context) {
    throw new Error('useSavings must be used within a SavingsProvider');
  }
  return context;
};