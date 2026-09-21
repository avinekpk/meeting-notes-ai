import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

/**
 * AuthModule — email/password authentication and JWT issuance.
 *
 * Planned contents (added in the "AuthModule: register/login, JWT guard" task):
 *   - Register endpoint (POST /auth/register)
 *   - Login endpoint (POST /auth/login) → returns JWT
 *   - JwtStrategy + JwtAuthGuard for protecting other routes
 *   - Password hashing via bcryptjs
 */
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
