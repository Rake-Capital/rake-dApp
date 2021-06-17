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
          mainAxisAlignment="center"
          crossAxisAlignment="center"
          mt={4}
          py={15}
          width="100%"
        >
          <Column
            mainAxisAlignment="flex-start"
            crossAxisAlignment="flex-start"
            width="50%"
            flexShrink={0}
            ml={-10}
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
                    as={RouterLink} to="/"
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
              mainAxisAlignment="flex-start"
              crossAxisAlignment="flex-start"
              width="15%"
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
                    href="mailto: hq@rake.capital"
                  >
                    Discord
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="mailto: hq@rake.capital"
                  >
                    Twitter
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="mailto: hq@rake.capital"
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
