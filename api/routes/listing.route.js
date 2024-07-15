import express from 'express';
import { addRestro } from '../controllers/listing.controller.js';

const router = express.Router();

router.post('/add-restro', addRestro)