import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';
import { authorizeToken } from '../../tokenFunctions/index';
