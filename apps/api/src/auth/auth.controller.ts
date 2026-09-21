import { Controller, Get } from '@nestjs/common';

/**
 * AuthController — placeholder.
 *
 * Endpoints to be implemented in the "AuthModule: register/login, JWT guard" task:
 *   POST /auth/register  — create a new user account
 *   POST /auth/login     — validate credentials, return a signed JWT
 */
@Controller('auth')
export class AuthController {
  /** Health-check route — confirms the auth router is mounted. */
  @Get('health')
  health(): { status: string } {
    return { status: 'auth module ok' };
  }
}
