import ClientNProjects from "./components/client-and-projects";
import Feedback from "./components/feedback";
import Intro from "./components/intro";
import Services from "./components/services";
import Steps from "./components/steps";

const HomePage = () => {
    return ( 
        <div className="flex flex-col w-full min-h-screen  justify-between bg-gradient-to-br from-blue-600 to-slate-950 text-white items-center pt-24">
            
           <Intro/> 
           <Services/>
           <Steps/>
           <ClientNProjects/>
           <Feedback/>
        </div>
     );
}
 
export default HomePage;