import React from "react";

import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';

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
      <div>
        <Logo />
        <CompleteMenu />
      </div>

      <div className="px-4 pt-16">
      <div className="flex flex-wrap justify-center">

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Sverige</CardTitle>
              <CardDescription className="text-sm">Svenska hirarkin och system i stort.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, velit in finibus facilisis, lacus velit pulvinar est, nec tincidunt justo elit id dolor. Sed vehicula orci sit amet sapien gravida, vitae rhoncus urna lacinia. </p>
            </CardContent>
          </Card>

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Vad är ett departement?</CardTitle>
              <CardDescription>Hur fungerar ett departement och vad är det?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, velit in finibus facilisis, lacus velit pulvinar est, nec tincidunt justo elit id dolor. Sed vehicula orci sit amet sapien gravida, vitae rhoncus urna lacinia. </p>
            </CardContent>
          </Card>

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Vad är en myndighet?</CardTitle>
              <CardDescription>Hur fungerar en myndighet och vad är det?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, velit in finibus facilisis, lacus velit pulvinar est, nec tincidunt justo elit id dolor. Sed vehicula orci sit amet sapien gravida, vitae rhoncus urna lacinia. </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
      <div className="flex flex-wrap justify-center">

        <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Riksdagen</CardTitle>
              <CardDescription className="text-sm">Vad gör riksdagen i korrelation till alla andra delar?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, velit in finibus facilisis, lacus velit pulvinar est, nec tincidunt justo elit id dolor. Sed vehicula orci sit amet sapien gravida, vitae rhoncus urna lacinia. </p>
            </CardContent>
          </Card>

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Regeringen</CardTitle>
              <CardDescription>Vad gör regeringen i korrelation till alla andra delar?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, velit in finibus facilisis, lacus velit pulvinar est, nec tincidunt justo elit id dolor. Sed vehicula orci sit amet sapien gravida, vitae rhoncus urna lacinia. </p>
            </CardContent>
          </Card>

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Hur många och varför?</CardTitle>
              <CardDescription>Varför finns det så många olika delar?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, velit in finibus facilisis, lacus velit pulvinar est, nec tincidunt justo elit id dolor. Sed vehicula orci sit amet sapien gravida, vitae rhoncus urna lacinia. </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
