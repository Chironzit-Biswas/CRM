export const Discount = () => {
    return (
        <>
            <div>
                <div
                    className=" bg-gradient-to-b from-[#4C0083] md:grid grid-cols-2 md:px-[130px] justify-center items-center to-[#180047] p-8 text-white">
                    <div className={'col-span-1'}>
                        <h1 className={'text-white font-bold text-3xl w-[70%] mb-3'}>Your journey from CRM to Revenue Engine starts here!</h1>
                        <button
                            className="bg-[#D93E36] hover:bg-black text-white px-6 py-3 rounded-[8px] font-medium transition">
                            Know Your Score!
                        </button>
                    </div>
                    <div className={'col-span-1 mt-4'}>
                        <div>
                            <p>Your journey from CRM to Revenue Engine starts here!</p> <br/>
                            <p>
                                You'll answer a series of questions on your organization's current CRM and business
                                processes. From the results of the assessment, you will be guided with valuable content
                                and next steps towards meaningful transformation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}