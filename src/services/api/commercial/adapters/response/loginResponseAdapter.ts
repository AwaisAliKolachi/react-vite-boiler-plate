
import { LoginResult } from '@src/services/api/models';
import {
  LoginResponseDTO,
} from '../../dtos/LoginResponseDTO';

export class LoginResponseAdapter {
  constructor() {}

  service(dto: LoginResponseDTO): LoginResult {
    return {
      accessToken: dto.accessToken,
      refreshToken: dto.refreshToken,
    };
  }
}
