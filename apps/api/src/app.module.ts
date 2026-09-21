import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TranscriptsModule } from './transcripts/transcripts.module';
import { SummaryModule } from './summary/summary.module';

/**
 * Root application module.
 * Wires together ConfigModule (global) and the three bounded-context modules.
 * Database (Prisma) and Queue (Bull) modules will be added in subsequent tasks.
 */
@Module({
  imports: [
    // Load .env variables globally — all modules can inject ConfigService
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    TranscriptsModule,
    SummaryModule,
  ],
})
export class AppModule {}
