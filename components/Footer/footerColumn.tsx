import { Box, Typography } from "@mui/material";
import * as React from "react";

interface FooterColumnProps {
  heading: string;
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ heading, items }) => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography fontSize={"0.75rem"} fontWeight={600}>
          {heading}
        </Typography>
        <Box my={0.5}></Box>
        {items.map((item: string) => {
          return (
            <>
              <Typography variant="body2" fontSize={"0.75rem"}>
                {item}
              </Typography>
              <Box my={0.5}></Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default FooterColumn;
