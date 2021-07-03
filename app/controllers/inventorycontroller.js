const product = require("../models/inventorymodel");

exports.allinventory = (req, res) => {
  product.inventoryReport((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured in inventoryReport function",
      });
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].stock <= 0) {
          data[i].stock = "out of stock";
        }
        console.log(data[i].stock);
      }
      res.render("./pages/inventory-reports", {
        data,
      });
    }

    console.log(data);
  });
  // res.render("./pages/inventory-reports");
};

exports.delete = (req, res) => {
  product.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.id,
        });
      }
      console.log("ID--->", req.params.id);
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};
