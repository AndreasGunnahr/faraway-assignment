import { Box } from "@chakra-ui/react";
import { Navbar } from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Box bgColor="gray.50" minHeight="100vh">
    <Navbar />
    <Box maxWidth="container.xl" marginX="auto" paddingY="3rem" paddingX="1rem">
      {children}
    </Box>
  </Box>
);
