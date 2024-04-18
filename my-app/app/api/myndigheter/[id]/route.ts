import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Myndighet from "../../../../lib/models/myndighet";

export async function GET(req: any, { params }: any) {
    try {
        await dbConnect();
        const { idOrName } = params;

        let myndighet;
        if (isValidObjectId(idOrName)) {
            // If the parameter is a valid ObjectId (i.e., ID), fetch by ID
            myndighet = await Myndighet.findById(idOrName);
        } else {
            // If the parameter is not a valid ObjectId, fetch by name
            myndighet = await Myndighet.find({ name: idOrName}, function (err:any, docs:any) { 
              if (err){ 
                  console.log(err); 
              } 
              else{ 
                  console.log("First function call : ", docs); 
              } 
          }); 
        }

        if (myndighet) {
            return NextResponse.json({ myndighet }, { status: 200 });
        } else {
            return NextResponse.json({ status: 404});
        }
    } catch (error) {
        return NextResponse.json({ status: 500, message: 'Error finding myndighet by id/name' });
    }
}

// Function to check if a string is a valid ObjectId
function isValidObjectId(id: string) {
    return /^[0-9a-fA-F]{24}$/.test(id);
}
