import React from 'react'
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import MynList from '../../../components/MyndigheterSida/MyndighetList';

export default function Page() {
    return (
        <div>
            <Logo />
            <CompleteMenu />
            <MynList />
            <Footer />
        </div>
    );
}