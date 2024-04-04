import React from "react";

import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';
import Footer from '../../components/footer';
import DropDownDepartment from '../../components/dropDownDepartment';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page() {

  return (
    <div>
      <Logo />
      <CompleteMenu /> 
      <DropDownDepartment />

      <Card className="m-4 p+2 size-3/4">
                  
      <CardHeader>
        <CardTitle>Departement - Karta</CardTitle>
      </CardHeader>




                    
      </Card>

      <Footer />
    </div>
  );
}
