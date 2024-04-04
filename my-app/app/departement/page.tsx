import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';
import Footer from '../../components/footer';
import DropDownDepartment from '../../components/dropDownDepartment';
import Flow from '../../components/FlowCo';

import {
  Card,
} from "@/components/ui/card"

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <DropDownDepartment /> 
      <Card>
        <Flow />
      </Card>
      <Footer />
    </div>
  );
}


