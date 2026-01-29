import Carousel from "@/components/Carousel";
import Curriculum from "@/components/Curriculum";
import { DualTypewriter } from "@/components/DualTypewriter";
import { Typewriter } from "@/components/Typewriter";

export default function about() {
    return (
        <>

        <div className="flex justify-evenly items-center gap-8 p-14 bg-background-alt min-h-[calc(100vh-86px)]">
            <div className="flex justify-center flex-1 bg-red-light p-6 m-6">
                <Carousel 
                    images={['/images/profilePicture.jpeg']} 
                    changable={false}
                    aspectRatio="aspect-square"
                />
            </div>

            <div className="flex flex-col gap-2 flex-2">
                <DualTypewriter 
                    top="Sobre mi" 
                    bottom="Jimena Santillana Vallejo"
                    colorTop={false}
                    color="text-red-light"
                    className="text-left uppercase font-bold text-4xl lg:text-6xl" 
                />
                <Typewriter 
                    className="text-left text-lg"
                    speed={0.003}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas atque, placeat, a architecto officiis dignissimos aspernatur sint ab id consequuntur odio quia consectetur at, neque quibusdam non explicabo cupiditate aliquam assumenda minima voluptatibus. Sit, dicta illum amet nobis maiores est eum ipsum iusto doloribus tempore voluptates aperiam, in ducimus sapiente." 
                />
            </div>
        </div>

        {/* flex flex-col gap-5 p-12 */}
        <div className="flex flex-col gap-5 p-12">
            <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-[2rem] text-center ">Perfil Profesional</h1>
            <div className="fborder-2 border-merge shadow-md p-6">
                <Curriculum />
            </div>
        </div>
        
        </>
    );
}