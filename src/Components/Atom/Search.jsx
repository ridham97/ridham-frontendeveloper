export default function Search({
  labelName = "",
  onChange = () => {},
  value = "",
}) {
  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 text-start"
      >
        {labelName}
      </label>
      <div className="relative mt-1 flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          value={value}
          className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
