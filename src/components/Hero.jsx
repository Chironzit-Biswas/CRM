export const Hero = () => {
    return (
        <>
            <div>
                <section
                    className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm pb-44">
                    <h5 className="text-4xl md:text-6xl max-w-[850px] text-center mx-auto pt-[80px] font-bold ">
                        Take Control of Your CRM Strategy Today!
                    </h5>

                    <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">Is Your CRM Holding You Back? Discover What’s Working and What’s Not with <br/> Our Free CRM Self-Assessment Tool!</p>

                    <div className="mx-auto w-full flex items-center justify-center gap-3 mt-4">
                        <button
                            className="bg-[#D93E36] hover:bg-black text-white px-6 py-3 rounded-[8px] font-medium transition">
                            Start Your CRM Self-Assessment Now!
                        </button>
                      
                    </div>
                </section>
                
            </div>
        </>
    )
}