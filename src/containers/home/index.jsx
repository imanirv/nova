import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return(
        <div className="w-full h-16 bg-[#0C206C]  md:px-36 flex items-center justify-between">
            <div className="flex items-center">
                <div className="brand font-lato text-white text-4xl uppercase font-bold">nov </div>
                <Image src="/icon-512x512.png" width={30} height={30} alt="icon"/> 
            </div>
            <div className="">
                <Link href="/"><a className=" font-bold text-white ml-24">Home</a></Link>
                <Link href="/"><a className=" font-bold text-white ml-24">Article</a></Link>
                <Link href="/"><button className="bg-[#E22929] py-2 px-5 rounded-full font-bold text-white ml-24">Sign Up</button></Link>
            </div>
        </div>
    )
}

const Hero = () => {
    return(
        <>
            <div className="w-full bg-gradient-to-r from-[#121E86] to-[#4659FFA6] md:px-36  ">
                <div className="flex items-center justify-between pt-28">
                    <div className="">
                        <h1 className="text-6xl w-[400px] font-bold text-white mb-7">Nova Content Management System</h1>
                        <p className="w-[400px] text-[#E1CDA5]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    </div>
                    <Image src="/illustrations/illustration-1.png" width={533} height={451} alt="" />
                </div>
                <div className="pb-14">
                    <h1 className="text-white text-3xl mb-6 font-bold">How its Work</h1>
                    <div className="flex justify-between">
                        <div className="h-full w-80 text-white">
                            <h5 className="mb-3 text-xl font-bold">Create Account</h5>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                        <div className="h-full w-80 text-white">
                            <h5 className="mb-3 text-xl font-bold">Make a content</h5>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                        <div className="h-full w-80 text-white">
                            <h5 className="mb-3 text-xl font-bold">Publish it</h5>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                    </div>
                </div>
                
            </div>
          
        </>
    )
}

const HomeContainer = () => {
    return(
        <>
            <Navbar />
            <Hero />
        </>
    )
}

export default HomeContainer