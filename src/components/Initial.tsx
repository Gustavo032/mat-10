import { Box, Button, ButtonGroup, Center, Flex, Heading, Link } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

export function Initial(){
	return(
		<Box w="100vw" h="100vh" backgroundSize="100vw" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundImage="/img/backgroundInitial.svg">
			<Center w="100%" h="100%" flexFlow="column">
				<Heading as="h2" marginBottom="1rem" letterSpacing="-0.1rem" background="radial-gradient(rgba(240,181,5,1) 34%, rgba(241,100,97,1) 45%, rgba(24,31,127,1) 98%)" backgroundClip="text">
					Boas Vindas!
				</Heading>

				<ButtonGroup spacing={{base: 0, md: 6}} colorScheme="blue" display={["flex", 'block']} flexDirection="column">
					<Button as={HashLink} to="/ponto" mb={{base: '1rem', md: '0'}}>Encontrar um ponto</Button>
					<Button as={HashLink} to="/medio" colorScheme="gray">Calcular ponto médio</Button>
				</ButtonGroup>
			</Center>
		</Box>
	)
}