import React from 'react'
import CompleteMenu from '../../../components/completeMenu';
import Logo from '../../../components/logo';
import Footer from '../../../components/footer';
import MynList from '../../../components/MyndighetList';

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