import { Flex, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justifyContent="space-between" padding="4" bg="blue.500" color="white">
      <Box>
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          John Doe's Portfolio
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
