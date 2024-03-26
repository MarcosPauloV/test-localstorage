import { ChangeEvent, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import LocalStorage from "../utils/localstorage";
import Product from "../modules/product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import FloatMask from "../utils/float-mask";
import TextArea from "../components/textarea";

function ProductRegister() {
	const [name, setName] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [value, setValue] = useState<number>(0);
	const [available, setAvailable] = useState<boolean>(true);

	const notify = () => toast.success("Produto cadastrado com sucesso!");

	const clearFields = () => {
		setName("");
		setDescription("");
		setValue(0);
		setAvailable(true);
	}


	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const product = {
			name,
			description,
			value,
			available
		} as Product;

		const products = LocalStorage.getItem("products") || [];
		products.push(product);
		LocalStorage.setItem("products", products);
		clearFields()

		notify();

		setTimeout(() => {
			window.location.href = "/listagem";
		}, 1000);
	}

	return (
		<main className="w-full h-screen bg-zinc-900 flex items-center justify-center overflow-y-hidden">
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<div className="w-[30rem] h-[40rem] flex items-center justify-center flex-col gap-6 bg-zinc-800 rounded-md">
				<h1 className="text-3xl font-bold text-zinc-300">Registro de Produto</h1>
				<form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6">
					<div className="flex flex-col items-center justify-center gap-5">
						<label className="flex flex-col gap-2 text-zinc-300">
							<Input
								placeholder="Nome"
								type="text"
								value={name}
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setName(e.target.value)
								}}
							/>
						</label>
						<label className="flex flex-col gap-2 text-zinc-300">
							<Input
								inputMode="numeric"
								placeholder="Valor"
								type="text"
								mask
								value={value === 0 ? "" : value.toFixed(2)}
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									const value = FloatMask.transform(e.target.value);
									setValue(FloatMask.normalize(value))
								}}
							/>
						</label>
						<label className="flex flex-col gap-2 text-zinc-300">
							<TextArea
								placeholder="Descrição"
							/>
						</label>
						<label className="w-full flex flex-initial flex-col gap-2 text-zinc-300 text-xl">
							Disponibilidade
							<select
								name="data"
								value={available ? "true" : "false"}
								className="w-56 h-9 px-3 rounded-md text-black bg-zinc-300 text-xl"
								onChange={(event: ChangeEvent<HTMLSelectElement>) => setAvailable(event.target.value === "true")}>
								<option value="true" className="text-xl">Sim</option>
								<option value="false" className="text-xl">Não</option>
							</select>
						</label>
					</div>
					<Button>Adicionar Produto</Button>
				</form>
			</div>
		</main>
	);
};

export default ProductRegister;