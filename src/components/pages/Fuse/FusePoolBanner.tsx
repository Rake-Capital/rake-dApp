import {
  Text,
  Button,
} from "@chakra-ui/react";
import {
  Center,
  Column,
  RowOrColumn,
} from "utils/chakraUtils";
import { Divider } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useIsSmallScreen } from "hooks/useIsSmallScreen";


const FusePoolBanner = () => {
  const { t } = useTranslation();
  const isMobile = useIsSmallScreen();
  return (
    <RowOrColumn
      width="100%"
      isRow={!isMobile}
      mainAxisAlignment="center"
      crossAxisAlignment="center"
      height={isMobile ? "auto" : "625px"}
    >
      <Column mainAxisAlignment="center" crossAxisAlignment="center" expand>
        <Center mb="4" textStyle="h1" width={isMobile ? "100%" : "75%"}>
          <Text
            color={"#FF"}
            fontWeight="normal"
            fontSize="54px"
            textAlign="center"
          >
            {t(
              "Stake & borrow on Polygon."
            )}
          </Text>
        </Center>
        <Divider />
        <Center mt="4" textStyle="h1" width={isMobile ? "100%" : "65%"}>
          <Text
            color={"#FF"}
            fontWeight="normal"
            fontSize="18px"
            textAlign="center"
          >
            {t(
              "Our DeFi product uses Fuse by Rari Protocol to allow anyone to create a money-market, tho with super-low fees by being built on Polygon."
            )}
          </Text>
        </Center>
        <Center my="5" textStyle="h1" width={isMobile ? "100%" : "65%"}>
          <Button colorScheme="teal" variant="solid" >
            Put your money to work
          </Button>
        </Center>
      </Column>
    </RowOrColumn>
  );
};

export default FusePoolBanner;
