import { NextRequest, NextResponse } from "next/server";

/**
 * @param {NextRequest} request 
 */
export async function POST(request) {
    const data = await request.json();

    // Afficher les informations du formulaire dans la console du serveur
    console.log('Données du formulaire:', data);

    return NextResponse.json(
        { message: 'Message reçu avec succès' }, 
        { status: 200 }
    );
}