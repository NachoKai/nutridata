import { useState, useEffect } from "react";
import {
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	Heading,
	Link,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import VirtualizedTable from "./VirtualizedTable";

const ProductsTable = ({ products }) => {
	const [searchField, setSearchFields] = useState("");
	const [categories, setCategories] = useState([]);

	const onSearchChange = event => {
		setSearchFields(event.target.value);
	};

	const filteredProducts = products.filter(product =>
		product.comidaPrincipal.toLowerCase().includes(searchField.toLowerCase())
	);

	useEffect(() => {
		const categoryList = [...new Set(products.map(product => product.categoria))];
		setCategories(categoryList);
	}, [products]);

	const handleSelectCategory = () => {
		const selectBox = document.getElementById("selectBox");
		const selectedValue = selectBox.options[selectBox.selectedIndex].value;
		window.location.replace(`/#${selectedValue.replace(/\s/g, "").toLowerCase()}`);
	};

	return (
		<>
			<Navbar>
				<InputLeftElement
					pointerEvents="none"
					children={<SearchIcon color="gray.300" />}
				/>
				<Input
					aria-label="Search product"
					type="text"
					placeholder="Search product..."
					onChange={onSearchChange}
					backgroundColor="white"
					_placeholder={{ color: "gray.400" }}
				/>
				<Select
					placeholder="Categories"
					backgroundColor="white"
					maxW="200px"
					marginLeft={4}
					onChange={() => handleSelectCategory()}
					id="selectBox"
				>
					{categories.map(category => (
						<option
							key={category}
							value={category}
							as={Link}
							href={`/#${category.replace(/\s/g, "").toLowerCase()}`}
						>
							{category}
						</option>
					))}
				</Select>
			</Navbar>

			{categories.map(category => {
				const hasProducts = !!filteredProducts.filter(
					product => product.categoria === category
				).length;

				return (
					<Box
						my={1}
						borderBottomRightRadius="lg"
						borderBottomLeftRadius="lg"
						bg="teal.50"
						key={Math.random()}
						id={category.replace(/\s/g, "").toLowerCase()}
					>
						{hasProducts && (
							<Box
								borderTopRightRadius="lg"
								borderTopLeftRadius="lg"
								bg="teal.100"
								d="flex"
								p={2}
								marginTop={8}
								alignItems="flex-end"
							>
								<Heading as="h4" size="md" value={category} marginRight={2}>
									{category}
								</Heading>
								<Heading size="md" as="h4" color="gray.500" fontWeight="400">
									(
									{
										filteredProducts.filter(product => product.categoria === category)
											.length
									}
									)
								</Heading>
							</Box>
						)}
						<VirtualizedTable filteredProducts={filteredProducts} category={category} />
					</Box>
				);
			})}
		</>
	);
};

export default ProductsTable;

const Navbar = styled(InputGroup)`
	position: sticky !important;
	position: -webkit-sticky !important;
	top: 0;
	background: #fff;
	z-index: 100;
	margin: 16px 0;
`;
