import Image from "next/image";
import Icon1 from "/app/public/icons8-dollar-sign-50.png"
import Icon2 from "/app/public/icons8-like-64.png"
import Icon3 from "/app/public/icons8-protect-50.png"
import Icon4 from "/app/public/icons8-thunder-50.png"

const Intro = () => {
    return (  
        <div className="flex flex-wrap flex-col w-full justify-center items-center top-64 text-justify  font-FigTree gap-2">
            <p className="text-CustomBlue  text-2xl font-thin">Tech meets Marketing</p>
            <div className="font-bold text-4xl text-center flex flex-wrap gap-2 w-8/12 justify-center"><p className="text-CustomBlue">Bart Warrot </p><p >Professional Service</p></div>
            <p className="font-Montserrat text-center text-base font-thin flex-wrap gap-2 w-7/12 justify-center">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual</p>
            <div className="flex justify-center items-center mt-4 mb-8">
                <button className=" bg-CustomBlue p-2 text-white text-xl flex rounded-xl">
                    Book an Consultancy
                </button>
            </div>
            <div className=" w-8/12  py-2 gap-2   flex font-Montserrat text-center items-start">
                <div className="flex flex-col justify-center items-center  text-sm font-thin w-3/12">
                    <Image src={Icon1} alt="dollar" width="48" height="48"/>
                    <p>Up to 30% more
                    conversions</p>
                </div>
                <div className="flex flex-col justify-center items-center  text-sm font-thin w-3/12">
                    <Image src={Icon2} alt="like" width="48" height="48"/>

                    <p>Competitive
                    Advantage</p>
                </div>
                <div className="flex flex-col justify-center items-center  text-sm font-thin w-3/12">
                    <Image src={Icon3} alt="sheild" width="48" height="48"/>

                    <p>GDRP 
                    Compliant</p>
                </div>
                <div className="flex flex-col justify-center items-center text-sm font-thin w-3/12">
                    <Image src={Icon4} alt="thunder" width="50" height="50"/>
                    <p>Faster website</p>
                </div>
            </div>
    </div> 
    );
}
 
export default Intro;