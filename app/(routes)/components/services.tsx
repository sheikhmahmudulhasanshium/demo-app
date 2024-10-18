import Image from "next/image";

const ServiceList = [
    {
        icon: "/link1",
        iconTag: "Tech SEO",
        activity: ['SEO audits', 'Core Web Vitals optimizations', 'Structured data implementations', 'SEO migrations', 'Sitespeed audits']
    },
    {
        icon: "/link2",
        iconTag: "Tracking",
        activity: ['GTM audits', 'Server side tagging', 'GTM setup', 'GA4 setup']
    },
    {
        icon: "/link3",
        iconTag: "Dashboarding",
        activity: ['Marketing dashboards', 'Looker Studio setup'],
    },
];

const Services = () => {
    return ( 
        <div className="flex flex-col w-full justify-between items-center gap-2 pt-12">
            <p className=" text-3xl text-center font-FigTree font-bold">Services offered</p>
            <p className="w-6/12 text-center">We will help a client&apos;s problems to develop the products they
            have with high quality</p>
            <div className="flex flex-wrap w-8/12 justify-center items-center gap-4 mt-4">
                {ServiceList.map((service,index)=>(
                    <div key={index} className="w-[410px] h-[240px] bg-blue-950 bg-opacity-50 rounded-xl flex gap-2  items-center justify-between p-2">
                        <div className="flex flex-col items-center">
                            <Image alt={service.iconTag} src={service.icon} height='8' width='10'/>
                            <p className="font-bold">{service.iconTag}</p>

                        </div>
                        <div className="w-8/12 ">
                            {service.activity.map((activity,index)=>(
                                <div key={index} className="font-Poppins flex gap-2"><p>&gt;</p><p>{activity}</p></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Services;