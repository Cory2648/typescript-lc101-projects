import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems = [];
    astronauts = [];
    constructor(name: string, totalCapacityKg: number) {
       this.name = name;
       this.totalCapacityKg = totalCapacityKg;
 }
 sumMass( items: Payload[] ): number {
   let sum = 0;
   for (let i = 0; i < items.length; i ++){
       sum += items[i].massKg;
   }
   return sum;
 }
 currentMassKg(): number {
   return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
 }
 canAdd(item: Payload): boolean {
   if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
       return true;
   }
 }
 addCargo(cargo: Cargo): boolean {
   if (this.canAdd(cargo) === true) {
       this.cargoItems.push(cargo)
       return true;
   } else {
       return false;
   }
 }
 addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut) === true) {
        this.astronauts.push(astronaut)
        return true;
    } else {
        return false;
    }
 }
 }