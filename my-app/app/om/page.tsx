import React from "react";

import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';
import Footer from '../../components/footer';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <div>
        <Logo />
        <CompleteMenu />
      </div>

      <div className="flex justify-center pt-16">
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <Card className="m-4 p+2">
            <CardHeader>
              <CardTitle>Om hemsidan</CardTitle>
              <CardDescription className="text-sm">En beskrivning av varför och hur hemsidan finns</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Denna hemsida har utvecklats av två masterstudenter vid Linköpings universitet inom ramen för kursen Avancerad Webbprogrammering (TDDD27). Syftet med hemsidan är att, utöver kursens innehåll, ge en tydlig överblick över hur svenska myndigheter fungerar och vilka som existerar. Den här typen av data är svår att få tag på och kräver insamling från flera källor för att få en sammanhängande bild. Denna hemsida erbjuder all denna information på ett och samma ställe, presenterat på ett intuitivt sätt. Denna hemsida är inte officiell och har ingen koppling till regeringen eller någon annan myndighet.</p>
            </CardContent>
            <CardContent> 
            <Link href="https://www.linkedin.com/in/annagranberg00/" target="_blank">
              <Button variant="outline" className='m-1 bg-amber-200'>Anna Granberg</Button>
            </Link>
            <Link href="https://www.linkedin.com/in/filip-hamrelius/" target="_blank">
              <Button variant="outline" className='m-1 bg-amber-200'>Filip Hamrelius</Button>
            </Link>
            </CardContent>
          </Card> 

          <Card className="m-4 p+2">
            <CardHeader>
              <CardTitle>Om informationen</CardTitle>
              <CardDescription className="text-sm">En beskrivning av vart information kommer ifrån</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Informationen som finns tillgänglig på denna hemsida har samlats in från flera olika källor. All data gällande myndigheternas namn, beskrivning och relaterad information har hämtats från regeringskansliets hemsida, regeringen.se. Har regeringen hemsida saknat informationen har wikipedia.org eller riksarkivet använts. Antalet och vilka myndigheter som finns baseras på Statskontorets rapport 'Statsförvaltningen i korthet' från 2023. Logotyper och bilder har samlats in antingen från respektive myndighets hemsida eller från Wikipedia.org. Vi tar inget ansvar kring trovärdigheten av faktan som presenteras på denna sida, huvudsyftet för oss är utvecklingen och strukturen bakom applikationen.</p> 
            </CardContent>
            <CardContent> 
            <Link href="https://riksarkivet.se/start" target="_blank">
              <Button variant="outline" className='m-1 bg-amber-200'>Riksarkivet</Button>
            </Link>
            <Link href="https://www.regeringen.se/regeringskansliet/" target="_blank">
              <Button variant="outline" className='m-1 bg-amber-200'>Regeringskansliet</Button>
            </Link>
            <Link href="https://www.statskontoret.se/publicerat/publikationer/publikationer-2023/statsforvaltningen-i-korthet-2023/" target="_blank">
              <Button variant="outline" className='m-1 bg-amber-200'>Statskontoret - Statsförvaltning i korthet</Button>
            </Link>
            <Link href="https://sv.wikipedia.org/wiki/Portal:Huvudsida" target="_blank">
              <Button variant="outline" className='m-1 bg-amber-200'>Wikipedia</Button>
            </Link>
            </CardContent>
          </Card> 
        </div>
      </div>
      <Footer />
    </div>
  );
}