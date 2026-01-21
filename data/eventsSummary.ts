export interface EventSummary {
    id: number;
    name: string;
    image: string;
};

//THE EventSumarry OBJECTS IN THE ARRAY SHOULD BE GIVEN ID FROM 1 TO ARRAY.LENGHT
export const eventSummaries: EventSummary[] = [
    {id: 0, name:"Pop Up Store Perisur", image: "/images/0/0_1.jpg"},
    {id: 1, name:"FW24 Press Day", image: "/images/1/1_0.jpg"},
    {id: 2, name:"Lanzamiento Signorina", image: "/images/2/2_0.jpg"},
    {id: 3, name:"Cinema Ballerina", image: "/images/3/3_0.jpg"},
    {id: 4, name:"Out Of Store Monterrey", image: ""},
    {id: 5, name:"Takeover St.Regis Punta Mita", image: ""},
    {id: 6, name:"Pop Up St.Regis Punta Mita", image: ""},
    {id: 7, name:"Christmas Concert", image: ""},
    {id: 8, name:"SS25 Press Day", image: ""},
    {id: 9, name:"Press Day Dinner Experience", image: ""},
    {id: 10, name:"Takeover Palacio De hierro", image: ""},
    {id: 11, name:"Tramezza Experience", image: ""},
    {id: 12, name:"Tramezza Dinner Experience", image: ""}
];