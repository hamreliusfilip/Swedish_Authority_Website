import { NextApiRequest, NextApiResponse } from "next";
import { NextDataPathnameNormalizer } from "next/dist/server/future/normalizers/request/next-data";
import { NextResponse } from 'next/server';
import dbConnect from "../../../lib/dbConnect";
import Myndighet from "../../../lib/models/myndighet";

export async function GET() {
  try {
      await dbConnect();
      const myndighet = await Myndighet.find();
      return NextResponse.json({myndighet},{status:200});
  } catch (error) {
      return NextResponse.json({status:500, message: 'Error finding myndigheter'});
  }
}


  
  

  // switch (method) {
  //   case "GET":
  //     try {
  //       const myndighet = await Myndighet.find({}); /* find all the data in our database */
  //       res.status(200).json({ success: true, data: myndighet , message:"Yes"});
  //     } catch (error) {
  //       res.status(400).json({ success: false });
  //     }
  //     break;
  //   case "POST":
  //     try {
  //       const myndighet = await Myndighet.create(
  //         req.body,
  //       ); /* create a new model in the database */
  //       res.status(201).json({ success: true, data: myndighet });
  //     } catch (error) {
  //       res.status(400).json({ success: false });
  //     }
  //     break;
  //   default:
  //     res.status(400).json({ success: false });
  //     break;
  // }