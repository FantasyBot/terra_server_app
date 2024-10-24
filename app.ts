import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.VITE_FRONTEND_APP_URL || "http://localhost:5173",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express APP!");
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

app.get("/items", (req: Request, res: Response) => {
  const items = [
    { id: 1, name: "Item 1", price: 10.99 },
    { id: 2, name: "Item 2", price: 12.49 },
    { id: 3, name: "Item 3", price: 7.99 },
  ];

  res.json(items);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
