import express from "express";
import {getLogin , invalidLogin ,welcomeUser , updateAccount ,createAccount ,welcomeNewUser ,deleteAccount} from "../controllers/loginControllers.js";

const router =express.Router();

 // loggin in an  account
router.get("/", getLogin);

// logging in

router.post("/", invalidLogin);


// login an account
router.post("/:id", welcomeUser);

// update credentials of an account
router.put("/:id", updateAccount);

//create account
router.get("/create", createAccount);
//create account
router.post("/create/:id", welcomeNewUser);

//delete the account
router.delete("/:id", deleteAccount);




export default router;

