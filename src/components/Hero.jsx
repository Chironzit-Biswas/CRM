import image from '../assets/image.png'
export const Hero = () => {
    return (
        <>
            <div>
                <section
                    className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
                    <h5 className="text-4xl md:text-6xl max-w-[850px] text-center mx-auto pt-[80px] font-bold ">
                        Take Control of Your CRM Strategy Today!
                    </h5>

                   <div className={'flex flex-col mx-5 md:text-center md:justify-center items-center md:w-[600px] mt-[30px] md:mx-auto'}>
                       <p >Is Your CRM
                           Holding You Back? Discover What’s Working and What’s Not with Our Free CRM Self-Assessment
                           Tool!</p>
                   </div>

                    <div className="mx-auto w-full flex flex-col items-center justify-center gap-3 mt-4">
                        <button
                            className="bg-[#D93E36] hover:bg-black text-white px-6 py-3 rounded-[8px] font-medium transition">
                            Start Your CRM Self-Assessment Now!
                        </button>
                        <div className={'mt-[60px]'}>
                            <img src={image} alt=""/>
                        </div>

                    </div>


                </section>

            </div>
        </>
    )
}