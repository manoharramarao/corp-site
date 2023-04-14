import { Box, Divider } from "@mui/material";
import axios from "axios";
import * as React from "react";
import FooterColumn from "./footerColumn";

const Footer: React.FC = () => {
  const [footerItems, setFooterItems] = React.useState<{ heading: string; items: string[] }[]>([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:1337/api/footer-items");
    const footerItemList: any[] = [];
    result?.data?.data?.map((item: any) => {
      let footerItem: { heading: string; items: string[] } = item.attributes;
      footerItemList.push(footerItem);
    });
    setFooterItems([...footerItemList]);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Divider></Divider>
      <Box my={2}></Box>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
        {/* <FooterColumn heading="MATERI PELAJARAN" items={["Matematika", "Fisika"]}></FooterColumn>

        <FooterColumn heading="MATERI PELAJARAN" items={["Matematika", "Fisika"]}></FooterColumn>

        <FooterColumn heading="MATERI PELAJARAN" items={["Matematika", "Fisika"]}></FooterColumn>

        <FooterColumn heading="MATERI PELAJARAN" items={["Matematika", "Fisika"]}></FooterColumn>

        <FooterColumn heading="MATERI PELAJARAN" items={["Matematika", "Fisika"]}></FooterColumn> */}
        {footerItems.map((item: { heading: string; items: string[] }) => {
          return <FooterColumn heading={item.heading} items={item.items}></FooterColumn>;
        })}
      </Box>
    </>
  );
};

export default Footer;
