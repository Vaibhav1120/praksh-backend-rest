import express from 'express'

import router from express.Router()

import controllers from "../controllers/menuController";

router.route("/").post(controllers.createMenu);
router.route("/").get(controllers.viewMenu)
router.route("/filter").post(controllers.filterMenu)

module.exports=router;








