import {
  Avatar,
  AvatarGroup,
  Link,
  Spinner,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  Center,
  Column,
  Row,
  useIsMobile,
  RowOrColumn,
} from "utils/chakraUtils";
import { AccountButton } from "../../shared/AccountButton";
import { Divider } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useRari } from "context/RariContext";
import { useIsSmallScreen } from "hooks/useIsSmallScreen";
import { smallUsdFormatter } from "utils/bigUtils";

import DashboardBox from "../../shared/DashboardBox";
import { Header } from "../../shared/Header";
import { ModalDivider } from "../../shared/Modal";

import { Link as RouterLink } from "react-router-dom";
import FuseStatsBar from "./FuseStatsBar";
import FuseTabBar, { useFilter } from "./FuseTabBar";
import { useTokenData } from "hooks/useTokenData";

import { filterPoolName } from "utils/fetchFusePoolData";

import { letterScore, usePoolRSS } from "hooks/useRSS";
import { SimpleTooltip } from "components/shared/SimpleTooltip";
import { useFusePools } from "hooks/fuse/useFusePools";
import Footer from "components/shared/Footer";
import { memo } from "react";

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
              "Peer-to-peer lending with low fees on any crypto-asset. Stake & borrow on Polygon."
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
