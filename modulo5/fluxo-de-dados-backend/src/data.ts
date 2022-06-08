import { v4 as generateId } from 'uuid';

type PRODUCT = {
    id: string,
    name: string,
    price: number
}

export const products:PRODUCT[] = [
    {
        id: '29079744-c080-459e-ae61-24fd17d93d1c',
        name: "tinta azul",
        price: 180.00
    },
    {
        id: '2fe4f4ec-2579-4a1e-8574-eb43a7a57954',
        name: "tinta verde",
        price: 175.00
    },
    {
        id: '90f4c78a-6d80-44a0-ae4a-4dc3bd167981',
        name: "tinta branca",
        price: 150.00
    },

]