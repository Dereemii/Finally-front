/**
 * BaseButton component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be displayed inside the button.
 * @returns {JSX.Element} The rendered BaseButton component.
 */
export const BaseButton = ({ text }) => {
  return (
    <>
      <button
        type="button"
        class="flex w-full items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm text-white hover:bg-gray-900 focus:outline-none focus:ring-gray-300 dark:border-gray-700 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        {text}
      </button>
    </>
  );
};
