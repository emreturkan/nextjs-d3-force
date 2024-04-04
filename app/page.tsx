import React from "react";
import NetworkGraph from "./Network";
import { Dataset } from "@/types/index";

const Page = () => {
  const dataset: Dataset = {
    nodes: [
      {
        id: "1",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/javascript.png",
        size: 50,
      },
      {
        id: "2",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/typescript.png?t=2024-04-04T11%3A25%3A08.791Z",
        size: 35,
      },
      {
        id: "3",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/react.png?t=2024-04-04T11%3A31%3A24.371Z",
        size: 35,
      },
      {
        id: "4",
        img: "https://zxubumfhtcmudnvdrbks.supabase.co/storage/v1/object/public/images/next.png?t=2024-04-04T11%3A32%3A05.739Z",
        size: 35,
      },
    ],
    links: [
      { source: "1", target: "2" },
      { source: "2", target: "3" },
      { source: "3", target: "4" },
      { source: "3", target: "1" },
      { source: "4", target: "1" },
    ],
  };

  return (
    <div>
      <NetworkGraph dataset={dataset} />
    </div>
  );
};

export default Page;
