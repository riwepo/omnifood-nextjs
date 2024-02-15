function FormSelect({ id, label, options }) {
  return (
    <div>
      <label className="mb-3 block text-base font-medium" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="text-inherit w-full rounded-lg border-none bg-whites-100 p-3 text-lg shadow-black/10 focus:shadow-[0_0_0_0.5rem_rgba(253,242,233,0.5)] focus:outline-none"
        required
      >
        {options.map((option) => {
          return (
            <option key={option.index} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormSelect;
