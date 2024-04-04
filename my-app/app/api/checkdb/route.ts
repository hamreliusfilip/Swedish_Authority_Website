import { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Movie from "../../../lib/myndigheter";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const { method } = req;
    await dbConnect();

    if (method === "GET"){
      try {
        const movies = await Movie.find({});
        res.status(200).json({ success: true, data: movies });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    }
  }