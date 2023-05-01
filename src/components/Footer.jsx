import { Box, Flex, Image, Text } from "@chakra-ui/react"
import logo from "../assets/openai.png"
const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent="center" alignItems="center">
            <Image src={logo} marginRight={1} alt="Logo"/>
            <Text>
                Powered By Open AI
            </Text>
               
        </Flex>

    </Box>
  )
}

export default Footer