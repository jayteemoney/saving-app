const TierSelector = ({ tier, setTier }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Savings Tier</label>
      <select
        value={tier}
        onChange={(e) => setTier(e.target.value)}
        className="mt-1 block w-full p-2 border rounded-md"
        required
      >
        <option value="">Select a tier</option>
        <option value="Tier 1">Tier 1 (₦10,000, 5% interest)</option>
        <option value="Tier 2">Tier 2 (₦20,000, 10% interest)</option>
        <option value="Tier 3">Tier 3 (₦30,000, 20% interest)</option>
      </select>
    </div>
  );
};

export default TierSelector;