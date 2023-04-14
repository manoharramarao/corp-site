import { Box, Card, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import * as React from "react";

const Banner: React.FC = () => {
  const [bannerHeading, setBannerHeading] = React.useState<string>("");
  const [bannerContent, setBannerContent] = React.useState<string>("");
  const [bannerBGImage, setBannerBGImage] = React.useState<string>("");
  const [bannerMainImage, setBannerMainImage] = React.useState<string>("");

  const getData = async () => {
    const result = await axios.get("http://localhost:1337/api/banner?populate=*");
    setBannerHeading(result?.data?.data?.attributes?.bannerHeading);
    setBannerContent(result?.data?.data?.attributes?.bannerContent);
    setBannerBGImage(`http://localhost:1337${result?.data?.data?.attributes?.bannerBGImage?.data?.attributes.url}`);
    setBannerMainImage(`http://localhost:1337${result?.data?.data?.attributes?.bannerMainImage?.data?.attributes.url}`);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerBGImage})`,
        backgroundSize: "cover",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Typography
        variant="h4"
        sx={{
          color: "#fff",
          textAlign: "center",
          textShadow: "1px 1px #000",
        }}
      >
        SNBT Udah Dekat, Saatnya Maksimalin Persiapan!
      </Typography> */}
      <Card sx={{ maxWidth: 1200, backgroundColor: "transparent" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "400px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              padding: "0 20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "left",
                color: "white",
              }}
            >
              {bannerHeading}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
                color: "white",
              }}
            >
              {bannerContent}
            </Typography>
          </Box>
          <CardMedia
            component="img"
            image={bannerMainImage}
            alt="Hero Image 2"
            sx={{
              width: "50%",
              height: "100%",
            }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default Banner;
