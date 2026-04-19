// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveDocProducts } from "../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const data = await retrieveDocProducts("products");

    res.status(200).json({
      status: true,
      status_code: 200,
      data,
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json({
      status: false,
      status_code: 500,
      data: [],
      message: "Gagal mengambil data produk dari Firebase",
    });
  }
}