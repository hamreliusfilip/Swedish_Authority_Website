import React from "react";

import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';
import Footer from '../../components/footer';

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

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Sverige</CardTitle>
              <CardDescription className="text-sm">Svenska hirarkin och system i stort.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sverige är känt för sitt välutvecklade välfärdssystem och sin socialdemokratiska politik. Landet har en monarki med en konstitutionell demokrati, vilket innebär att kungahuset har en symbolisk roll medan den verkställande makten utövas av den valda regeringen. Regeringen leds av en statsminister som väljs av Sveriges riksdag, enligt proportionell representation. Sverige har ett omfattande socialförsäkringssystem som inkluderar allt från sjukvård till utbildning och pensioner. Landet är känt för sin höga levnadsstandard och jämlikhet. En stor del av finansieringen för välfärdsprogrammen kommer från höga skatter. Den svenska ekonomin är en blandning av marknadsekonomi och välfärdsstat. Landet har en stark exportindustri, särskilt inom sektorer som telekommunikation, fordonstillverkning och läkemedel. Den svenska samhällsstrukturen präglas också av hög grad av jämställdhet och jämlikhet. Kvinnor har haft en stark representation inom politiken, och landet har antagit progressiva lagar för att främja jämställdhet på arbetsplatsen och i samhället i stort. Sverige är också känt för sitt engagemang för miljöskydd och hållbarhet, med ambitiösa mål för att minska koldioxidutsläpp och främja förnybar energi. </p>
            </CardContent>
          </Card>

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-2/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Vad är ett departement?</CardTitle>
              <CardDescription>Hur fungerar ett departement och vad är det?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ett departement är en viktig del av en regering och fungerar som en specialiserad enhet som ansvarar för att hantera och genomföra specifika områden av offentlig politik och förvaltning. Dessa områden kan inkludera allt från ekonomi, utbildning och hälsa till miljö, utrikesfrågor och försvar. Varje departement leds vanligtvis av en minister som är utnämnd av regeringschefen, som i Sveriges fall är statsministern. Ministrar och deras departement spelar en nyckelroll i att utforma och genomföra regeringens politik inom sina respektive områden. De driver initiativ, utvecklar lagstiftning, hanterar budgetar och samarbetar med andra statliga organ och externa intressenter för att uppnå regeringens övergripande mål och visioner för samhället. Departementen fungerar som nav för förvaltningsapparaten och spelar en avgörande roll i att förvalta och utveckla nationens resurser och institutioner.</p>
            </CardContent>
          </Card>

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Vad är en myndighet?</CardTitle>
              <CardDescription>Hur fungerar en myndighet och vad är det?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>En myndighet är en offentlig institution eller organisation som har tilldelats specifika befogenheter och ansvar av regeringen för att utföra en viss funktion eller uppgift inom samhället. Dessa uppgifter kan vara mycket varierande och kan omfatta allt från att reglera specifika branscher och sektorer, till att tillhandahålla tjänster inom områden som hälsa, utbildning eller transport. Myndigheter finns på olika nivåer av den offentliga sektorn, från nationell till regional och lokal nivå, beroende på deras ansvarsområde och geografiska räckvidd. De är oftast underställda en regering, en minister eller ett departement, och arbetar enligt lagar, förordningar och riktlinjer som fastställts av lagstiftaren. Myndigheterna spelar en viktig roll i att säkerställa att samhället fungerar smidigt och att medborgarnas behov och rättigheter tillgodoses genom att tillhandahålla olika tjänster, reglera verksamheter och främja samhällsutveckling.</p>
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
              <p>Riksdagen utgör den lagstiftande grenen i Sveriges politiska system och har en central roll i att skapa och godkänna lagar samt övervaka regeringens arbete. Den fungerar som en företrädare för folket och speglar deras intressen och åsikter genom att väljas genom allmänna val vart fjärde år. I korrelation till andra delar av staten är riksdagen särskilt knuten till regeringen och departementen. Riksdagen väljer vanligtvis statsministern, som sedan leder regeringen. Regeringen är i sin tur ansvarig inför riksdagen och måste ha dess förtroende för att kunna regera. Det innebär att riksdagen kan fälla en regering genom ett misstroendevotum om den inte längre har förtroendet för dess politik eller ledarskap. Riksdagen övervakar också regeringens arbete genom att granska dess politik, budgetförslag och förvaltning. Detta sker genom olika utskott och genom debatter i kammaren. Dessutom kan riksdagen initiera lagförslag och delta i lagstiftningsprocessen genom att diskutera och rösta om förslag från regeringen eller enskilda ledamöter. Samtidigt är riksdagen kopplad till den verkställande makten genom departementen, vars ministrar är ansvariga inför riksdagen och ofta deltar i dess arbete genom att svara på frågor, presentera propositioner och debattera lagförslag. På så sätt bildar riksdagen, regeringen och departementen en integrerad del av Sveriges politiska system, där de olika delarna samverkar för att upprätthålla demokrati, lagstiftning och samhällsstyrning.</p>
            </CardContent>
          </Card>

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Regeringen</CardTitle>
              <CardDescription>Vad gör regeringen i korrelation till alla andra delar?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Regeringen är den verkställande grenen av Sveriges politiska system och har flera viktiga roller och ansvarsområden i korrelation till andra delar av staten. För det första är regeringen ansvarig för att genomföra lagar och beslut som antas av riksdagen, den lagstiftande grenen. Detta inkluderar att förbereda lagförslag, presentera dem för riksdagen och driva dem genom lagstiftningsprocessen. Regeringen har också befogenhet att utfärda förordningar, vilket är lagar som utfärdas utan att gå genom riksdagen, inom ramen för den lagstiftning som antagits av riksdagen. För det andra är regeringen ansvarig för att leda och administrera landets olika departement, vilka har specifika ansvarsområden inom olika områden som ekonomi, utbildning, hälsa och miljö. Departementen genomför regeringens politik och administrerar offentliga program och tjänster. I korrelation till riksdagen är regeringen ansvarig inför denna institution och måste ha dess förtroende för att kunna regera. Regeringen presenterar regelbundet sina politiska planer och budgetförslag för riksdagen och kan ställas till svars genom frågestunder och misstroendevotum. Samtidigt arbetar regeringen nära riksdagen genom att svara på frågor och delta i debatter. Regeringen har också en roll i förhållande till den tredje grenen av staten, den dömande makten, genom att tillhandahålla finansiering och administrativt stöd till domstolarna för att säkerställa att lagarna genomförs och rättvisa skipas. Genom dessa samspel och relationer med riksdagen, departementen och domstolarna spelar regeringen en central roll i Sveriges politiska system genom att genomföra lagar, administrera offentliga tjänster och förvalta nationens affärer.</p>
            </CardContent>
          </Card>

          <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <CardHeader>
              <CardTitle>Hur många och varför?</CardTitle>
              <CardDescription>Varför finns det så många olika delar?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Det finns flera skäl till varför det finns många myndigheter inom en stat som Sverige: 1. Specialisering och effektivitet: Genom att dela upp ansvarsområden och skapa specialiserade myndigheter kan regeringen och den offentliga sektorn effektivt hantera olika delar av samhället. Varje myndighet kan fokusera på sitt specifika område av expertis och därigenom arbeta mer effektivt för att uppnå sina mål. 2. Mångfald av uppgifter: Samhället har många olika behov och utmaningar som kräver olika åtgärder och expertis för att hantera. Genom att ha många myndigheter kan regeringen tillhandahålla en mångfald av tjänster och insatser för att möta dessa behov, från hälsovård till utbildning, miljöskydd till infrastruktur. 3. Lokal närvaro: Genom att sprida myndigheterna över olika delar av landet kan regeringen säkerställa en lokal närvaro och anpassning till specifika regionala behov och förhållanden. Detta kan hjälpa till att främja jämlikhet och tillgänglighet till offentliga tjänster över hela landet. 4. Oberoende och ansvarsskyldighet: Att ha flera separata myndigheter kan bidra till att upprätthålla en viss grad av oberoende och ansvarsskyldighet inom den offentliga sektorn. Genom att ha separata enheter för olika ansvarsområden kan man undvika att all makt koncentreras på ett ställe och därigenom minska risken för missbruk eller korruption. Sammanfattningsvis finns det så många myndigheter för att möta samhällets komplexa behov och för att upprätthålla effektivitet, specialisering, lokal närvaro och ansvarsskyldighet inom den offentliga sektorn.</p>
            </CardContent>
          </Card>

        </div>
      </div>
      <Footer /> 
    </div>
  );
}
