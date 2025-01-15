import express from 'express';
const router = express.Router();
import { test } from '../controllers/test.controller.js';

router.get('/verify',test);

export default router;