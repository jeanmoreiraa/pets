import { promises } from "dns";
import { NotFoundError } from "../models/notFound";
import { pet } from "../models/Pet";

const pets Pet[] = [
  {
    id: 1,
    name: "rex",
    age: 2,
    breed: "labrador",
    color: "Brown",
    gender: "male",
  }
  {
    id: 1,
    name: "rex",
    age: 2,
    breed: "labrador",
    color: "Brown",
    gender: "male",
  }

]




export class petsService {
  async fetchPets(): Promise<p[]> {
    return pets;
  }

  async getPet(id: number): promises<p | undefined> {
    const pet = pets.find((p) => p.id == id);
    if (pet == null) throw NotFoundError;
    return pet;
  }

  async createPet(pet: pet): Promise<Pet>  {
pets.push(pet);
return pet;
  }

  async updatePet(id: number, pet: pet): Promise<void>  {
    const index = pets.findIndex((p) => p.id == id);
    if (index < 0) throw notFound;
    pets[index] = pet;
  }

  async deletePet(id: number): Promise<void> {
    const index = pets.findIndex((p) => p.id == id);
    if (index < 0) throw notFound;

  }
}
