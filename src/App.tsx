import { lazy, Suspense } from "react";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ProductRegister = lazy(() => import("./pages/product-register"));
const ProductList = lazy(() => import("./pages/product-list"));

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Suspense fallback={<div>Loading...</div>}>
							<ProductRegister />
						</Suspense>} />
						<Route path="listagem" element={<Suspense fallback={<div>Loading...</div>}>
							<ProductList />
						</Suspense>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
