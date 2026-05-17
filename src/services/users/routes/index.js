import { Router } from 'express';
import { createUser, getUserById } from '../controller/user-controller.js';
import { userPayloadSchema } from '../../../services/users/validator/schema.js';
import validate from '../../../middlewires/validate.js';

const router = Router();

router.post('/users', validate(userPayloadSchema), createUser);
router.get('/users/:id', getUserById);

export default router;