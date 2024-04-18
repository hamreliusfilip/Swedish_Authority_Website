import AddFields from "@/components/adminComponents/addFields"; // Ensure correct import

const getTicketById = async (id: string) => {

    try {
        console.log(id);
        const res = await fetch(`http://localhost:3000/api/myndigheter/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return error
    }
    
}

const AdminMyndighet = async ({ params }: any) => {
    const EDITMODE = params.name === "new" ? false : true;

    let updateData = {}; // Declare updateData variable

    if (EDITMODE) {
        updateData = await getTicketById(params.id);
    } else {
        updateData = {
            id: "new"
        };
    }

    return (
        <AddFields myndighet={updateData} /> // Correct usage of AddFields component
    );
}

export default AdminMyndighet;