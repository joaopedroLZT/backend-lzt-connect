import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

@InputType()
export class UpdateRoleInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field(() => Role)
  @IsEnum(Role)
  role: Role;
}
