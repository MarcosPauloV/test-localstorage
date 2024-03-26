import { ComponentProps } from "react";

interface IButtonProsp extends ComponentProps<"button"> { }

function Button({ type, name, id, children, ...props }: IButtonProsp) {
	return (
		<>
			<button
				type={type}
				name={name}
				id={id}
				className="w-full p-2 rounded-md text-zinc-200 bg-purple-700 text-xl hover:bg-purple-900"
				{...props}
			>
				{children}
			</button>
		</>
	);
};

export default Button;