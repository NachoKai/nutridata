import { Grid } from "react-virtualized";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";

const VirtualizedTable = ({ filteredProducts, category }) => {
	const { width, height } = useWindowSize();

	const hasProducts = !!filteredProducts.filter(product => product.categoria === category)
		.length;

	const productsByCategory = filteredProducts.filter(
		product => product.categoria === category
	);

	const arrayOfObjectsToArrayOfArrays = arrayOfObjects =>
		arrayOfObjects.map(obj => Object.keys(obj).map(key => obj[key]));

	const productList = arrayOfObjectsToArrayOfArrays(productsByCategory);
	productList.unshift([
		"Comida principal",
		"Categoría",
		"Energía (kcal)",
		"Proteínas (gr)",
		"Carbohidratos (gr)",
		"Hierro (mg)",
		"Calcio (mg)",
		"Azúcares, total (gr)",
		"Fibra, dietética total (gr)",
		"Colesterol (mg)",
		"Grasa total (gr)",
		"Ácidos grasos, saturados totales (gr)",
		"Ácidos grasos, monoinsaturados totales (gr)",
		"Ácidos grasos poliinsaturados totales (gr)",
		"Sodio (mg)",
		"Potasio (mg)",
		"Vitamina B-12 (mcg)",
		"Vitamina B-12, agregada (mcg)",
		"Vitamina C (mg)",
		"Vitamina D (D2 + D3) (mcg)",
		"Retinol (mcg)",
		"Vitamina A, RAE (mcg_RAE)",
		"Caroteno, alfa (mcg)",
		"Caroteno, beta (mcg)",
		"Tiamina B1 (mg)",
		"Riboflavina B2 (mg)",
		"Niacina B3 (mg)",
		"Vitamina B6 (mg)",
		"Ácido fólico B9 (mcg)",
		"Folato, alimento (mcg)",
		"Folato, DFE (mcg_DFE)",
		"Folato, total (mcg)",
		"Vitamina E (alfa-tocoferol) (mg)",
		"Vitamina E, agregada (mg)",
		"Vitamina K (filoquinona) (mcg)",
		"Colina, total (mg)",
		"Zinc (mg)",
		"Selenio (mcg)",
		"Cobre (mg)",
		"Magnesio (mg)",
		"Cafeína (mg)",
		"Agua (gr)",
		"Alcohol (gr)",
		"Licopeno (mcg)",
		"Luteína + zeaxantina (mcg)",
		"Criptoxantina, beta (mcg)",
		"Fósforo (mg)",
		"Teobromina (mg)",
	]);

	function cellRenderer({ columnIndex, key, rowIndex, style }) {
		return (
			<div key={key} style={style}>
				{productList[rowIndex][columnIndex]}
			</div>
		);
	}

	return (
		<>
			{hasProducts && (
				<TableContainer>
					<GridContainer
						cellRenderer={cellRenderer}
						columnCount={productList[0].length + 1}
						columnWidth={180}
						rowCount={productList.length}
						rowHeight={100}
						height={productsByCategory.length < 5 ? productsByCategory.length * 130 : 400}
						width={width || 1000}
					/>
				</TableContainer>
			)}
		</>
	);
};

export default VirtualizedTable;

const TableContainer = styled.div`
	padding: 16px;
	padding-bottom: 16px;
	border: 1px solid #e2e8f0;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	overflow: hidden;
`;

const GridContainer = styled(Grid)`
	padding-bottom: 32px;

	div {
		div {
			border-bottom: 1px solid #e2e8f0;
			padding: 16px;
			margin: 16px 0;
			overflow: scroll;
		}
	}
`;
