import ActionButtons from "@/components/adminComponents/actionButtons";
import AddFields from "@/components/adminComponents/addFields"; // Ensure correct import
import Logo from "@/components/Main/logo";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const getTicketById = async (id: string) => {

    try {
        const res = await fetch(`http://localhost:3000/api/myndigheter/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
}
let updateData = {};

const AdminMyndighet = async ({ params }: any) => {
    const EDITMODE = params.id === "new" ? false : true;

    if (EDITMODE) { //fetch data if editmode
        const decodedId = decodeURIComponent(params.id);
        updateData = await getTicketById(decodedId);
    } else {
        updateData = {
            myndighet:{
                _id: "new",
            }
        };
    }

    return (
        <div className="mb-40">
        <Logo />
        <Link href="/admin" className=" m-10">
          <Button variant="outline" className="bg-black text-white ml-5">Tillbaka</Button>
        </Link>
        <AddFields myndighet={updateData} />
      </div>
    );
}

export default AdminMyndighet;