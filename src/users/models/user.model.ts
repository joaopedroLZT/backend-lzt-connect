import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Post } from '../../posts/models/post.model';
import { BaseModel } from '../../common/models/base.model';
import { Role } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  firstname?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  birthday?: Date;

  @Field({ nullable: true })
  street?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  zipCode?: string;

  @Field(() => Role)
  role: Role;

  @Field(() => [Post], { nullable: true })
  posts?: [Post] | null;

  @HideField()
  password: string;
}
