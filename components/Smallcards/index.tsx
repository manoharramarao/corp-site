import { Box } from "@mui/material";
import axios from "axios";
import * as React from "react";
import Smallcard from "./item";

interface SmallCardType {
  image: string;
  heading: string;
  content: string;
}

const SmallCards: React.FC = () => {
  const [smallCardList, setSmallCardList] = React.useState<SmallCardType[]>();

  const getData = async () => {
    const result = await axios.get("http://localhost:1337/api/small-cards?populate=*");
    let cardList: SmallCardType[] = [];
    result?.data?.data?.map((item: any) => {
      let card: SmallCardType = item.attributes;
      let smallCard: SmallCardType = {
        heading: card.heading,
        content: card.content,
        image: `http://localhost:1337${card.image?.data?.attributes?.url}`,
      };
      cardList.push(smallCard);
    });
    setSmallCardList([...cardList]);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box display={"flex"} flexDirection={"row"}>
        {smallCardList?.map((smallCard: SmallCardType) => {
          return (
            <>
              <Box width={"50%"} px={1}>
                <Smallcard image={smallCard.image} content={smallCard.content} heading={smallCard.heading}></Smallcard>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default SmallCards;
