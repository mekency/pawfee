import { NextRequest, NextResponse } from "next/server";

/**
 * @param {NextRequest} request 
 */
export async function POST(request) {
    const data = await request.json();

    console.log('Serveur');
    console.log(data);

    return NextResponse.json(
        {test: 'allo'}, 
        { status: 400 }
    );
}