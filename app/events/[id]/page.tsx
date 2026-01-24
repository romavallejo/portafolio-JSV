import { div } from "motion/react-client";

export default async function eventInfo({params}: {params: Promise<{ id: string }>}) {
    const { id } = await params;
        return(
            <div className="">
                {id}
            </div>
        );
}