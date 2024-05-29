import AddFieldsComp from "@/components/adminComponents/addFiledsComp";
import Logo from "@/components/Main/logo";
import AdminMenu from "@/components/adminComponents/adminMenu";

const getTicketById = async (id: string) => {

    try {
        const res = await fetch(`http://localhost:3000/api/companies/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}
let updateData = {};

const AdminCompany = async ({ params }: any) => {
    const EDITMODE = params.id === "new" ? false : true;

    if (EDITMODE) { //fetch data if editmode
        const decodedId = decodeURIComponent(params.id);
        updateData = await getTicketById(decodedId);
    } else {
        updateData = {
            company: {
                _id: "new",
            }
        };
    }
    
    return (
        <div>
            <Logo />
            <AdminMenu />
            <div className="mb-40 mt-20">
                <AddFieldsComp company={updateData} />
            </div>
        </div>
    );
}

export default AdminCompany;