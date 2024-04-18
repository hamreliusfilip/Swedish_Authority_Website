import { NextResponse } from 'next/server';
import dbConnect from "../../../lib/dbConnect";
import Myndigheter from "../../../lib/models/myndighet";

export async function GET() { //get all myndigheter
  try {
      await dbConnect();
      const myndighet = await Myndigheter.find();
      return NextResponse.json({myndighet},{status:200});
  } catch (error) {
      return NextResponse.json({status:500, message: 'Error finding myndigheter'});
  }
}  

export async function POST( req : any ) { //create myndighet
  try {
    const body = await req.json(); 

    await Myndigheter.create(body);

    return NextResponse.json({status:200, message: 'Myndighet created'});

  } catch (error) {
    console.log(error);
    return NextResponse.json({status:500, message: error});
  }
}