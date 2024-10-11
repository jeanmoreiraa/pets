import { Router } from "express";
import {
  createPet,
  deletePetById,
  getPetById,
  listPets,
  updatePetById,
} from "../controllers/PetsController";

const PetsRouter = Router();
.get("/pets", listPets);
.post("/pets", createPet);
.delete("/pets/:petId", deletePetById);
.put("/pets/:petId", updatePetById);
.get("/pets/:petId(\\d+)", getPetById);

export default PetsRouter;
