import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstname?: string;
  @Field({ nullable: true })
  lastname?: string;
  @Field({ nullable: true })
  email?: string;
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
}
