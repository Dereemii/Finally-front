/**
 * Component that renders an array of text strings as a series of <p> elements,
 * stacked vertically using Tailwind CSS.
 *
 * @param {Object} props - The component's props.
 * @param {string[]} props.texts - An array of text strings to be rendered.
 * @returns {JSX.Element} The rendered component.
 */
export const MultiText = ({ texts }) => {
  return (
    <div className="my-8 space-y-3 px-10">
      {texts.map((text, index) => (
        <p key={index} className="text-center text-[12px] text-[#A0A0A0]">
          {text}
        </p>
      ))}
    </div>
  );
};
