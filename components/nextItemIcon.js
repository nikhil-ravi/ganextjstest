const NextItemIcon = () => {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-slate-400/30 dark:bg-gray-200/30 group-hover:bg-slate-400/50 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      <span className="sr-only">Next</span>
    </span>
  );
};

export default NextItemIcon;
