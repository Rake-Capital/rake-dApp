import { Box, BoxProps } from "@chakra-ui/react";
import { PixelMeasurement } from "utils/chakraUtils";

export const DASHBOARD_BOX_SPACING = new PixelMeasurement(15);

export const DASHBOARD_BOX_PROPS = {
  borderRadius: "10px",
  borderColor: "#272727",
  backgroundColor: "#FFFFFF",
  border: "2px solid #21A445"
};

const DashboardBox = ({ children, ...props }: BoxProps) => {
  return (
    <Box {...DASHBOARD_BOX_PROPS} {...props}>
      {children}
    </Box>
  );
};

export default DashboardBox;
