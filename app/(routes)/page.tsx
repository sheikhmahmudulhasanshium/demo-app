import ClientNProjects from "./components/client-and-projects";
import Intro from "./components/intro";
import Services from "./components/services";
import Steps from "./components/steps";

const HomePage = () => {
    return ( 
        <div className="flex flex-col w-full min-h-screen  justify-between bg-gradient-to-br from-blue-600 to-slate-950 text-white items-center py-24">
            
           <Intro/> 
           <Services/>
           <Steps/>
           <ClientNProjects/>
        </div>
     );
}
 
export default HomePage;