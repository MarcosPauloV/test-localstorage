import { ComponentProps } from "react";

interface ITextAreaProps extends ComponentProps<"textarea"> { }

function TextArea({ name, cols = 24, rows = 5, children, placeholder, ...props }: ITextAreaProps) {
	return (
		<>
			<textarea
				className="h-full w-full rounded-[7px] border-2 border-blue-gray-200 bg-gray-300 px-2 py-2 font-sans text-md font-normal text-slate-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none text-lg md:text-xl"
				placeholder={placeholder}
				name={name}
				cols={cols}
				rows={rows}
				{...props}
			>
				{children}
			</textarea>
		</>
	);
};

export default TextArea;