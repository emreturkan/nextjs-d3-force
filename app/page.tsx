import React from "react";
import NetworkGraph from "./Network";
import { Dataset } from "@/types/index";

const Page = () => {
  const dataset: Dataset = {
    nodes: [
      {
        id: "1",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/javascript.png",
        size: 60,
      },
      {
        id: "2",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/typescript.png?t=2024-04-04T11%3A25%3A08.791Z",
        size: 60,
      },
      {
        id: "3",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/react.png?t=2024-04-04T11%3A31%3A24.371Z",
        size: 45,
      },
      {
        id: "4",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/next.png?t=2024-04-04T11%3A32%3A05.739Z",
        size: 65,
      },
      {
        id: "5",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/tt.png?t=2024-06-04T13%3A21%3A40.016Z",
        size: 40,
      },
      {
        id: "6",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/html.png?t=2024-06-04T13%3A23%3A53.717Z",
        size: 60,
      },
      {
        id: "7",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/4961937_css_logo_social_media_icon.png",
        size: 60,
      },
    ],
    links: [
      { source: "1", target: "2" },
      { source: "2", target: "3" },
      { source: "3", target: "4" },
      { source: "3", target: "1" },
      { source: "4", target: "1" },
      { source: "5", target: "3" },
      { source: "5", target: "4" },
      { source: "6", target: "1" },
      { source: "7", target: "1" },
      { source: "7", target: "2" },
      { source: "7", target: "5" },
    ],
  };

  return (
    <div>
      <NetworkGraph dataset={dataset} />
    </div>
  );
};

export default Page;
