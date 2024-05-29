import { NextResponse } from 'next/server';
import dbConnect from "../../../lib/dbConnect";
import Myndigheter from "../../../lib/models/myndighet";

export async function GET() {
  const start = Date.now(); // Start timer
  console.log('Timer started')
  try {
    await dbConnect();
    const myndigheter = await Myndigheter.find().lean(); // Use lean for faster performance
    const duration = Date.now() - start; // End timer
    console.log(`GET request processed in ${duration}ms`);
    return NextResponse.json({ myndigheter }, { status: 200 });
  } catch (error) {
    console.error('Error finding myndigheter:', error);
    return NextResponse.json({ status: 500, message: 'Error finding myndigheter' });
  }
}

export async function POST( req : any ) { //create myndighet
  
  try {
    const body = await req.json(); 

    await Myndigheter.create(body);

    return NextResponse.json({status:200, message: 'Myndighet created'});

  } catch (error) {

    return NextResponse.json({status:500, message: error});
  }
}