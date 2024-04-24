import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Myndighet from "../../../../lib/models/myndighet";

export async function GET(req: any, { params }: any) {
    try {
        await dbConnect();
        const { idOrName } = params;

        let myndighet;

        if ((isValidObjectId(params.id)) != true) {
            // If the parameter is a valid ObjectId (i.e., ID), fetch by ID
            myndighet = await Myndighet.findById(params.id);
        } else {
            // If the parameter is not a valid ObjectId, fetch by name
            myndighet = await Myndighet.findOne({ name: params.id });
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

// Function to check if a string only contains letter
function isValidObjectId(id: string) {
    return /^[a-zA-Z]+$/.test(id);
}
