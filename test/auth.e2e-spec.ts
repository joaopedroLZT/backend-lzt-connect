import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Chance } from 'chance';

const chance = new Chance();

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  const user = {
    email: chance.email(),
    password: 'Password123!',
    firstname: chance.first(),
    lastname: chance.last(),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/auth/signup (POST) - Success', () => {
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send(user)
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('access_token');
        expect(res.body).toHaveProperty('refresh_token');
      });
  });

  it('/auth/signup (POST) - Conflict (Duplicate Email)', () => {
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send(user)
      .expect(409);
  });

  it('/auth/login (POST) - Success', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: user.email,
        password: user.password,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('access_token');
        expect(res.body).toHaveProperty('refresh_token');
      });
  });

  it('/auth/login (POST) - Error (Invalid Password)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: user.email,
        password: 'WrongPassword',
      })
      .expect(400)
      .expect((res) => {
        expect(res.body.message).toBe('Senha inválida');
      });
  });
});
