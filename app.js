import express from "express";

import employees from "#db/employees";

const app = express();

export default app;

app.route("/").get((req, res) => {
  res.send(`Hello employees!`);
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/ramdom").get((req, res) => {
  let pool = employees;
  if (employees.length > 1 && lastRandomId !== null) {
    pool = employees.filter((employee) => employee.id !== lastRandomId);
  }
  const employee = pool[Math.floor(Math.random() * pool.length)];
  lastRandomId = employee.id;
  res.send(employee);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;

  if (!employees.includes(+id)) {
    return res.status(404).send(false);
  }

  res.send(true);
});
