import VMasker from "vanilla-masker";
import Product from "../modules/product";

interface TableProps {
	products: Product[];
}

function Table({ products }: TableProps) {
	return (
		<table className='min-w-full divide-y divide-gray-200'>
			<thead className='bg-gray-200'>
				<tr>
					<th className='px-6 py-3 text-left text-lg font-bold text-gray-500  tracking-wider'>
						Nome
					</th>
					<th className='px-6 py-3 text-left text-lg font-bold text-gray-500  tracking-wider'>
						Valor
					</th>
				</tr>
			</thead>
			<tbody className='bg-gray-200 divide-y divide-gray-200'>
				{products.map((product, index) => (
					<tr key={index}>
						<td
							className='px-6 py-4 text-sm text-slate-950'
						>
							{product.name}
						</td>
						<td
							className='px-6 py-4 text-sm text-slate-950'
						>
							{VMasker.toMoney(product.value.toString(), {
								unit: "R$",
								separator: ",",
								delimiter: "."
							})}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;