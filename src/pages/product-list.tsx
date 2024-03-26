import { ChangeEvent, useEffect, useState } from "react";
import LocalStorage from "../utils/localstorage";
import Product from "../modules/product";
import Button from "../components/button";
import { Link } from "react-router-dom";
import Table from "../components/table";

function ProductList() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		setProducts(LocalStorage.getItem("products") as Product[] || []);
	}, [])

	const sortByHighestValue = () => {
		const sortedProducts = [...products].sort((a, b) => b.value - a.value);
		setProducts(sortedProducts);
	};

	const sortByLowestValue = () => {
		const sortedProducts = [...products].sort((a, b) => a.value - b.value);
		setProducts(sortedProducts);
	};

	return (
		<main className="w-full h-screen overflow-x-hidden bg-zinc-900 flex items-center pt-[5rem] flex-col gap-6">
			<h1 className="text-2xl font-bold text-zinc-300">Listagem de Produtos</h1>
			<div className="w-[25%]">
				{products.length > 0 ? (
					<div className="flex flex-col gap-3">
						<div className="flex items-center justify-center gap-5">
							<div className="flex items-center gap-2">
								<p className="text-zinc-200">Ordenação</p>
								<select
									className="p-2 border border-gray-300 rounded-md"
									onChange={(e: ChangeEvent<HTMLSelectElement>) => {
										const selectedOption = e.target.value;
										if (selectedOption === "highest") {
											sortByHighestValue();
										} else if (selectedOption === "lowest") {
											sortByLowestValue();
										} else {
											setProducts(LocalStorage.getItem("products"));
										}
									}}
								>
									<option value="none">Nenhuma</option>
									<option value="highest"	>Maior Valor</option>
									<option value="lowest">Menor Valor</option>
								</select>
							</div>
							<Link
								to="/"
								className="w-full text-center p-2 rounded-md text-zinc-200 bg-purple-700 text-xl hover:bg-purple-900"
							>
								Adicionar Produto
							</Link>
						</div>
						<Table products={products} />
					</div>
				) : (
					<div className="flex flex-col gap-7">
						<p className="text-zinc-200 font-lg">Nenhum produto cadastrado clique no botão abaixo para cadastrar</p>
						<Link
							to="/"
							className="w-full text-center p-2 rounded-md text-zinc-200 bg-purple-700 text-xl hover:bg-purple-900"
						>
							Adicionar Produto
						</Link>
					</div>
				)}
			</div>

		</main>
	);
};

export default ProductList;
