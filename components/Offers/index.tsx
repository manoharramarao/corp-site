import { Box, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import OfferCards from "./offerCards";

const Offers: React.FC = () => {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      <Box
        sx={{
          width: "50%",
          height: "100%",
        }}
      >
        <Typography variant="h5" color={"primary"} fontWeight="600">
          Makin Jago Bernalar dan Lolos SNBT (UTBK) Bareng Zenius!
        </Typography>
        <OfferCards></OfferCards>
        <OfferCards></OfferCards>
        <OfferCards></OfferCards>
      </Box>
      <Box mx={2}></Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          image="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzs-inline.s3.ap-southeast-1.amazonaws.com%2Fproduction%2F5%2F2b%2F89dc%2F52b89dcb1fc44d95af76f70c24199d11.png%3Fefs%3Dhttps%253A%252F%252Fwww.zenius.net%252Fassets%252Fv-img%252F5%252F2b%252F89dc%252F52b89dcb1fc44d95af76f70c24199d11.png&w=3840&q=75"
          alt="Hero Image 2"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Offers;
