function FormInput({ id, label, type, placeholder }) {
  return (
    <div>
      <label className="mb-3 block text-base font-medium" htmlFor={id}>
        {label}
      </label>

      <input
        className="text-inherit w-full rounded-lg border-none bg-whites-100 p-3 text-lg focus:shadow-[0_0_0_0.5rem_rgba(253,242,233,0.5)] focus:outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
        name={id}
        required
      />
    </div>
  );
}

export default FormInput;
