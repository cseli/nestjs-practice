import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Userrepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Userrepository)
    private userRepository: Userrepository,
  ) {}
}
