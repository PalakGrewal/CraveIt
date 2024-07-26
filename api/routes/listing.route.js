import express from 'express';
import { addRestro } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/addrestro', verifyToken, addRestro)

export default router;