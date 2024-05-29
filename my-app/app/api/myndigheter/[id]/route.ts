import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Myndighet from "../../../../lib/models/myndighet";

let connected = false;

export async function checkDB() {

    if (connected) {
        return true;
    } else {
        try {
            await dbConnect();
            connected = true;
        } catch (error) {
            connected = false;
        }
    }
    return connected;
}


export async function GET(req: any, { params }: any) {
    
    try {
        await dbConnect();
        const { id } = params.id;
    
        const myndighet = await Myndighet.findById(params.id);
        return NextResponse.json({ myndighet }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 500, message: "problem finding data" });
    }

}

export async function PUT(req: any, { params }: any) {

    try {
        const { id } = params.id;

        const body = await req.json();

        const upatedData = body.formData;

        const updateTicketData = await Myndighet.findByIdAndUpdate(upatedData._id, {
            ...upatedData,
        });

        return NextResponse.json({ message: "Data updated" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export async function DELETE(req: any, { params }: any) {
    try {
        const myndighet = await Myndighet.findByIdAndDelete(params.id);
        
        if (!myndighet) {
            console.log("hej den hittas ej??");
            return NextResponse.json({ message: "Myndighet not found" }, { status: 404 });
        }
        console.log("hej den är raderad");
        return NextResponse.json({ message: "Myndighet deleted successfully", myndighet }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Problem deleting data", error: error }, { status: 500 });
    }
}


// Function to check if a string only contains letter
function isValidObjectId(id: string) {
    return /^[a-zA-ZåäöÅÄÖ]+$/.test(id);
}


// export async function GET(req: any, { params }: any) {
//     try {
//         await dbConnect();
//         let myndighet;

//         if ((isValidObjectId(params.id)) != true) {
//             // If the parameter is a valid ObjectId (i.e., ID), fetch by ID
//             myndighet = await Myndighet.findById(params.id);
//         } else {
//             // If the parameter is not a valid ObjectId, fetch by name
//             myndighet = await Myndighet.findOne({ name: params.id });
//         }

//         if (myndighet) {
//             return NextResponse.json({ myndighet }, { status: 200 });
//         } else {
//             return NextResponse.json({ status: 404 });
//         }
//     } catch (error) {
//         return NextResponse.json({ status: 500, message: "problem finding" });
//     }
// }