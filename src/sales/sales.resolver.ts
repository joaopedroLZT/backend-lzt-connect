import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SalesService } from './sales.service';
import { WintourHeader } from './models/wintour.model';
import { CreateWintourImportInput } from './dto/create-wintour-import.input';

@Resolver()
export class SalesResolver {
  constructor(private readonly salesService: SalesService) {}

  @Mutation(() => WintourHeader)
  async importSales(
    @Args('data') data: CreateWintourImportInput,
  ): Promise<WintourHeader> {
    return this.salesService.createWintourImport(data);
  }

  @Query(() => String)
  helloSales() {
    return 'Hello Sales';
  }
}
