import Head from "next/head";
import api from "../api";
import Header from "../components/Header";
import ProductsTable from "../components/ProductsTable";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Home = ({ products }) => {
	return (
		<>
			<Head>
				<title>Valor nutricional de los alimentos</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Valor nutricional de los alimentos."></meta>
			</Head>
			<Header />
			<ProductsTable products={products} />
		</>
	);
};

export const getStaticProps = async () => {
	const products = await api.list();
	return {
		revalidate: 10,
		props: {
			products,
		},
	};
};

export default Home;
