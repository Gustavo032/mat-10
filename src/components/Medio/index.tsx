import { useState } from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Footer } from "../Footer";
import {HashLink} from "react-router-hash-link";

interface Segment {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

function getMidpoint(segment: Segment): [number, number] {
    const x = (segment.x1 + segment.x2) / 2;
    const y = (segment.y1 + segment.y2) / 2;
    return [x, y];
}

export function Medio() {
    const [segment, setSegment] = useState<Segment>({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
    });
    const [midpoint, setMidpoint] = useState<[number, number] | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSegment((prev) => ({ ...prev, [name]: parseInt(value) }));
    };

    const handleFindMidpoint = () => {
        setMidpoint(getMidpoint(segment));
    };

    return (
        <Box >
			<Box  position="absolute" top="1rem" left="1rem">
				<Link as={HashLink} to="/"> { '< Voltar' }</Link>
			</Box>
            <Box p={4} height={["80vh"]} minH="100%">
                <Stack spacing={4}>
                    <Text fontSize="2xl" fontWeight="bold" textAlign="center" mt="5rem">
                        Encontre o ponto médio de um segmento
                    </Text>
                    <Box p={2}>
                        <Flex
                            bg="gray.50"
                            border="1px solid"
                            borderColor="gray.200"
                            borderRadius="md"
                            p={4}
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <FormControl id="x1"  w="49%">
                                <FormLabel>x1</FormLabel>
                                <Input
                                    type="number"
                                    name="x1"variant='filled' placeholder='Filled'
                                    onChange={handleInputChange}
                                    border="none"
                                    borderBottom="1px solid gray"
                                />
                            </FormControl>
                            <FormControl
                                id="y1"
                                w="49%"
                            >
                                <FormLabel>y1</FormLabel>
                                <Input
                                    type="number"
                                    name="y1"variant='filled' placeholder='Filled'
                                    onChange={handleInputChange}
                                    border="none"
                                    borderBottom="1px solid gray"
                                />
                            </FormControl>
                        </Flex>
                    </Box>
                    <Flex
                        bg="gray.50"
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="md"
                        p={4}
                        mt={4}
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <FormControl id="x2" w="49%">
                            <FormLabel>x2</FormLabel>
                            <Input
                                type="number"
                                name="x2"variant='filled' placeholder='Filled'
                                onChange={handleInputChange}
                                border="none"
                                borderBottom="1px solid gray"
                            />
                        </FormControl>
                        <FormControl id="y2" w="49%">
                            <FormLabel>y2</FormLabel>
                            <Input
                                type="number"
                                name="y2"variant='filled' placeholder='Filled'
                                onChange={handleInputChange}
                                border="none"
                                borderBottom="1px solid gray"
                            />
                        </FormControl>
                    </Flex>
                    <Button
                        colorScheme="blue"
                        onClick={handleFindMidpoint}
                        mt={4}
                    >
                        Encontrar ponto médio
                    </Button>
                    {midpoint && (
                     <Box
					 bg="blue.100"
					 textAlign="center"
					 my={4}
					 p={2}
					 borderRadius="md"
				   >
					 <Text fontSize="lg" fontWeight="bold">
					   O ponto médio é ({midpoint[0]}, {midpoint[1]})
					 </Text>
				   </Box>
				   
					 
                    )}
                </Stack>
            </Box>
            <Footer />
        </Box>
    );
}
