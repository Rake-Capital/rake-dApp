import { Link as RouterLink} from "react-router-dom";
import { Link, Text, List, ListItem } from "@chakra-ui/react";
import { Row, Column } from "utils/chakraUtils";
// import { useTranslation } from "react-i18next";

import {
  GreenLogoFooter
} from "components/shared/Logos";

const Footer = () => {
  // const { t } = useTranslation();
  return (
    <>
        <Row
          mainAxisAlignment="space-around"
          crossAxisAlignment="center"
          mt={4}
          py={15}
          width="100%"
          borderTop="4px solid"
        >
          <Column
            mainAxisAlignment="flex-start"
            crossAxisAlignment="flex-start"
            width="57%"
            flexShrink={0}
          >
              <Link
                as={RouterLink} to="/"
              >
                <GreenLogoFooter />
              </Link>
              <Text fontSize="30px">
                Rake Capital
              </Text>
              <Text fontSize="12px">
                Bringing Fuse by Rari Protocol to Polygon
              </Text>
              <Text fontSize="12px">
                © {new Date().getFullYear()} Rake Capital
              </Text>
              <Link
                as={RouterLink} to="/"
              >Terms & Conditions</Link>
            </Column>
            <Column
              mainAxisAlignment="flex-start"
              crossAxisAlignment="flex-start"
              width="15%"
              flexShrink={0}
              mt={-16}
            >
              <List>
                <Text fontSize="18px">
                  RESOURCES
                </Text>
                <ListItem>
                  <Link
                    href="https://www.notion.so/Rake-Capital-b21cd577099143e4b0156ccad53a9d6c"
                    isExternal
                  >
                    Notion Doc
                  </Link>
                </ListItem>
              </List>
            </Column>
            <Column
              mainAxisAlignment="flex-start"
              crossAxisAlignment="flex-start"
              width="15%"
              flexShrink={0}
              mt={-16}

            >
              <List>
                <Text fontSize="18px">
                  $RAKE
                </Text>
                <ListItem>
                  <Link
                    as={RouterLink} to="/"
                  >
                    Launching Soon
                  </Link>
                </ListItem>
              </List>
            </Column>
            <Column
              mainAxisAlignment="flex-end"
              crossAxisAlignment="flex-end"
              width="13%"
              flexShrink={0}
            >
              <List>
                <Text fontSize="18px">
                  LET'S TALK
                </Text>
                <ListItem>
                  <Link
                    href="mailto: hq@rake.capital"
                  >
                    hq@rake.capital
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://discord.gg/Rq2BkJ4Kr3"
                    isExternal
                  >
                    Discord
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://twitter.com/0xRakeCapital"
                    isExternal
                  >
                    Twitter
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://github.com/Rake-Capital"
                    isExternal
                  >
                    Github
                  </Link>
                </ListItem>
              </List>
            </Column>
        </Row>
    </>
  );
};

export default Footer;
