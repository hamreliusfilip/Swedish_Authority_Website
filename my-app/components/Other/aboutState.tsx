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

export default function AboutState() {
    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Grundläggande fakta </h1>
                <p className='text-center font-normal text-l mt-5'> Kort och enkel information om <br></br> svenska systemet och hirarkin </p>
                <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
            </div>

            <div className="px-4 pt-16">
                <div className="flex flex-wrap justify-center">
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Svenska systemet</CardTitle>
                            <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Svenska hirarkin.</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Sverige är känt för sitt välutvecklade välfärdssystem och sin socialdemokratiska politik. Landet har en monarki med en konstitutionell demokrati, vilket innebär att kungahuset har en symbolisk roll medan den verkställande makten utövas av den valda regeringen. Regeringen leds av en statsminister som väljs av Sveriges riksdag, enligt proportionell representation. Sverige har ett omfattande socialförsäkringssystem som inkluderar allt från sjukvård till utbildning och pensioner. Landet är känt för sin höga levnadsstandard och jämlikhet. En stor del av finansieringen för välfärdsprogrammen kommer från höga skatter. Den svenska ekonomin är en blandning av marknadsekonomi och välfärdsstat. Landet har en stark exportindustri, särskilt inom sektorer som telekommunikation, fordonstillverkning och läkemedel. Den svenska samhällsstrukturen präglas också av hög grad av jämställdhet och jämlikhet. Kvinnor har haft en stark representation inom politiken, och landet har antagit progressiva lagar för att främja jämställdhet på arbetsplatsen och i samhället i stort. Sverige är också känt för sitt engagemang för miljöskydd och hållbarhet, med ambitiösa mål för att minska koldioxidutsläpp och främja förnybar energi. </p>
                        </CardContent>
                    </Card>
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Vad är ett departement?</CardTitle>
                            <CardDescription><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad är ett departement och hur fungerar det?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Ett departement är en viktig del av en regering och fungerar som en specialiserad enhet som ansvarar för att hantera och genomföra specifika områden av offentlig politik och förvaltning. Dessa områden kan inkludera allt från ekonomi, utbildning och hälsa till miljö, utrikesfrågor och försvar. Varje departement leds vanligtvis av en minister som är utnämnd av regeringschefen, som i Sveriges fall är statsministern. Ministrar och deras departement spelar en nyckelroll i att utforma och genomföra regeringens politik inom sina respektive områden. De driver initiativ, utvecklar lagstiftning, hanterar budgetar och samarbetar med andra statliga organ och externa intressenter för att uppnå regeringens övergripande mål och visioner för samhället. Departementen fungerar som nav för förvaltningsapparaten och spelar en avgörande roll i att förvalta och utveckla nationens resurser och institutioner.</p>
                        </CardContent>
                    </Card>
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Vad är en myndighet?</CardTitle>
                            <CardDescription><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Hur fungerar en myndighet?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>En myndighet är en offentlig institution eller organisation som har tilldelats specifika befogenheter och ansvar av regeringen för att utföra en viss funktion eller uppgift inom samhället. Dessa uppgifter kan vara mycket varierande och kan omfatta allt från att reglera specifika branscher och sektorer, till att tillhandahålla tjänster inom områden som hälsa, utbildning eller transport. Myndigheter finns på olika nivåer av den offentliga sektorn, från nationell till regional och lokal nivå, beroende på deras ansvarsområde och geografiska räckvidd. De är oftast underställda en regering, en minister eller ett departement, och arbetar enligt lagar, förordningar och riktlinjer som fastställts av lagstiftaren. Myndigheterna spelar en viktig roll i att säkerställa att samhället fungerar smidigt och att medborgarnas behov och rättigheter tillgodoses genom att tillhandahålla olika tjänster, reglera verksamheter och främja samhällsutveckling.</p>
                        </CardContent>
                    </Card>
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Varför finns det så många myndigheter?</CardTitle>
                            <CardDescription><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Varför finns det så många myndigheter?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Det finns flera skäl till varför det finns många myndigheter inom en stat som Sverige: 1. Specialisering och effektivitet: Genom att dela upp ansvarsområden och skapa specialiserade myndigheter kan regeringen och den offentliga sektorn effektivt hantera olika delar av samhället. Varje myndighet kan fokusera på sitt specifika område av expertis och därigenom arbeta mer effektivt för att uppnå sina mål. 2. Mångfald av uppgifter: Samhället har många olika behov och utmaningar som kräver olika åtgärder och expertis för att hantera. Genom att ha många myndigheter kan regeringen tillhandahålla en mångfald av tjänster och insatser för att möta dessa behov, från hälsovård till utbildning, miljöskydd till infrastruktur. 3. Lokal närvaro: Genom att sprida myndigheterna över olika delar av landet kan regeringen säkerställa en lokal närvaro och anpassning till specifika regionala behov och förhållanden. Detta kan hjälpa till att främja jämlikhet och tillgänglighet till offentliga tjänster över hela landet. 4. Oberoende och ansvarsskyldighet: Att ha flera separata myndigheter kan bidra till att upprätthålla en viss grad av oberoende och ansvarsskyldighet inom den offentliga sektorn. Genom att ha separata enheter för olika ansvarsområden kan man undvika att all makt koncentreras på ett ställe och därigenom minska risken för missbruk eller korruption. Sammanfattningsvis finns det så många myndigheter för att möta samhällets komplexa behov och för att upprätthålla effektivitet, specialisering, lokal närvaro och ansvarsskyldighet inom den offentliga sektorn.</p>
                        </CardContent>
                    </Card>
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Regioner & kommuner</CardTitle>
                            <CardDescription><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad är kommuner och regioner?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>I Sverige är regioner och kommuner två nivåer av lokal självstyre som spelar en viktig roll i att tillhandahålla offentliga tjänster och hantera samhällsfrågor på lokal nivå. Regioner (landsting): Regionerna ansvarar främst för hälso- och sjukvård samt tandvård. Deras huvudsakliga uppgift är att säkerställa att invånarna har tillgång till en god vård på lika villkor. Regionerna finansieras genom skatter och statsbidrag. Det finns 21 regioner i Sverige, och deras geografiska omfång matchar vanligtvis länens gränser. Kommuner: Kommunerna är den närmaste nivån av lokalt självstyre och ansvarar för en mängd olika samhällstjänster och funktioner. Det inkluderar utbildning, äldreomsorg, barnomsorg, kultur, fysisk planering, renhållning, vattenförsörjning och mycket mer. Kommunerna finansieras genom skatter och avgifter. I Sverige finns det 290 kommuner. Kommunerna och regionerna styrs av politiskt valda församlingar (kommunfullmäktige och landstingsfullmäktige), där politiker väljs av invånarna. Dessa församlingar väljer också ledamöter till olika nämnder och styrelser som ansvarar för olika områden av kommunal och regional verksamhet. Den svenska modellen med decentraliserat självstyre ger kommuner och regioner en stor grad av autonomi och ansvar för att anpassa tjänster och beslut efter lokala behov och förhållanden. Detta möjliggör lokal anpassning och innovation samtidigt som det upprätthåller en nationell standard för service och samhällsstruktur.</p>
                        </CardContent>
                    </Card>
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Statliga bolag</CardTitle>
                            <CardDescription><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad är kommuner och regioner?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p>Statliga bolag i Sverige är företag som ägs helt eller delvis av den svenska staten och är aktiva inom olika sektorer såsom energi, telekommunikation, transport, posttjänster, finans och mer. Deras verksamhet sträcker sig över olika områden och spelar en betydande roll för landets ekonomi och samhälle. Dessa bolag drivs vanligtvis med ett samhällsansvar i åtanke och deras syfte varierar beroende på sektor och verksamhet. Ett exempel är Vattenfall, ett av Europas största energiföretag, som producerar och distribuerar elektricitet från olika energikällor inklusive kärnkraft, vattenkraft, vindkraft och termisk kraft. Liknande exempel inkluderar PostNord, det största post- och logistikföretaget i Sverige och Danmark, ansvarigt för att hantera posttjänster och logistik över hela landet för att säkerställa effektiv och säker distribution av brev och paket. Sveriges riksbank är landets centralbank och har ansvar för att främja en stabil penningpolitik och hantera valutareserven. Systembolaget, den svenska detaljhandelskedjan för försäljning av alkoholhaltiga drycker, har en monopolställning när det gäller försäljning av starka drycker och arbetar för att reglera försäljningen av alkohol och främja ansvarsfull konsumtion genom en ålderskontroll och information om alkohol. Dessa statliga bolag, tillsammans med andra, utgör en integrerad del av Sveriges ekonomi och infrastruktur och spelar en viktig roll för att upprätthålla samhällsservice och regleringar.</p>
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
