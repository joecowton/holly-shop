import express, { Router } from 'express';
import { index } from './controllers/images';

const router = Router();

router.route('/images.json')
  .get(index);

export default router;
