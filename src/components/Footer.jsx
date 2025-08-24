import logo from '../assets/CRM Shouldn’t suck website logo final 1.png'

export const Footer = () => {
    return (
        <>
            <div>
                <footer className="px-6 bg-black pt-8 md:px-16 lg:px-36 w-full text-gray-300">
                    <div
                        className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                        <div className="md:max-w-96">
                            <img alt="" className="h-11"
                                 src={logo}/>
                        </div>
                        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                            <div>
                                <h2 className="font-semibold mb-5"></h2>
                                <ul className="text-sm space-y-2">
                                    <li><a href="#">1-877-367-1877</a></li>
                                    <li><a href="#">example@gmail.com</a></li>
                                    <li><a href="#">Los Angels, California, USA</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-semibold mb-5">Follow on Social Media</h2>
                                <div className="text-sm space-y-2">
                                    <p>+1-234-567-890</p>
                                    <p>contact@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="pt-4 text-center text-sm pb-5">
                        Copyright {new Date().getFullYear()} © <a href="#">Chironzit Biswas</a>. All
                        Right Reserved.
                    </p>
                </footer>
            </div>
        </>
    )
}