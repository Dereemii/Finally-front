/**
 * TextArea component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the TextArea.
 * @param {string} props.value - The value of the TextArea.
 * @param {function} props.onChange - The function to handle onChange event of the TextArea.
 * @returns {JSX.Element} The rendered TextArea component.
 */

export const TextArea = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2">{label}</label>}
      <textarea
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
        id="textarea"
        rows="3"
        value={value}
        onChange={onChange}
        style={{ resize: 'none' }}
      />
    </div>
  );
};
