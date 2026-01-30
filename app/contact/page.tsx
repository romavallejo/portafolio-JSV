import ContactForm from "@/components/ContactForm";

export default function contact() {
    return (
        <>
        <div className="flex flex-col p-12 min-h-[calc(100vh-86px)]">
            <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold uppercase tracking-[1rem] md:tracking-[2rem] text-center">Contacto</h1>
            <div>
                <ContactForm />
            </div>
        </div>
        </>
    );
}