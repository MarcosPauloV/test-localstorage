import { ChangeEvent, ComponentProps, ForwardedRef, forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import VMasker from "vanilla-masker";


interface InputProps extends ComponentProps<"input"> {
	mask?: boolean;
}

function TextField({ type, mask, name, placeholder, id, value, onChange, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const inputRef = useRef<HTMLInputElement>(null)

	useImperativeHandle(ref, () => inputRef.current!)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (mask) {
			event.target.value = VMasker.toMoney(event.target.value, {
				unit: "R$",
				separator: ",",
				delimiter: "."
			})
		}
		onChange && onChange(event)
	}

	const maskedValue = useMemo(() => {
		if (value === "" || value === undefined || value === null) return ""
		if (mask && value !== "") {
			return VMasker.toMoney(value.toString(), {
				unit: "R$",
				separator: ",",
				delimiter: "."
			})
		}
		return value
	}, [value, mask])

	return (
		<>
			<input
				data-insert={value?.toString() ? "true" : "false"}
				className="h-full w-full bg-gray-300 rounded-[7px] border-2 border-blue-gray-200 px-2 py-2 font-sans text-md font-normal text-slate-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-lg md:text-xl"
				ref={inputRef}
				type={type}
				name={name}
				value={maskedValue}
				placeholder={placeholder}
				onChange={handleChange}
				{...props}
			/>
		</>
	);
};

export default forwardRef(TextField);