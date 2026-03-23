import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseEntity {
  @ApiProperty()
  id: string;
  @ApiProperty({
    description: 'Identifies the date and time when the object was created.',
  })
  created_at: Date;
  @ApiProperty({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updated_at: Date;
}
