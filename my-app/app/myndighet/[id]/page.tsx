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

  // Assuming data is an object with a name property
  return (
    <h1>{data.name}</h1>
  );
}
