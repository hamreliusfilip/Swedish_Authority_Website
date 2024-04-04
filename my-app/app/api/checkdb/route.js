import { NextResponse } from 'next/server';
import Movie from '../../../lib/myndigheter'

export async function GET() {
    try {
        const movie = await Movie.find();
        return NextResponse.json({movie},{status:200, message: 'Movies found'});
    } catch (error) {
        return NextResponse.json({status:500, message: 'Error finding movies'});
    }
}