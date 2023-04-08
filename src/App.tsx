import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Medio } from "./components/Medio"
import {PointFinder} from "./components/PointFinder"
import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Initial } from "./components/Initial"

export const App = () => (
  <ChakraProvider theme={theme}>
		<main>
			<Routes>
				<Route path="/" element={<Initial />}/>
				<Route path="/ponto" element={<PointFinder />}/>
				<Route path="/medio" element={<Medio />}/>
			</Routes>
		</main>
  </ChakraProvider>
)
