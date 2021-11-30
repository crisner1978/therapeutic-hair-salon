import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative h-[650px] md:h-[700px] xl:h-[750px] -top-44 right-0">
            <Image src="/images/hero1.jpg" layout="fill" objectFit="cover" objectPosition="top" />
            <Image src="/images/cellGradientBackground@2x.png" layout="fill" objectFit="cover" objectPosition="top" />
            <div className="absolute top-1/2 w-full text-center text-white">
                <h1 className="text-5xl md:text-[85px]">THERAPEUTIC</h1>
                <h2 className="text-xl md:text-3xl">HAIR SALON & SCALP CLINIC</h2>
            </div>
        </div>
    )
}

export default Banner
