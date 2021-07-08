import { useEffect } from "react";
import { useRouter } from "next/router";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
	const { pathname } = useRouter();
	const lang = pathname.startsWith("/es") ? "es" : "en";

	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);

	return (
		<ChakraProvider theme={theme}>
			<Container maxWidth="container.2xl" p={8} borderRadius="xl" color="#222">
				<Component {...pageProps} />
			</Container>
		</ChakraProvider>
	);
};

export default App;
