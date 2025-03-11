import React from 'react';

import Contact from '@/components/Contact';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: 'Contact | Pawfee',
    description: 'La  page Contact pour contacter le suport et avoir des information sur un chats specifique et les consigne dadoptation.'
}


export default function contact() {
    return <>
        <h2>Contact</h2>

        <Contact />
    </>
}