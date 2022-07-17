import { Request, Response } from "express";
import User from "../user";
import ErrnoException = NodeJS.ErrnoException;
import fs from "node:fs";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  fs.readFile(
    "userDb.json",
    "utf-8",
    (err: ErrnoException | null, data: string) => {
      const userData: Array<User> = JSON.parse(data);

      res.json(userData);
    }
  );
};

const getSpecificUser = async (req: Request, res: Response): Promise<void> => {
  if (Object.keys(req.query).length === 0) res.redirect("/user");
  else {
    fs.readFile(
      "userDb.json",
      "utf-8",
      (err: ErrnoException | null, data: string) => {
        const userData: Array<User> = JSON.parse(data);

        userData.forEach((entry: User) => {
          if (entry.email === req.query.email) res.json(entry);
          else res.send("No such user found!");
        });
      }
    );
  }
};

const addNewUser = async (req: Request, res: Response): Promise<void> => {
  const newUser: User = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    gender: req.body.gender,
  };

  fs.readFile(
    "userDb.json",
    "utf-8",
    (err: ErrnoException | null, data: string) => {
      const userData: Array<User> = JSON.parse(data);
      userData.push(newUser);

      fs.writeFile("userDb.json", JSON.stringify(userData), (err) => {
        if (err) {
          res.send("Error: No such file!");
        } else {
          res.send("File updated Succesfully!");
        }
      });
    }
  );
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  if (Object.keys(req.query).length === 0) res.redirect("/user");
  else {
    const userEmail: any = req.query.email;
    const newUserData: User = {
      name: req.body.name,
      age: req.body.age,
      email: userEmail,
      gender: req.body.gender,
    };

    fs.readFile(
      "userDb.json",
      "utf-8",
      (err: ErrnoException | null, data: string) => {
        const userData: Array<User> = JSON.parse(data);
        const updatedUserData = userData.filter(
          (entry: User) => entry.email !== userEmail
        );
        updatedUserData.push(newUserData);

        fs.writeFile("userDb.json", JSON.stringify(updatedUserData), (err) => {
          if (err) {
            res.send("Error: No such file!");
          } else {
            res.send("File updated Succesfully!");
          }
        });
      }
    );
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  if (Object.keys(req.query).length === 0) res.redirect("/user");
  else {
    const userEmail: any = req.query.email;

    fs.readFile(
      "userDb.json",
      "utf-8",
      (err: ErrnoException | null, data: string) => {
        const userData: Array<User> = JSON.parse(data);
        const updatedUserData = userData.filter(
          (entry: User) => entry.email !== userEmail
        );

        fs.writeFile("userDb.json", JSON.stringify(updatedUserData), (err) => {
          if (err) {
            res.send("Error: No such file!");
          } else {
            res.send("File updated Succesfully!");
          }
        });
      }
    );
  }
};

export default {
  getAllUsers,
  getSpecificUser,
  addNewUser,
  updateUser,
  deleteUser,
};