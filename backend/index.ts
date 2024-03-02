import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import asyncify from 'express-asyncify';
import { PrismaClient } from "@prisma/client";

const app: Express = asyncify(express());
const port = 3000;
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

app.post("/register", async (req: Request, res: Response) => {
  const data = req.body;

  if (!data.username || !data.password) {
    console.log("invalid body");
    return res.status(400).json({});
  }

  // username must be unique
  const userExists = await prisma.user.findFirst({
    where: {
      username: data.username
    }
  });

  if (userExists) {
    console.log(data, userExists);
    return res.status(400).json({});
  }

  const id = await prisma.user.create({
    data: {
      username: data.username,
      password: data.password,
      pomo_cycles: 0
    }
  })

  // return their uuid for further identification
  return res.json({ id });
})

app.post("/login", async (req: Request, res: Response) => {
  const data = req.body;

  if (!data.username || !data.password) {
    console.log("invalid body");
    return res.status(400).json({});
  }

  const userExists = await prisma.user.findFirst({
    where: {
      username: data.username
    }
  });

  if (!userExists) {
    return res.status(400).json({});
  }

  if (userExists.password == data.password) {
    return res.json({ id: userExists.id });
  } else {
    return res.status(400).json({});
  }
})

// expects { id: "" }
app.put("/increment_pomo_cycles", async (req: Request, res: Response) => {
  const data = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id: data.id
    }
  }); 

  if (!user) {
    return res.status(400).json({});
  }

  await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      id: user.id,
      username: user.username,
      password: user.password,
      pomo_cycles: user.pomo_cycles + 1
    }
  })
  
  return res.json({});
})

app.get("/leaderboard", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    orderBy: {
      pomo_cycles: 'desc',
    },
    take: 5,
  });

  return res.json({
    leaderboard: users,
  });
});

app.get("/test", async (req: Request, res: Response) => {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
