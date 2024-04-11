import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';
import Footer from '../../components/footer';
import Flow from '../../components/FlowCo';

import {
  Card,
} from "@/components/ui/card"

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <Card className='mt-8 mx-20'>
        <Flow />
      </Card>
      <Footer />
    </div>
  );
}


