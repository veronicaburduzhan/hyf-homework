const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const router = express.Router();

app.use("/calculator", router);

router.get("/add", (req, res) => {
  try {
    const array = req.query.number;
    let addition;
    if (Object.keys(req.query).length === 0) {
      res.send("Please, add some values!");
      return;
    } else if (array.length === 1) {
      addition = parseInt(array[0], 10) + parseInt(array[0], 10);
      res.send(
        `Notice: You added only one value. Result of addition is ${addition}`
      );
      return;
    } else {
      addition = array
        .map((item) => {
          return parseInt(item, 10);
        })
        .reduce((prev, curr) => prev + curr, 0);
      res.send(`Result of addition is ${addition}`);
      return;
    }
  } catch (error) {
    throw error;
  }
});

router.get("/substract", (req, res) => {
  try {
    const array = req.query.number;
    let substraction;
    if (Object.keys(req.query).length === 0) {
      res.send("Please, add some values!");
      return;
    } else if (array.length === 1) {
      res.send(`Notice: You added only one value. Result of addition is 0`);
      return;
    } else {
      substraction = array
        .map((item) => {
          return parseInt(item, 10);
        })
        .reduce((prev, curr) => prev - curr);
      res.send(`Result of substraction is ${substraction}`);
      return;
    }
  } catch (error) {
    throw error;
  }
});

router.get("/multiply", (req, res) => {
  try {
    const array = req.query.number;
    let multiplication;
    if (Object.keys(req.query).length === 0) {
      res.send("Please, add some values!");
      return;
    } else if (array.length === 1) {
      multiplication = Math.pow(parseInt(array[0], 10), 2);
      res.send(
        `Notice: You added only one value. Result of addition is ${multiplication}`
      );
      return;
    } else {
      multiplication = array
        .map((item) => {
          return parseInt(item, 10);
        })
        .reduce((prev, curr) => prev * curr, 1);
      res.send(`Result of multiplacation ${multiplication}`);
      return;
    }
  } catch (error) {
    throw error;
  }
});

router.get("/divide", (req, res) => {
  try {
    const array = req.query.number;
    let division;
    if (Object.keys(req.query).length === 0) {
      res.send("Please, add some values!");
      return;
    } else if (array.length === 1) {
      res.send(`Notice: You added only one value. Result of addition is 1`);
      return;
    } else {
      division = array
        .map((item) => {
          return parseInt(item, 10);
        })
        .reduce((prev, curr) => prev / curr);
      res.send(`Result of substraction is ${division.toFixed(2)}`);
      return;
    }
  } catch (error) {
    throw error;
  }
});

router.post("/add", (req, res) => {
  try {
    const array = req.body.number;
    let addition;
    if (Object.keys(req.body).length === 0) {
      res.send("Please, add some values!");
      return;
    } else if (array.length === 1) {
      addition = parseInt(array[0], 10) + parseInt(array[0], 10);
      res.send(
        `Notice: You added only one value. Result of addition is ${addition}`
      );
      return;
    } else {
      addition = array
        .map((item) => {
          return parseInt(item, 10);
        })
        .reduce((prev, curr) => prev + curr, 0);
      res.send(`Result of addition is ${addition}`);
      return;
    }
  } catch (error) {
    throw error;
  }
});

router.post("/substract", (req, res) => {
  try {
    const array = req.body.number;
    let substraction;
    if (Object.keys(req.body).length === 0) {
      res.send("Please, add some values!");
      return;
    } else if (array.length === 1) {
      res.send(`Notice: You added only one value. Result of addition is 0`);
      return;
    } else {
      substraction = array
        .map((item) => {
          return parseInt(item, 10);
        })
        .reduce((prev, curr) => prev - curr);
      res.send(`Result of substraction is ${substraction}`);
      return;
    }
  } catch (error) {
    throw error;
  }
});

router.get("/multiply", (req, res) => {
  try {
    const array = req.body.number;
    let multiplication;
    if (Object.keys(req.body).length === 0) {
      res.send("Please, add some values!");
      return;
    } else if (array.length === 1) {
      multiplication = Math.pow(parseInt(array[0], 10), 2);
      res.send(
        `Notice: You added only one value. Result of addition is ${multiplication}`
      );
      return;
    } else {
      multiplication = array
        .map((item) => {
          return parseInt(item, 10);
        })
        .reduce((prev, curr) => prev * curr, 1);
      res.send(`Result of multiplacation ${multiplication}`);
      return;
    }
  } catch (error) {
    throw error;
  }
});

router.get("/divide", (req, res) => {
  try {
    const array = req.body.number;
    let division;
    if (Object.keys(req.body).length === 0) {
      res.send("Please, add some values!");
      return;
    } else if (array.length === 1) {
      res.send(`Notice: You added only one value. Result of addition is 1`);
      return;
    } else {
      division = array
        .map((item) => {
          return parseInt(item, 10);
        })
        .reduce((prev, curr) => prev / curr);
      res.send(`Result of substraction is ${division.toFixed(2)}`);
      return;
    }
  } catch (error) {
    throw error;
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
