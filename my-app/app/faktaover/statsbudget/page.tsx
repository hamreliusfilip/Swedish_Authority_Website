import React from "react";
import CompleteMenu from '../../../components/completeMenu';
import Logo from '../../../components/logo';
import Footer from '../../../components/footer';
import Budget from "../../../components/budget";

export default function Home() {

    return (
        <div>
            <Logo />
            <CompleteMenu />
            <Budget />
            <Footer />
        </div>
    );
}
