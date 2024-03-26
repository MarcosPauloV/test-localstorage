import { Box } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [hover, setHover] = useState<boolean>(false)

	const onMouseOver = () => {
		setHover(true)
	}

	const onMouseOut = () => {
		setHover(false)
	}

	return (
		<header
			className="w-full h-16 flex items-center justify-around bg-zinc-900 text-white font-bold text-md border-b-2 border-x-zinc-400"
		>
			<Link to="/" onMouseOver={onMouseOver} onMouseOut={onMouseOut}><Box size={40} color={hover ? "rgb(88 28 135 / var(--tw-text-opacity)" : "white"} /></Link>
			<ul className="flex items-center justify-center gap-5">
				<li>
					<Link to="/" className="text-md hover:text-purple-900">
						Cadastro de produtos
					</Link>
				</li>
				<li>
					<Link to="/listagem" className="text-md hover:text-purple-900">
						Listagem de produtos
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;