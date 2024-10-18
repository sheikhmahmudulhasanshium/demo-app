import Image from "next/image";
import Profile from '/app/public/man.png'

const Feedback = () => {
    return ( 
        <div className="flex flex-col lg:flex-row justify-center w-full mt-12 p-8 bg-gradient-to-tl from-CustomBlue to-slate-950">
            <div className="flex flex-col justify-start gap-2 lg:w-[400px] lg:h-[160px] w-full">
                <p className="text-3xl font-FigTree font-bold">Let&apos;s Talk</p>
                <p className="text-base">
                    Do you have some questions? Want to grab a coffee? Plan a call with the button below.
                </p>
                <button className="bg-CustomBlue p-2 text-white text-xl rounded-xl w-6/12 lg:w-8/12">
                    Book a Consultancy
                </button>
            </div>
            <div className="flex justify-start lg:justify-center lg:w-full">
                <Image 
                    src={Profile} 
                    alt="" 
                    height="408" 
                    width="500" 
                />
            </div>
        </div>
    );
};

export default Feedback;
