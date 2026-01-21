import { eventSummaries } from '../data/eventsSummary'
import EventCard from './EventCard';

interface EventsGridProps {
    highlightPage?: boolean;
    highlights?: number[]; 
}

const EventsGrid = ({ highlightPage = false, highlights = [0,1,2,3] }: EventsGridProps) => {
    return (
        <div className="flex flex-col gap-5 p-12">

            <h1 className="text-2xl font-bold">Eventos</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {highlightPage ? highlights.map(index =>
                    <EventCard 
                        key={index} 
                        id={index} 
                        name={eventSummaries[index].name} 
                        image={eventSummaries[index].image}
                    />
                ) :  eventSummaries.map(event => 
                    <EventCard 
                        key={event.id} 
                        id={event.id} 
                        name={event.name} 
                        image={event.image}
                    />
                )}
            </div>

        </div>
    );
};

export default EventsGrid;