import { Text, Image, Heading, VStack, Link } from "@chakra-ui/react";

const Header = () => {
	return (
		<VStack marginBottom={8} marginTop={4}>
			<Heading as={Link} href="/">
				Valor nutricional de los alimentos
			</Heading>
			<Text color="gray.500">
				Base de datos de alimentos y nutrientes para estudios dietéticos 2017-2018 (FNDDS)
			</Text>
			<Text color="gray.500">
				Todos los valores nutricionales se expresan por cada 100 gramos de alimento.
			</Text>
			<Text color="gray.500">NS: Sin especificar. NFS: No se especifica más.</Text>
			<Text color="gray.500">
				Traducido, formateado y organizado por @ticiano_vilardi
			</Text>
			<Text color="gray.500">Web desarrollada por Nacho Caiafa</Text>
		</VStack>
	);
};

export default Header;
