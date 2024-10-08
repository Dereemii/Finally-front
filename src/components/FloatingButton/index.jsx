'use client';
export const FloatingButton = ({ onChange }) => {
  return (
    <>
      <button
        className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-white text-black shadow-md hover:bg-gray-200"
        onClick={() => document.getElementById('fileInput').click()}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 8.97071L9.93557 16.5351C9.00887 17.4618 7.75199 17.9825 6.44144 17.9825C5.13089 17.9825 3.87401 17.4618 2.94731 16.5351C2.02061 15.6084 1.5 14.3516 1.5 13.041C1.5 11.7305 2.02061 10.4736 2.94731 9.54689L10.5117 1.98245C11.1295 1.36465 11.9675 1.01758 12.8412 1.01758C13.7149 1.01758 14.5528 1.36465 15.1706 1.98245C15.7884 2.60025 16.1355 3.43817 16.1355 4.31187C16.1355 5.18557 15.7884 6.02349 15.1706 6.64129L7.59792 14.2057C7.28902 14.5146 6.87006 14.6882 6.43321 14.6882C5.99636 14.6882 5.5774 14.5146 5.2685 14.2057C4.9596 13.8968 4.78606 13.4779 4.78606 13.041C4.78606 12.6042 4.9596 12.1852 5.2685 11.8763L12.2568 4.89628"
            stroke="black"
            stroke-width="1.64623"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <input type="file" id="fileInput" accept=".pdf" onChange={onChange} className="hidden" />
    </>
  );
};
