import { Requets, Response } from "express";
import { petsService } from "../services/petsService";

const service = new petsService();

export const listPets = async (req: Request, res: Response) => {
  res.status(200).json(await service.fetchPets());
};

export const createPet = async (req: Request, res: Response) => {};

export const getPetById = async (req: Request, res: Response) => {};

export const updatePet = async (req: Request, res: Response) => {};

export const deletePet = async (req: Request, res: Response) => {};
