// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import log from "../../util/print-log";

type Data = {
  code: number;
  data: {
    serverTime: number;
    imgTitle: string;
    imgUrl: string;
  };
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  log.info(req.url || "");
  res.status(200).json({
    code: 200,
    data: {
      serverTime: Date.now(),
      imgTitle: "新疆库俄铁路",
      imgUrl:
        "https://p0.meituan.net/scarlett/436ab52281f3f5033f77a48f5c12bd671009047.jpg",
    },
    msg: "成功",
  });
}
