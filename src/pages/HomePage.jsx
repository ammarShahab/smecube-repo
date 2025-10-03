import { useLoaderData } from "react-router";
import Banner from "../Component/shared/Banner";
import Services from "../Component/shared/Services";

const Home = () => {
  const services = useLoaderData();
  console.log("services type:", typeof services);
  console.log("is array?", Array.isArray(services));
  console.log(services);

  return (
    <>
      <Banner />
      <Services services={services} />
    </>
  );
};

export default Home;
