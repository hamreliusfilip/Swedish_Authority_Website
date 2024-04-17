import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Myndighet from "../../../../lib/models/myndighet";

export async function GET(req : any, { params } : any ) {

  
  try {
      await dbConnect();
      const { id } = params;
      const myndighet = await Myndighet.findById(id);
      return NextResponse.json({myndighet},{status:200});

  } catch (error) {
      return NextResponse.json({status:500, message: 'Error finding myndigheter'});
  }

}  