import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Chance } from 'chance';

const chance = new Chance();

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  let accessToken: string;
  const user = {
    email: chance.email(),
    password: 'Password123!',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    // Signup and Login to get token
    await request(app.getHttpServer()).post('/auth/signup').send(user);
    const loginRes = await request(app.getHttpServer()).post('/auth/login').send(user);
    accessToken = loginRes.body.access_token;
  });

  afterAll(async () => {
    await app.close();
  });

  it('/users/me (GET) - Success', () => {
    return request(app.getHttpServer())
      .get('/users/me')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.email).toBe(user.email.toLowerCase());
        expect(res.body).not.toHaveProperty('password');
      });
  });

  it('/users/me (GET) - Unauthorized', () => {
    return request(app.getHttpServer())
      .get('/users/me')
      .expect(401);
  });

  it('/users (PATCH) - Update Profile', () => {
    return request(app.getHttpServer())
      .patch('/users')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ firstname: 'UpdatedName' })
      .expect(200)
      .expect((res) => {
        expect(res.body.firstname).toBe('UpdatedName');
      });
  });
});
