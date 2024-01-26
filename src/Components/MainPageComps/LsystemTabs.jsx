function LsystemTabs({ activeTab, setActiveTab }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2 cursor-pointer">
          <a
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("Deterministic");
            }}
            className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group 
      ${
        activeTab === "Deterministic"
          ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
          : "text-gray-500 border-transparent dark:text-gray-400"
      }`}
            aria-current={activeTab === "Deterministic" ? "page" : undefined}>
            <svg
              className={`w-4 h-4 me-2 ${
                activeTab === "Deterministic"
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path d="M15.75 3a.75.75 0 0 1 .75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 0 1 0 1.5h-3.5A1.75 1.75 0 0 1 15 7.25v-3.5a.75.75 0 0 1 .75-.75Zm-7.5 0a.75.75 0 0 1 .75.75v3.5A1.75 1.75 0 0 1 7.25 9h-3.5a.75.75 0 0 1 0-1.5h3.5a.25.25 0 0 0 .25-.25v-3.5A.75.75 0 0 1 8.25 3ZM3 15.75a.75.75 0 0 1 .75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1-.75-.75Zm12 1c0-.966.784-1.75 1.75-1.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0Z"></path>
            </svg>
            Deterministic
          </a>
        </li>
        <li className="me-2 cursor-pointer">
          <a
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("Stochastic");
            }}
            className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group 
      ${
        activeTab === "Stochastic"
          ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
          : "text-gray-500 border-transparent dark:text-gray-400"
      }`}
            aria-current={activeTab === "Stochastic" ? "page" : undefined}>
            <svg
              className={`w-4 h-4 me-2 ${
                activeTab === "Stochastic"
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path d="M11.063 1.456a1.749 1.749 0 0 1 1.874 0l8.383 5.316a1.751 1.751 0 0 1 0 2.956l-8.383 5.316a1.749 1.749 0 0 1-1.874 0L2.68 9.728a1.751 1.751 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z"></path>
              <path d="M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path>
              <path d="M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path>
            </svg>
            Stochastic
          </a>
        </li>
        <li className="me-2">
          <a
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("Parametric");
            }}
            className={`inline-flex items-center pointer-events-none justify-center p-4 border-b-2 rounded-t-lg group 
      ${
        activeTab === "Parametric"
          ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
          : "text-gray-500 border-transparent dark:text-gray-400"
      }`}
            aria-current={activeTab === "Parametric" ? "page" : undefined}>
            <svg
              className={`w-4 h-4 me-2 ${
                activeTab === "Parametric"
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13.003 7.754a.75.75 0 0 1 .75-.75h5.232a.75.75 0 0 1 .53 1.28l-2.776 2.777c.55.097 1.057.253 1.492.483.905.477 1.504 1.284 1.504 2.418 0 .966-.471 1.75-1.172 2.27-.687.511-1.587.77-2.521.77-1.367 0-2.274-.528-2.667-.756a.75.75 0 0 1 .755-1.297c.331.193.953.553 1.912.553.673 0 1.243-.188 1.627-.473.37-.275.566-.635.566-1.067 0-.5-.219-.836-.703-1.091-.538-.284-1.375-.443-2.471-.443a.75.75 0 0 1-.53-1.28l2.643-2.644h-3.421a.75.75 0 0 1-.75-.75ZM7.88 15.215a1.4 1.4 0 0 0-1.446.83.75.75 0 0 1-1.37-.61 2.899 2.899 0 0 1 2.986-1.71c.589.06 1.139.323 1.557.743.434.446.685 1.058.685 1.778 0 1.641-1.254 2.437-2.12 2.986-.538.341-1.18.694-1.495 1.273H9.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75c0-1.799 1.337-2.63 2.243-3.21 1.032-.659 1.55-1.031 1.55-1.8 0-.355-.116-.584-.26-.732a1.071 1.071 0 0 0-.652-.298Zm.234-13.121a.75.75 0 0 1 .386.656V9h1.252a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1 0-1.5H7V4.103l-.853.533a.749.749 0 1 1-.795-1.272l2-1.25a.749.749 0 0 1 .762-.02Z"></path>
            </svg>
            Parametric (Coming Soon)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LsystemTabs;
