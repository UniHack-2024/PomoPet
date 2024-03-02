import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import asyncify from 'express-asyncify';
import { PrismaClient } from "@prisma/client";

const app: Express = asyncify(express());
const port = process.env.PORT || 3000;
dotenv.config();
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

app.use(express.json());
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/test", async (req: Request, res: Response) => {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
