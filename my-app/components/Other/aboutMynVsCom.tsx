import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function AboutMynVsCom() {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Myndigheter & Statliga Företag </h1>
        <p className='text-center font-normal text-l mt-5'> Kort och enkel information om <br></br>skillnaden mellan statliga företag och myndigheter </p>
        <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
      </div>

      <div className="flex justify-center pt-16">
        <div className="flex flex-wrap justify-center">
          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <CardHeader>
              <CardTitle>Myndigheter vs Statliga Företag</CardTitle>
              <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad är skillnaden mellan statliga företag och myndigheter?</span></CardDescription>
            </CardHeader>
            <CardContent>
              <p>I Sverige finns det en tydlig åtskillnad mellan statliga företag och myndigheter, även om båda spelar viktiga roller i samhället. Statliga företag är affärsdrivande enheter där staten är huvudsaklig ägare. Deras huvudsakliga syfte är att bedriva affärsverksamhet inom olika sektorer, såsom transport, energi, telekommunikation och bankväsende. Dessa företag drivs med affärsmässiga mål och förväntas generera vinst eller åtminstone vara ekonomiskt hållbara. Å andra sidan är myndigheter icke-vinstdrivande organisationer som är ansvariga för att genomföra och verkställa lagar, förordningar och beslut som antagits av den lagstiftande och/eller verkställande makten. Deras huvuduppgift är att tillhandahålla service, övervaka efterlevnaden av lagar och regler samt utföra olika administrativa och tillsynsrelaterade uppgifter inom olika samhällssektorer. Skillnaden ligger framförallt i deras verksamhet och syfte. Statliga företag är inriktade på att bedriva affärsverksamhet och konkurrera på marknaden, medan myndigheter är inriktade på att tillhandahålla offentliga tjänster och upprätthålla regleringar för att säkerställa samhällsordning och välfärd. <br></br><br></br>En annan viktig skillnad är deras organisatoriska struktur. Statliga företag är vanligtvis organiserade enligt affärsmodeller och drivs som privata bolag, medan myndigheter har en hierarkisk struktur och är underställda regeringen eller andra överordnade organ.<br></br><br></br>Sammanfattningsvis är statliga företag inriktade på affärsverksamhet och vinstgenerering, medan myndigheter är inriktade på att tillhandahålla offentliga tjänster och upprätthålla regleringar för samhällets bästa. Trots deras olikheter spelar båda en viktig roll för att säkerställa en välfungerande och hållbar samhällsstruktur i Sverige.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="px-4 pt-16">
        <div className="flex flex-wrap justify-center">
          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <CardHeader>
              <CardTitle>Myndigheter</CardTitle>
              <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad är en myndighet?</span></CardDescription>
            </CardHeader>
            <CardContent>
              <p>Myndigheterna är organiserade enheter med specifika ansvarsområden och befogenheter som är delegerade av staten eller andra regeringsorgan. Deras huvudsakliga syfte är att genomföra och verkställa lagar, förordningar och beslut som antagits av den lagstiftande och/eller verkställande makten.<br></br><br></br>I Sverige finns ett omfattande nätverk av myndigheter som täcker olika samhällssektorer och funktioner. Dessa kan vara ansvariga för områden såsom hälsa, utbildning, rättvisa, miljö, ekonomi och många andra. Varje myndighet har en specifik uppgift eller målgrupp och arbetar för att säkerställa att dessa uppfylls på ett effektivt och rättvist sätt. Myndigheterna är vanligtvis organiserade hierarkiskt med olika nivåer av personal och ledning. De kan vara nationella, regionala eller lokala beroende på deras ansvarsområden och behovet av närhet till medborgarna. Myndigheter kan också vara oberoende eller underställda en överordnad institution, såsom ett ministerium eller en regering.<br></br><br></br>En viktig funktion för myndigheter är att tillhandahålla service och stöd till medborgarna, företag och andra organisationer inom deras ansvarsområden. Detta kan innebära att ge information, rådgivning, tillstånd, bidrag eller andra former av hjälp för att underlätta för medborgarna att navigera i olika regleringar och föreskrifter.</p>
            </CardContent>
          </Card>
          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <CardHeader>
              <CardTitle>Statliga företag</CardTitle>
              <CardDescription><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad är ett statligt företag?</span></CardDescription>
            </CardHeader>
            <CardContent>
              <p>Statliga företag, en hörnsten i den svenska ekonomin, representerar en betydande närvaro av staten inom näringslivet. Dessa företag utgör en mångfacetterad portfölj av 43 bolag, där staten innehar antingen hel- eller delägarskap, och två av dem är till och med börsnoterade. Utöver dessa bolag förvaltar staten även två verksamhetsstiftelser. Den kollektiva kraften från dessa företag ger upphov till en imponerande sysselsättning för cirka 134 000 personer, vilket visar på deras betydelse som arbetsgivare och motor för ekonomisk tillväxt. Den ekonomiska tyngden som statliga företag bär är imponerande och uppgår till en uppskattad portföljvärde på 850 miljarder kronor. Denna siffra återspeglar inte bara den ekonomiska betydelsen av dessa företag utan också det strategiska inflytande som staten har över olika sektorer och branscher. Genom att vara närvarande i allt från infrastruktur till teknik och finans skapar statliga företag en stabil grund för samhällsutvecklingen och bidrar till att säkerställa långsiktig hållbarhet och tillväxt. <br></br><br></br>Dessutom agerar staten som en garant för kvalitet och etik inom dessa företag, vilket bidrar till förtroende från både medborgare och internationella investerare. Genom att upprätthålla höga standarder för förvaltning och transparens säkerställer staten att dess närvaro inom näringslivet gynnar samhället som helhet. Genom att ständigt utvärdera och anpassa sin portfölj efter marknadens behov och samhällets förväntningar förblir statliga företag en viktig och respekterad del av den svenska ekonomin.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-center pt-16">
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <Card className="m-4 p+2 text-left">
            <CardHeader>
              <CardTitle>Om datan</CardTitle>
              <CardDescription className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">Vart kommer informationen ifrån?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Den här datan är AI genererad med hjälp av Open AI's ChatGPT-3.5. Informationen har tagits fram genom att ställa de frågor som är markerat i blått på respketive kort.</p>
            </CardContent>
            <CardContent>
              <Link href="https://chat.openai.com" target="_blank">
                <Button variant="outline" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">ChatGPT - OpenAI</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  );
}
