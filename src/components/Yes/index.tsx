import { Heading, Flex } from "@chakra-ui/react"
import { bp } from "@utils/mediaQueries"

export interface YesProps {}

const YesComponent: React.FC<YesProps> = () => {
  return (
    <Flex justifyContent="center">
      <Heading
        fontSize={bp("23px", null, "100px")}
        fontFamily="Verdana, Arial, sans-serif"
        fontWeight="bold"
        paddingTop={bp("2rem", null, "12rem")}
      >
        YES
      </Heading>
    </Flex>
  )
}

export default YesComponent
