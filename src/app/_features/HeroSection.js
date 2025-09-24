import HeroCarousel from "../_components/HeroCarousel"

const HeroSection = () => {
    return (
        <>
        <div className="bg-black h-[600px] flex items-center" >
            <HeroCarousel
            movieTitle="Wicked"
            rating="6.9/10"
            desc="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "/>
            <div className="flex absolute justify-between px-2 w-full">
                <button className="h-[54px] w-[54px]  flex items-center justify-center text-black bg-white rounded-full">
                        &#10094;
                </button>
                <button className="h-[54px] w-[54px] flex items-center justify-center text-black bg-white rounded-full">
                        &#10095;
                </button>
            </div>
        </div>
        

        
        </>
    )
}

export default HeroSection