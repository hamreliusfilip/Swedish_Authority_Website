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
            <div className="px-4 pt-16">
                <div className="flex flex-wrap justify-center">
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Sverige</CardTitle>
                            <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Svenska hirarkin och systemet.</span></CardDescription>
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
                            <CardTitle>Riksdagen</CardTitle>
                            <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad gör riksdagen?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Riksdagen utgör den lagstiftande grenen i Sveriges politiska system och har en central roll i att skapa och godkänna lagar samt övervaka regeringens arbete. Den fungerar som en företrädare för folket och speglar deras intressen och åsikter genom att väljas genom allmänna val vart fjärde år. I korrelation till andra delar av staten är riksdagen särskilt knuten till regeringen och departementen. Riksdagen väljer vanligtvis statsministern, som sedan leder regeringen. Regeringen är i sin tur ansvarig inför riksdagen och måste ha dess förtroende för att kunna regera. Det innebär att riksdagen kan fälla en regering genom ett misstroendevotum om den inte längre har förtroendet för dess politik eller ledarskap. Riksdagen övervakar också regeringens arbete genom att granska dess politik, budgetförslag och förvaltning. Detta sker genom olika utskott och genom debatter i kammaren. Dessutom kan riksdagen initiera lagförslag och delta i lagstiftningsprocessen genom att diskutera och rösta om förslag från regeringen eller enskilda ledamöter. Samtidigt är riksdagen kopplad till den verkställande makten genom departementen, vars ministrar är ansvariga inför riksdagen och ofta deltar i dess arbete genom att svara på frågor, presentera propositioner och debattera lagförslag. På så sätt bildar riksdagen, regeringen och departementen en integrerad del av Sveriges politiska system, där de olika delarna samverkar för att upprätthålla demokrati, lagstiftning och samhällsstyrning.</p>
                        </CardContent>
                    </Card>
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Regeringen</CardTitle>
                            <CardDescription><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad gör regeringen?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Regeringen är den verkställande grenen av Sveriges politiska system och har flera viktiga roller och ansvarsområden i korrelation till andra delar av staten. För det första är regeringen ansvarig för att genomföra lagar och beslut som antas av riksdagen, den lagstiftande grenen. Detta inkluderar att förbereda lagförslag, presentera dem för riksdagen och driva dem genom lagstiftningsprocessen. Regeringen har också befogenhet att utfärda förordningar, vilket är lagar som utfärdas utan att gå genom riksdagen, inom ramen för den lagstiftning som antagits av riksdagen. För det andra är regeringen ansvarig för att leda och administrera landets olika departement, vilka har specifika ansvarsområden inom olika områden som ekonomi, utbildning, hälsa och miljö. Departementen genomför regeringens politik och administrerar offentliga program och tjänster. I korrelation till riksdagen är regeringen ansvarig inför denna institution och måste ha dess förtroende för att kunna regera. Regeringen presenterar regelbundet sina politiska planer och budgetförslag för riksdagen och kan ställas till svars genom frågestunder och misstroendevotum. Samtidigt arbetar regeringen nära riksdagen genom att svara på frågor och delta i debatter. Regeringen har också en roll i förhållande till den tredje grenen av staten, den dömande makten, genom att tillhandahålla finansiering och administrativt stöd till domstolarna för att säkerställa att lagarna genomförs och rättvisa skipas. Genom dessa samspel och relationer med riksdagen, departementen och domstolarna spelar regeringen en central roll i Sveriges politiska system genom att genomföra lagar, administrera offentliga tjänster och förvalta nationens affärer.</p>
                        </CardContent>
                    </Card>
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Antal?</CardTitle>
                            <CardDescription><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Varför finns det så många myndigheter?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Det finns flera skäl till varför det finns många myndigheter inom en stat som Sverige: 1. Specialisering och effektivitet: Genom att dela upp ansvarsområden och skapa specialiserade myndigheter kan regeringen och den offentliga sektorn effektivt hantera olika delar av samhället. Varje myndighet kan fokusera på sitt specifika område av expertis och därigenom arbeta mer effektivt för att uppnå sina mål. 2. Mångfald av uppgifter: Samhället har många olika behov och utmaningar som kräver olika åtgärder och expertis för att hantera. Genom att ha många myndigheter kan regeringen tillhandahålla en mångfald av tjänster och insatser för att möta dessa behov, från hälsovård till utbildning, miljöskydd till infrastruktur. 3. Lokal närvaro: Genom att sprida myndigheterna över olika delar av landet kan regeringen säkerställa en lokal närvaro och anpassning till specifika regionala behov och förhållanden. Detta kan hjälpa till att främja jämlikhet och tillgänglighet till offentliga tjänster över hela landet. 4. Oberoende och ansvarsskyldighet: Att ha flera separata myndigheter kan bidra till att upprätthålla en viss grad av oberoende och ansvarsskyldighet inom den offentliga sektorn. Genom att ha separata enheter för olika ansvarsområden kan man undvika att all makt koncentreras på ett ställe och därigenom minska risken för missbruk eller korruption. Sammanfattningsvis finns det så många myndigheter för att möta samhällets komplexa behov och för att upprätthålla effektivitet, specialisering, lokal närvaro och ansvarsskyldighet inom den offentliga sektorn.</p>
                        </CardContent>
                    </Card>
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Statens budget</CardTitle>
                            <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>En kort beskrivning om statens budget</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Svenska statens budget är en plan som anger regeringens uppskattade inkomster och utgifter för det kommande året. Budgeten är ett verktyg för att styra statens ekonomi och prioritera resurser till olika områden som utbildning, hälsovård, infrastruktur och försvar. I Sverige presenteras budgeten vanligtvis av regeringen på hösten och behandlas sedan av Riksdagen. Budgetprocessen involverar olika steg, inklusive beredning, debatt och antagande. Regeringen förhandlar också ofta med olika partier i Riksdagen för att få stöd för sin budget. Svenska statens budget består av flera delar, inklusive den allmänna budgeten och den statliga myndighetsbudgeten. Den allmänna budgeten omfattar de flesta statliga inkomster och utgifter, medan myndighetsbudgeten omfattar särskilda myndigheters budgetar. Inkomsterna till staten kan komma från olika källor, som skatter, avgifter och intäkter från statliga företag. Utgifterna omfattar bland annat bidrag till kommuner och regioner, pensioner, löner till statliga anställda, samt investeringar i olika projekt och verksamheter. Budgeten är ett viktigt verktyg för att säkerställa att staten kan finansiera viktiga samhällsfunktioner och uppfylla sina åtaganden gentemot medborgarna. Den är också en viktig politisk fråga och används ofta som ett sätt för regeringen att visa upp sina prioriteringar och politiska mål. Statens utgifter 2024 är uppskattade till 1 331 miljarder kr och inkomster 1324 miljarder kr.</p>
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
