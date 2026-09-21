import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /auth/health → 200', () => {
    return request(app.getHttpServer())
      .get('/auth/health')
      .expect(200)
      .expect({ status: 'auth module ok' });
  });

  it('GET /transcripts/health → 200', () => {
    return request(app.getHttpServer())
      .get('/transcripts/health')
      .expect(200)
      .expect({ status: 'transcripts module ok' });
  });

  it('GET /summary/health → 200', () => {
    return request(app.getHttpServer())
      .get('/summary/health')
      .expect(200)
      .expect({ status: 'summary module ok' });
  });
});
