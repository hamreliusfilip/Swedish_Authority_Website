import { NextResponse } from 'next/server';
import dbConnect from "../../../lib/dbConnect";
import companies from "../../../lib/models/company";

export async function GET() { //get all myndigheter
  try {
      await dbConnect();
      const company = await companies.find();
      return NextResponse.json({company},{status:200});
  } catch (error) {
      return NextResponse.json({status:500, message: 'Error finding companies'});
  }
}  

export async function POST( req : any ) { //create myndighet
  try {
    const body = await req.json(); 

    await companies.create(body);

    return NextResponse.json({status:200, message: 'Company created'});

  } catch (error) {
    console.log(error);
    return NextResponse.json({status:500, message: error});
  }
}