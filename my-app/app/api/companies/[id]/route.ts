import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Company from "../../../../lib/models/company";

export async function GET(req: any, { params }: any) {
    try {
        await dbConnect();
        const { idOrName } = params;

        let company;

        if ((isValidObjectId(params.id)) != true) {
            // If the parameter is a valid ObjectId (i.e., ID), fetch by ID
            company = await Company.findById(params.id);
        } else {
            // If the parameter is not a valid ObjectId, fetch by name
            company = await Company.findOne({ name: params.id });
        }

        if (company) {
            return NextResponse.json({ company }, { status: 200 });
        } else {
            return NextResponse.json({ status: 404});
        }
    } catch (error) {
        return NextResponse.json({ status: 500, message: 'Error finding company by id/name' });
    }
}

// Function to check if a string only contains letter
function isValidObjectId(id: string) {
    return /^[a-zA-Z]+$/.test(id);
}
