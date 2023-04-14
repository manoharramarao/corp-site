import { Box, Card, CardMedia, Typography } from "@mui/material";

interface SmallCardProps {
  image: string;
  heading: string;
  content: string;
}

const Smallcard: React.FC<SmallCardProps> = ({ image, heading, content }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#ffd54f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
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
        <CardMedia component="img" image={image} alt="Image" sx={{ marginRight: "20px", width: "48px", height: "48px" }} />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {heading}
          </Typography>
          <Typography variant="body1">{content}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default Smallcard;
