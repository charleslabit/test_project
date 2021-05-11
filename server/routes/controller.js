const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors);
router.use(express.urlencoded({ limit: "1000mb", extended: false }));
router.use(express.json({ limit: "1000mb" }));


var projectDatabase = require("knex")({
    client: "mysql",
    connection: {
      host: "10.11.1.59",
      user: "charles",
      password: "labit",
      database: "rulebook",
      connectionTimeout: 300000,
      requestTimeout: 300000,
      pool: {
        idleTimeoutMillis: 300000,
        max: 100,
      },
    },
  });


router.get("/", (req, res) => {
  console.log("Hello World!");
  res.send("Hello WOrld");
});



//                                                  M - A - I - N - T - E - N - A - N - C - E

// Email Address

router.get("/get/emailaddress", (req, res) => {
    let sql = `SELECT * FROM m_emailaddress`;
    projectDatabase.raw(sql).then((data) => {
      let newData = data[0];
      newData = newData.map((rec) => {
        rec.CreatedDate = moment(rec.CreatedDate).format("YYYY-MM-DD hh:mm:ss");
        if (rec.DeletedDate) {
          rec.DeletedDate = moment(rec.DeletedDate).format("YYYY-MM-DD hh:mm:ss");
        }
        rec.UpdatedDate = moment(rec.UpdatedDate).format("YYYY-MM-DD hh:mm:ss");
        return rec;
      });
  
      res.send(newData);
    });
  });
  
  router.post(`/add/emailaddress`, (req, res) => {
    let sql = `INSERT INTO m_emailaddress (EmailAddress, UpdatedBy)
           VALUES ('${req.body.EmailAddress}','${req.body.UpdatedBy}')`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/update/emailaddress`, (req, res) => {
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_emailaddress
               SET EmailAddress = '${req.body.EmailAddress}', UpdatedDate = '${CURRENT_TIMESTAMP}' ,UpdatedBy = '${req.body.UpdatedBy}'
              WHERE EmailAddressID = '${req.body.EmailAddressID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/delete/emailaddress/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_emailaddress
               SET DeletedDate = '${CURRENT_TIMESTAMP}', UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}' 
              WHERE EmailAddressID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/restore/emailaddress/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_emailaddress
               SET DeletedDate =  NULL, UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}'
              WHERE EmailAddressID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  // C L A S S I F I C A T I O N
  router.get("/get/classification", (req, res) => {
    let sql = `SELECT * FROM m_classification`;
    projectDatabase.raw(sql).then((data) => {
      let newData = data[0];
      newData = newData.map((rec) => {
        rec.CreatedDate = moment(rec.CreatedDate).format("YYYY-MM-DD hh:mm:ss");
        if (rec.DeletedDate) {
          rec.DeletedDate = moment(rec.DeletedDate).format("YYYY-MM-DD hh:mm:ss");
        }
        rec.UpdatedDate = moment(rec.UpdatedDate).format("YYYY-MM-DD hh:mm:ss");
        return rec;
      });
  
      res.send(newData);
    });
  });
  
  router.post(`/add/classification`, (req, res) => {
    let sql = `INSERT INTO m_classification (Classification, UpdatedBy)
           VALUES ('${req.body.Classification}','${req.body.UpdatedBy}')`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/update/classification`, (req, res) => {
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_classification
               SET Classification = '${req.body.Classification}', UpdatedDate = '${CURRENT_TIMESTAMP}' ,UpdatedBy = '${req.body.UpdatedBy}'
              WHERE ClassificationID = '${req.body.ClassificationID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/delete/classification/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_classification
               SET DeletedDate = '${CURRENT_TIMESTAMP}', UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}' 
              WHERE ClassificationID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/restore/classification/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_classification
               SET DeletedDate =  NULL, UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}'
              WHERE ClassificationID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  //D E P A R T M E N T  I N C H A R G E
  
  router.get("/get/departmentincharge", (req, res) => {
    let sql = `SELECT * FROM m_department_incharge`;
    projectDatabase.raw(sql).then((data) => {
      let newData = data[0];
      newData = newData.map((rec) => {
        rec.CreatedDate = moment(rec.CreatedDate).format("YYYY-MM-DD hh:mm:ss");
        if (rec.DeletedDate) {
          rec.DeletedDate = moment(rec.DeletedDate).format("YYYY-MM-DD hh:mm:ss");
        }
        rec.UpdatedDate = moment(rec.UpdatedDate).format("YYYY-MM-DD hh:mm:ss");
        return rec;
      });
  
      res.send(newData);
    });
  });
  
  router.post(`/add/departmentincharge`, (req, res) => {
    let sql = `INSERT INTO m_department_incharge (DepartmentInCharge, UpdatedBy)
           VALUES ('${req.body.DepartmentInCharge}','${req.body.UpdatedBy}')`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/update/departmentincharge`, (req, res) => {
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_department_incharge
               SET DepartmentInCharge = '${req.body.DepartmentInCharge}', UpdatedDate = '${CURRENT_TIMESTAMP}' ,UpdatedBy = '${req.body.UpdatedBy}'
              WHERE DepartmentInChargeID = '${req.body.DepartmentInChargeID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/delete/departmentincharge/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_department_incharge
               SET DeletedDate = '${CURRENT_TIMESTAMP}', UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}' 
              WHERE DepartmentInChargeID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/restore/departmentincharge/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_department_incharge
               SET DeletedDate =  NULL, UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}'
              WHERE DepartmentInChargeID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  // PERSON IN CHARGE
  
  router.get("/get/personincharge", (req, res) => {
    let sql = `SELECT * FROM m_person_incharge`;
    projectDatabase.raw(sql).then((data) => {
      let newData = data[0];
      newData = newData.map((rec) => {
        rec.CreatedDate = moment(rec.CreatedDate).format("YYYY-MM-DD hh:mm:ss");
        if (rec.DeletedDate) {
          rec.DeletedDate = moment(rec.DeletedDate).format("YYYY-MM-DD hh:mm:ss");
        }
        rec.UpdatedDate = moment(rec.UpdatedDate).format("YYYY-MM-DD hh:mm:ss");
        return rec;
      });
  
      res.send(newData);
    });
  });
  
  router.post(`/add/personincharge`, (req, res) => {
    let sql = `INSERT INTO m_person_incharge (PersonInCharge, UpdatedBy)
           VALUES ('${req.body.PersonInCharge}','${req.body.UpdatedBy}')`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/update/personincharge`, (req, res) => {
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_person_incharge
               SET PersonInCharge = '${req.body.PersonInCharge}', UpdatedDate = '${CURRENT_TIMESTAMP}' ,UpdatedBy = '${req.body.UpdatedBy}'
              WHERE PersonInChargeID = '${req.body.PersonInChargeID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/delete/personincharge/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_person_incharge
               SET DeletedDate = '${CURRENT_TIMESTAMP}', UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}' 
              WHERE PersonInChargeID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/restore/personincharge/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_person_incharge
               SET DeletedDate =  NULL, UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}'
              WHERE PersonInChargeID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  //PRODUCT CATEGORY
  router.get("/get/productcategory", (req, res) => {
    let sql = `SELECT * FROM m_productcategory`;
    projectDatabase.raw(sql).then((data) => {
      let newData = data[0];
      newData = newData.map((rec) => {
        rec.CreatedDate = moment(rec.CreatedDate).format("YYYY-MM-DD hh:mm:ss");
        if (rec.DeletedDate) {
          rec.DeletedDate = moment(rec.DeletedDate).format("YYYY-MM-DD hh:mm:ss");
        }
        rec.UpdatedDate = moment(rec.UpdatedDate).format("YYYY-MM-DD hh:mm:ss");
        return rec;
      });
  
      res.send(newData);
    });
  });
  
  router.post(`/add/productcategory`, (req, res) => {
    let sql = `INSERT INTO m_productcategory (ProductCategory, UpdatedBy)
           VALUES ('${req.body.ProductCategory}','${req.body.UpdatedBy}')`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/update/productcategory`, (req, res) => {
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_productcategory
               SET ProductCategory = '${req.body.ProductCategory}', UpdatedDate = '${CURRENT_TIMESTAMP}' ,UpdatedBy = '${req.body.UpdatedBy}'
              WHERE ProductCategoryID = '${req.body.ProductCategoryID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/delete/productcategory/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_productcategory
               SET DeletedDate = '${CURRENT_TIMESTAMP}', UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}' 
              WHERE ProductCategoryID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });
  
  router.post(`/restore/productcategory/:id/:updatedby`, (req, res) => {
    const ID = req.params.id;
    const UPDATEDBY = req.params.updatedby;
    const CURRENT_TIMESTAMP = moment().format("YYYY-MM-DD hh:mm:ss");
  
    let sql = `UPDATE m_productcategory
               SET DeletedDate =  NULL, UpdatedDate = '${CURRENT_TIMESTAMP}', UpdatedBy = '${UPDATEDBY}'
              WHERE ProductCategoryID = '${ID}'`;
    projectDatabase.raw(sql).then(() => {
      res.send("FINALLY!");
    });
  });


module.exports = router;
