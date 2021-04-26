import { Payload } from './Payload';

export class Astronaut {
    name: string;
    massKg: number;
    constructor(massKg: number, name: string) {
       this.name = name;
       this.massKg = massKg;
    }
};