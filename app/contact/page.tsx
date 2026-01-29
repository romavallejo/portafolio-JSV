import ContactForm from "@/components/ContactForm";

export default function contact() {
    return (
        <>
        <div className="flex flex-col p-12 min-h-[calc(100vh-86px)]">
            <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-[2rem] text-center ">Contacto</h1>
            <div>
                <ContactForm />
            </div>
        </div>
        </>
    );
}