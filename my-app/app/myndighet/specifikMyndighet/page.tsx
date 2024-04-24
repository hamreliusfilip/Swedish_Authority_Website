import React from 'react'
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';

export default function Page() {
    return (
        <div>
            <Logo />
            <CompleteMenu />
            <h1>Specifik sida för myndighet</h1>
            <Footer />
        </div>
    );
}