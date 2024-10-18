import Image from "next/image";

const Feedback = () => {
    return ( 
        <div className="flex flex-col lg:flex-row justify-center w-full mt-12 p-8 bg-gradient-to-tl from-CustomBlue to-slate-950">
            <div className="flex flex-col justify-start gap-2 lg:w-[400px] lg:h-[160px] w-full">
                <p className="text-3xl font-FigTree font-bold">Let&apos;s Talk</p>
                <p className="text-base">
                    Do you have some questions? Want to grab a coffee? Plan a call with the button below.
                </p>
                <button className="bg-CustomBlue p-2 text-white text-xl rounded-xl w-6/12">
                    Book a Consultancy
                </button>
            </div>
            <div className="flex justify-start lg:justify-center lg:w-full">
                <Image 
                    src={`https://s3-alpha-sig.figma.com/img/441b/2854/323bc5ddbd649a791e5cf679e41be12c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bnyIcsa6N0zYONkg0gyXACh0Y25M4eAMWVrEYCZTMZjhtx3Dp6CYYq~0MCAsAGIVAR9xyY8AqnIXRAoqtUYdf4wKLIRLAAtrEen8TDAsa2Bs3jwmB3lkrD9maM9YOJh5aCepS6eX9UP-hvH8bdU0AMjXN7MVTsMy9MH1nkBc7SYXf9WVhQ4sFOu08AMeN46dCHUHVzBGazGgwNnRmkrTdd~x7hPokkffYZcuLqVa1BLIovMNje5D3XHY5auZHvc8d56wLWMHbG7US5jpgZYU6KjP0xAFChKN2UeDQdS77f8BPt8cfGwRrS7iUBIcWv3NBU-Qu6m2FeNNrZpygL3SyQ__`} 
                    alt="" 
                    height="408" 
                    width="500" 
                />
            </div>
        </div>
    );
};

export default Feedback;
