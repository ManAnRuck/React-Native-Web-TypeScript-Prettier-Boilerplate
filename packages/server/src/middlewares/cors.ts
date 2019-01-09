import * as cors from 'cors';
import { Router } from 'express';

const router: Router = Router();

// TODO: set production Url
const corsOptions = {
  credentials: true,
  origin:
    process.env.NODE_ENV === 'production'
      ? ['http://…']
      : 'http://localhost:3001/',
};

router.use(cors(corsOptions));

export default router;
