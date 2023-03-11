const express = require("express");
const router = express.Router();

const pizzas = [
  {
    id: 1,
    nombre: "pizza hawaiyana",
    ingredientes: "tomate, piña, jamon, queso mozarrella",
    tamaño: "grande, mediano, pequeño",
    paquete: "sin refresco",
  },
  {
    id: 2,
    nombre: "pizza barbacoa",
    ingredientes: "tomate, pollo, res, salsa barbacoa, queso mozarrella",
    tamaño: "grande, mediano, pequeño",
    paquete: "con refresco",
  },
];

router.get("/", (req, res) => {
  res.send(pizzas);
});

router.post("/editar", (req, res) => {
  const nuevapizza = {
    id: 3,
    nombre: "pizza",
    ingredientes: "tomate, piña, jamon, queso mozarrella",
    tamaño: "grande, mediano, pequeño",
    paquete: "con gaseosa",
  };
  pizzas.push(nuevapizza);
  res.json(pizzas);
});


module.exports = router;
