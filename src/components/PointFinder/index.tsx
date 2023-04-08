import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";
import {
    CartesianGrid,
    ReferenceLine,
    Scatter,
    ScatterChart,
    XAxis,
    Label,
    YAxis,
} from "recharts";
import { Footer } from "../Footer";
import {HashLink} from "react-router-hash-link";

interface Point {
    x: number;
    y: number;
}

export function PointFinder() {
    const [inputYValue, setInputYValue] = useState("");
    const [inputXValue, setInputXValue] = useState("");
    const [points, setPoints] = useState<Point[]>([]);
    const [xMin, setXMin] = useState(-5);
    const [yMin, setYMin] = useState(-5);
    const [xMax, setXMax] = useState(5);
    const [yMax, setYMax] = useState(5);

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputValue(event.target.value);
    // };

    const handleFindPoint = () => {
        const x = inputXValue;
        const y = inputYValue;

        if (!x && !y) {
            alert("Especifique uma coordenada");
        } else if (!y) {
			alert("Especifique um valor para Y");
        } else if (!x) {
			alert("Especifique um valor para X");
        } else {
            const point = { x: parseFloat(x), y: parseFloat(y) };
            setPoints([...points, point]);
			setInputYValue("")
			setInputXValue("")
            updateDomains(point);
        }
    };

    const updateDomains = (point: Point) => {
        const absX = Math.abs(point.x);
        const absY = Math.abs(point.y);

        if (absX > xMax) {
            setXMax(absX);
        }

        if (absY > yMax) {
            setYMax(absY);
        }

        if (absX > xMax || absY > yMax) {
            setXMin(-absX);
            setYMin(-absY);
        }

        if (absX < xMin) {
            setXMin(-absX);
        }

        if (absY < yMin) {
            setYMin(-absY);
        }

        if (absX < xMin || absY < yMin) {
            setXMax(absX);
            setYMax(absY);
        }
    };

    const formatTick = (value: number) => {
        const decimal = value % 0;
        if (decimal > 0) {
            return value.toFixed(1);
        } else {
            return value.toFixed(0);
        }
    };

    return (
		<Box minW="100vw" minH="100vh">
			<Box position="absolute" top="0rem" left="1rem">
				<Link as={HashLink} to="/"> { '< Voltar' }</Link>
			</Box>
			<Box p={4} mt="2rem">
				<Stack spacing={4}>
					<Container maxWidth="5xl">
						<Text fontSize="2xl" fontWeight="bold" textAlign="center">
							Encontre um ponto no plano cartesiano
						</Text>
						<FormControl id="point" mt="2rem">
							<FormLabel textAlign="center">Coordenadas (x, y)</FormLabel>
							<Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
								<Input type="text" placeholder="valor X" mb={{base:"0.4rem", md:"0"}} w={{base:"100%", md:"48%"}} value={inputXValue} onChange={(event)=>{setInputXValue(event.target.value);}} />
								<Input type="text" placeholder="valor Y" mt={{base:"0.4rem", md:"0"}} w={{base:"100%", md:"48%"}} value={inputYValue} onChange={(event)=>{setInputYValue(event.target.value);}} />
							</Flex>
						</FormControl>
						<Button colorScheme="blue" mt="1rem" w="100%" onClick={handleFindPoint}>
							Encontrar ponto
						</Button>
					</Container>
					{points.length > 0 && (
						<Box alignSelf="center" maxW="100%">
						<Swiper slidesPerView={2} spaceBetween={10} loop={true}>
								{points.map((point, index) => (
									<SwiperSlide key={index}>
										<Box
											bg="gray.50"
											border="1px solid"
											borderColor="gray.200"
											borderRadius="md"
											p={4}
										>
											<Text fontSize="xl" fontWeight="bold" mb={4}>
												Ponto{' '}
												<Text
													as="span"
													fontWeight="bold"
													bgClip="text"
													bgGradient={'linear-gradient(0, #ff6fff 0, #d861ff 16.67%, #9250ff 33.33%, #403cf2 50%, #0029c1 66.67%, #001995 83.33%, #00006d 100%);'}
													color="transparent"
												>
													{index + 1}
												</Text>
											</Text>

											<Flex direction="column">
												<Text as="span" mb={2}>
													X = {point.x}
												</Text>
												<Text as="span">y = {point.y}</Text>
											</Flex>
										</Box>
									</SwiperSlide>
								))}
							</Swiper>
							<Center>
								<ScatterChart
									style={{
										marginTop: '2rem',
										marginLeft:"-3rem"
									}}
									width={
										window.innerWidth < 1023
											? window.innerWidth
											: 1024
									}
									height={300}
								>
									<CartesianGrid strokeDasharray="10 10" />
									<XAxis
										type="number"
										tickFormatter={formatTick}
										dataKey="x"
										domain={[xMin, xMax]}
										tickCount={11}
									></XAxis>
									<YAxis
										type="number"
										tickFormatter={formatTick}
										dataKey="y"
										domain={[yMin, yMax]}
										tickCount={11}
									></YAxis>
									<ReferenceLine x={0} stroke="gray" />
									<ReferenceLine y={0} stroke="gray" />
									<Scatter
										name="Pontos"
										data={points}
										fill="#8884d8"
									/>
								</ScatterChart>
							</Center>
						</Box>
					)}
				</Stack>
			</Box>
			<Footer/>
		</Box>
    );
}
