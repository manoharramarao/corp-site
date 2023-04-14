import { Box, Card, CardMedia, Typography } from "@mui/material";
import * as React from "react";

const OfferCards: React.FC = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <CardMedia
          component="img"
          image="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzenius.net%2Fproduct%2FzeniusImages%2Fhome%2Fprestasi.png&w=256&q=75"
          alt="Image"
          sx={{ marginRight: "20px", width: "48px", height: "48px" }}
        />
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Heading
          </Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, sapien vel bibendum bibendum, velite</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default OfferCards;
