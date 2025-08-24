import frame from '../assets/Frame.png'
export const Success = () => {
    return (
        <>
            <div>
                 <div className={'flex flex-col justify-center items-center mt-20 mx-5'}>
                     <h1 className={'text-3xl font-bold'}>The Six CRM Success Components</h1>
                     <p className={'mt-3 md:w-[700px] text-center'}>To make your CRM work for your business, it must excel in six key areas. These components provide a comprehensive framework for evaluating and improving how your CRM supports your goals and operations.</p>
                     <img src={frame} className={'my-8'} alt=""/>
                 </div>
            </div>
        </>
    )
}