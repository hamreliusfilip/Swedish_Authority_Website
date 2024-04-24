import CompleteMenu from "@/components/completeMenu";
import Logo from "@/components/logo";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { stringify } from "querystring";

export default async function Page({ params }: any) {

  const fetchMyndigheter = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/myndigheter/${params.id}`, {
        method: "GET"
      });
      const data = await res.json();
      return data.myndighet; // Extract the array of agencies
    } catch (error) {
      console.error("Error fetching myndigheter:", error);
      return [];
    }
  }

  // Since fetchMyndigheter is asynchronous, you need to await its result
  const data = await fetchMyndigheter();
  const base64String = data.logo_url;
  console.log(stringify(base64String.data))

  // Assuming data is an object with a name property
  return (
    <>
      <div>
        <Logo />
        <CompleteMenu />
      </div>
      <div className="mx-auto w-4/5 ">
        <div className="grid grid-cols-1 justify-center items-center h-48">
          <div className="flex justify-center">
            <p className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl font-bold self-center">{data.name}</p>
            <img className="scale-50 ml-4 self-center" src={base64String} alt="Base64 Encoded" />
          </div>
        </div>



        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="text-xl font-bold">Snabb Fakta</p>
            <Card className='grid grid-cols-2 gap-10'>
  <div className="col-span-1">1</div>
  <div className="col-span-1">2</div>
  <div className="col-span-1">3</div>
  <div className="col-span-1">4</div>
  <div className="col-span-1/3">5</div>
  <div className="col-span-1/3">6</div>
  <div className="col-span-1/3">7</div>
</Card>
          </div>

          <div>
            <p className="text-xl font-bold">Generell fakta</p>
            <Card className='p-5'>
              <CardDescription>{data.info}</CardDescription>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

