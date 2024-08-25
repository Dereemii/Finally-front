export const InputLabel = ({ label }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2">{label}</label>}
      <input type="text" className="rounded-md border border-gray-300 p-2" />
    </div>
  );
};
