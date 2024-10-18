const StepList = [
    {
        count: "1",
        activity: "Choose your package",
        details: "Lorem ipsum is placeholder text commonly used in the graphic."
    },
    {
        count: "2",
        activity: "Kickoff meeting",
        details: "Lorem ipsum is placeholder text commonly used in the graphic."
    },
    {
        count: "3",
        activity: "Implementation & Setup",
        details: "Lorem ipsum is placeholder text commonly used in the graphic."
    },
    {
        count: "4",
        activity: "Debrief",
        details: "Lorem ipsum is placeholder text commonly used in the graphic."
    },
];
const Steps = () => {
    return ( 
        <div className="flex flex-col w-full justify-between items-center gap-2 pt-8">
            <p className=" text-3xl text-center font-FigTree font-bold">How Do We Proceed</p>
            <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-1  justify-center items-center gap-4 mt-4 w-6/12 lg:w-full">
                {
                    StepList.map((step,index)=>(
                        <div key={index} className="flex flex-col justify-start gap-2 rounded-xl bg-slate-800 bg-opacity-50  p-4 h-[220px] w-[250px] ">
                            <div className=" rounded-full p-2 font-semibold h-[44px] w-[44px]  bg-CustomBlue text-center">
                                <p>{step.count}</p>
                            </div>
                            <p className=" font-bold">
                                {step.activity}
                            </p>
                            <p>{step.details}</p>
                        </div>
                    ))
                }
            </div>

        </div>
     );
}
 
export default Steps;