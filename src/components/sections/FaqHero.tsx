export const FaqHero = () => {
    const ctas = [
        {
            icon: "/assets/faq-icons/whatsapp.png",
            text: 'Chat with Us'
        },
        {
            icon: "/assets/faq-icons/email.svg",
            text: 'Email Us'
        },
        {
            icon: "/assets/faq-icons/phone.svg",
            text: 'Call Us'
        },
        
    ]
    return(
        <section className="w-full relative h-[550px] py-[100px] px-10 flex flex-col lg:flex-row justify-between items-center gap-10">
            <img className="w-screen h-full absolute z-[1] top-0 left-0 object-cover" src="/assets/faq-banner.jpg" alt="Background" />
            <div className="relative z-[3] w-full lg:w-[50%] flex flex-col justify-start items-start gap-[50px]">
                <h1 className="text-white font-semibold font-inter leading-[130%] text-[2rem] lg:text-[3.75rem]">
                    We're Here to Help – Anytime, Anywhere
                </h1>

                <p className="text-white text-[1.25rem] leading-[140%] font-medium font-inter">
                    From plan selection to certification verification and lifetime career support — this is your  one-stop hub for answers, guidance, and assistance.
                </p>

                <div className="w-full flex justify-start items-center gap-10">
                    {
                        ctas.map((item, index) => (
                            <div key={index} className="flex justify-center items-center gap-3">
                                <img src={item.icon} alt={item.text} />
                                <p className="text-white font-medium leading-[100%] text-[1.25rem] font-inter">
                                    {item.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full relative z-[2] lg:w-[50%] lg:h-full flex justify-end items-end">
                <div className="w-full bg-[#000]/[12%] flex justify-start items-center gap-2.5 p-2.5">
                    <p className="leading-[140%] text-[#FE7743] font-medium text-[1.5rem] font-inter">Join Now :</p>
                    <p className="text-white font-semibold leading-[100%] text-[1.25rem]">SPP Int</p>
                    <span className="text-white">|</span>
                    <p className="text-white font-semibold leading-[100%] text-[1.25rem]">SPP Freelance</p>
                    <span className="text-white">|</span>
                    <p className="text-white font-semibold leading-[100%] text-[1.25rem]">SPP Student</p>
                </div>
            </div>
        </section>
    )
}