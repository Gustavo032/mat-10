import {
	Box,
	Container,
	Link,
	SimpleGrid,
	Stack,
	Text,
	Flex,
	Tag,
	useColorModeValue,
	Image,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';
  
  

  
  export function Footer() {
	return (
	  <Box as="footer"
		position="relative"
		bottom="0"
		bg={useColorModeValue('gray.900', 'gray.900')}
		color={useColorModeValue('gray.700', 'gray.200')}>
		<Box py={10}>
		  <Flex
			align={'center'}
			_before={{
			  content: '""',
			  borderBottom: '1px solid',
			  borderColor: useColorModeValue('gray.200', 'gray.700'),
			  flexGrow: 1,
			  mr: 8,
			}}
			_after={{
			  content: '""',
			  borderBottom: '1px solid',
			  borderColor: useColorModeValue('gray.200', 'gray.700'),
			  flexGrow: 1,
			  ml: 8,
			}}>
			<Image h={32} src="/img/logoCode.png" />
		  </Flex>
		  <Text px="1rem" color={useColorModeValue('gray.200', 'gray.200')} pt={6} fontSize={'sm'} textAlign={'center'}>
			Desenvolvido com carinho for Everyone by <Link as={HashLink} to="https://codematch.com.br" target="_blank" color="green.300">Gustavo Ramos</Link>
		  </Text>
		</Box>
	  </Box>
	);
  }