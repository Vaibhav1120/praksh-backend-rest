import Menu from "../models/Menu.js";
import bigPromise from "../middlewares/bigPromise.js";
import multer from "multer";
import fs from "fs";

export const createMenu = async (req, res) => {
  console.log(req.body);
  const { dish_name, discription, category, price, popularity } = req.body;

  if (!dish_name || !discription || !category || !price || !popularity) {
    return res.status(401).json({
      message: "fail",
      status: "401",
    });
  }

  const det = await Menu.create({
    dish_name,
    discription,
    category,
    price,
    popularity,
  });

  return res.status(201).json({
    status: 201,
    data: det,
  });
};

export const viewMenu = async (req, res) => {
  const data = await Menu.find();

  if (!data) {
    return res.status(400).json({
      status: "fail",
    });
  }
  console.log(data);

  return res.status(200).json({
    status: "sucess",
    menu: data,
  });
};

export const filterMenu = async (req, res) => {
  const { data } = req.body;
  const finalmenu = new Array();
  const menu = await Menu.find();

  await menu.map((obj) => {
    if (obj.category == data) {
      return finalmenu.push(obj);
    }
  });

  if (finalmenu.length > 0) {
    return res.status(200).json({
      status: "success",
      menu: finalmenu,
    });
  }

  return res.status(401).json({
    status: "fail",
  });
};
