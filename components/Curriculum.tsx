"use client"
import { Typewriter } from "./Typewriter";
import { motion } from "framer-motion";

const Curriculum = () => {
    return (
        <>
        <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold uppercase tracking-[10px] sm:tracking-[1rem] md:tracking-[2rem] text-center"
        >
            Perfil Profesional
        </motion.h1>

        <div className="fborder-2 border-merge shadow-md p-6">

            {/************ EXPERIENCIA LABORAL SECTION ************/}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-4 text-lg"
            >
                {/* NAME OF SECTION */}
                <div className="font-bold tracking-widest md:basis-56 md:flex-none">
                    Experiencia Laboral
                </div>
                {/* PARTS OF SECTION */}
                <div className="flex-5">
                    {/* SUBSECTION */}
                    <div>
                        {/* NAME AND YEAR */}
                        <div className="flex font-bold">
                            <div>FERRAGAMO</div>
                            <div className="ml-auto">2024-2025</div>
                        </div>
                        {/* TEXT ABOTU IT */}
                        <div className="p-4">
                            <div className="text-foreground-alt">
                                <span className="font-medium italic">Brand Events Intern</span>: Planeación estratégica y ejecución de eventos de marca.
                                Coordinación de proveedores, logística, presupuesto y experiencias
                                alineadas al posicionamiento de Ferragamo.
                            </div>
                            <div className="text-foreground-alt">
                                <span className="font-medium italic">Visual Merchandising Intern</span>: Implementación de lineamientos globales en punto de venta.
                                Coordinación de montajes, manejo de proveedores y adaptación
                                visual según estrategia comercial y campañas locales.
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <hr className="border-foreground my-4"/>

            {/************ EDUCACION SECTION ************/}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-4 text-lg"
            >
                {/* NAME OF SECTION */}
                <div className="font-bold tracking-widest md:basis-56 md:flex-none">
                    Educación
                </div>
                {/* PARTS OF SECTION */}
                <div className="flex-5">
                    {/* SUBSECTION */}
                    <div>
                        {/* NAME AND YEAR */}
                        <div className="flex font-bold">
                            <div>Administración y Mercadotecnia</div>
                            <div className="ml-auto">2023-2026</div>
                        </div>
                        {/* TEXT ABOTU IT */}
                        <div className="pl-4">
                            <div>
                                <span className="italic text-foreground-alt">Universidad Panamericana</span>
                            </div>
                        </div>
                    </div>
                    {/* SUBSECTION */}
                    <div>
                        {/* NAME AND YEAR */}
                        <div className="flex font-bold">
                            <div>Administración y Negocios Internacionales</div>
                            <div className="ml-auto">2023-2025</div>
                        </div>
                        {/* TEXT ABOTU IT */}
                        <div className="pl-4">
                            <div>
                                <span className="italic text-foreground-alt">Universidad Panamericana</span>
                            </div>
                        </div>
                    </div>
                    {/* SUBSECTION */}
                    <div>
                        {/* NAME AND YEAR */}
                        <div className="flex font-bold">
                            <div>Asistente de Negocios Bilingue</div>
                            <div className="ml-auto">2017-2021</div>
                        </div>
                        {/* TEXT ABOTU IT */}
                        <div className="pl-4">
                            <div>
                                <span className="italic text-foreground-alt">Colegio Guadalupe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <hr className="border-foreground my-4"/>

            {/************ CERTIFICACIONES SECTION ************/}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-4 text-lg"
            >
                {/* NAME OF SECTION */}
                <div className="font-bold tracking-widest md:basis-56 md:flex-none">
                    Certificaciones
                </div>
                {/* PARTS OF SECTION */}
                <div className="flex-5">
                    {/* SUBSECTION */}
                    <div>
                        {/* NAME AND YEAR */}
                        <div className="flex font-bold">
                            <div>Seminario de Marketing Digital y Analytics</div>
                            <div className="ml-auto">2025</div>
                        </div>
                        {/* TEXT ABOTU IT */}
                        <div className="pl-4">
                            <div>
                                <span className="italic text-foreground-alt">Universidad Panamericana</span>
                            </div>
                        </div>
                    </div>
                    {/* SUBSECTION */}
                    <div>
                        {/* NAME AND YEAR */}
                        <div className="flex font-bold">
                            <div>Social Media Marketing</div>
                            <div className="ml-auto">2022</div>
                        </div>
                        {/* TEXT ABOTU IT */}
                        <div className="pl-4">
                            <div>
                                <span className="italic text-foreground-alt">HubSpot Academy</span>
                            </div>
                        </div>
                    </div>
                    {/* SUBSECTION */}
                    <div>
                        {/* NAME AND YEAR */}
                        <div className="flex font-bold">
                            <div>Microsoft Office Excel</div>
                            <div className="ml-auto">2021</div>
                        </div>
                        {/* TEXT ABOTU IT */}
                        <div className="pl-4">
                            <div>
                                <span className="italic text-foreground-alt">Microsoft</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <hr className="border-foreground my-4"/>

            {/************ RETOS SECTION ************/}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-4 text-lg"
            >
                {/* NAME OF SECTION */}
                <div className="font-bold tracking-widest md:basis-56 md:flex-none">
                    Retos
                </div>
                {/* PARTS OF SECTION */}
                <div className="flex-5">
                    {/* SUBSECTION */}
                    <div>
                        {/* NAME AND YEAR */}
                        <div className="flex font-bold">
                            <div>Global Collaboration Project</div>
                            <div className="ml-auto">2022</div>
                        </div>
                        {/* TEXT ABOTU IT */}
                        <div className="pl-4">
                            <div>
                                <span className="italic text-foreground-alt">X-Culture</span>
                            </div>
                        </div>
                    </div>
                    {/* SUBSECTION */}
                    <div>
                        {/* NAME AND YEAR */}
                        <div className="flex font-bold">
                            <div>Challenge UP - 3° lugar</div>
                            <div className="ml-auto">2020</div>
                        </div>
                        {/* TEXT ABOTU IT */}
                        <div className="pl-4">
                            <div>
                                <span className="italic text-foreground-alt">Caso Harvard Business Review: Amazon Web Services</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <hr className="border-foreground my-4"/>

            {/************ HABILIDADES SECTION ************/}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-4 text-lg"
            >
                {/* NAME OF SECTION */}
                <div className="font-bold tracking-widest md:basis-56 md:flex-none">
                    Habilidades
                </div>
                {/* PARTS OF SECTION */}
                <div className="flex flex-col sm:flex-row flex-5 font-medium text-foreground-alt">
                    <div className="flex-1">
                        ● Compromiso<br/>
                        ● Trabajo en equipo<br/>
                        ● traducción<br/>
                        ● Proactividad<br/>
                        ● Persistencia<br/>
                        ● Manejo de tiempo<br/>
                        ● Adaptabilidad
                    </div>
                    <div className="flex-1">
                        ● Trabajo bajo presión<br/>
                        ● Mecanografía<br/>
                        ● Comunicación oral y escrita<br/>
                        ● Automanejo<br/>
                        ● Responsabilidad<br/>
                        ● Resolución de problemas
                    </div>
                </div>
            </motion.div>

            <hr className="border-foreground my-4"/>

            {/************ IDIOMAS SECTION ************/}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-4 text-lg"
            >
                {/* NAME OF SECTION */}
                <div className="font-bold tracking-widest md:basis-56 md:flex-none">
                    Idiomas
                </div>
                {/* PARTS OF SECTION */}
                <div className="flex-5">
                    {/* SUBSECTION */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-6">
    
                        {/* LANGUAGE INFO */}
                        <div className="w-40 shrink-0">
                            <div className="font-bold">Inglés</div>
                            <div className="pl-4 italic text-foreground-alt">CAE</div>
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="flex-1 w-full h-8 relative border-merge border-2 rounded-xl overflow-hidden">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground tracking-widest text-xl z-10">
                                100%
                            </div>
                            <div className="bg-merge h-7 sm:h-full w-full rounded-lg"/>
                        </div>

                    </div>
                    {/* SUBSECTION */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-6">
    
                        {/* LANGUAGE INFO */}
                        <div className="w-40 shrink-0">
                            <div className="font-bold">Mandarin</div>
                            <div className="pl-4 italic text-foreground-alt">HSK2</div>
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="flex-1 w-full h-8 relative border-merge border-2 rounded-xl overflow-hidden">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground tracking-widest text-xl z-10">
                                40%
                            </div>
                            <div className="bg-merge h-7 sm:h-full w-[40%] rounded-lg"/>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
        </>
    );
};
export default Curriculum;