import { Injectable } from '@nestjs/common';

/**
 * AuthService — placeholder.
 *
 * Business logic to be implemented in the "AuthModule: register/login, JWT guard" task:
 *   - register(email, password): hash password, persist User via PrismaService
 *   - validateUser(email, password): verify credentials
 *   - login(user): sign and return a JWT via @nestjs/jwt JwtService
 */
@Injectable()
export class AuthService {
  /** Placeholder — returns a simple status object. */
  getStatus(): { status: string } {
    return { status: 'AuthService ready' };
  }
}
