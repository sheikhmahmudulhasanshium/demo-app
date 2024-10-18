import Image from 'next/image';
import logo from '/app/public/icons8-logo-50.png'
import Phone from '/app/public/icons8-phone-48.png'
import Mail from '/app/public/icons8-mail-50.png'
import Facebook from '/app/public/icons8-facebook-30.png'
import X from '/app/public/icons8-twitter-50.png'
import Ig from '/app/public/icons8-ig-50.png'

const Footer = () => {
    return (  
        <div className="flex flex-col justify-between  mt-12  w-full ">
            <div className="bg-slate-500 m-4 rounded-xl p-4 gap-8 flex flex-wrap  justify-between">
                <div className="flex flex-col justify-start gap-2 lg:w-3/12">
                    <div className="flex gap-1 items-center">
                        <Image src={logo} alt='logo' width='30' height='30'/>
                        <p className="font-bold font-FigTree text-2xl">Santolocorl</p>
                    </div>
                    <p className="text-sm text-justify">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual</p>

                </div>

                <div className='flex flex-col  gap-4 w-6/12'>
                    <p className='text-xl font-bold font-FigTree pl-2'>CONTACT & INFORMATION</p>
                    <div className='grid w-full grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-8 gap-4 sm:gap-4 md:gap-6'>
                        <div className='flex w-full items-center gap-2 pl-2 '>
                            <div className='  bg-white  rounded-lg '><Image src={Mail} alt='logo' width='30' height='30' className='m-1'/></div>
                            <div className='w-8/12 flex flex-col justify-start'>
                                <p className='font-light'>Email Address</p>
                                <p className='font-bold'>santolocorl@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex w-full items-center gap-2 pl-2 '>
                            <div className='  bg-white  rounded-lg '><Image src={Phone} alt='logo' width='30' height='30' className='m-1'/></div>
                            <div className='w-8/12 flex flex-col justify-start'>
                                <p className='font-light'>Phone Number</p>
                                <p className='font-bold'>1-929-269-1487</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex  border-b-2 w-full mx-6'/>
                <div className='flex w-full lg:items-start flex-wrap justify-between sm:justify-center gap-2 lg:w-8/12'>
                    <div className='flex gap-4 justify-between sm:justify-center items-center sm:w-full lg:justify-end'>
                        <p>FOLLOW ME ON</p>
                        <button className=''>
                            <Image src={Facebook} alt='Facebook' width='30' height='30'/>
                        </button>
                        <button className=''>
                            <Image src={X} alt='X' width='30' height='30'/>
                        </button>
                        <button className=''>
                            <Image src={Ig} alt='Instagram' width='30' height='30'/>
                        </button>
                    </div>
                    <p className='flex gap-4 justify-between sm:justify-center items-center sm:w-full text-sm lg:text-base lg:justify-start'>
                        &copy; SANTOLCORL. ALL RIGHT RESERVED
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;