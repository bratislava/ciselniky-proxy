import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService, Enum } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('enums/:id')
  async findEnum(
    @Param('id') id: string,
    @Query('search') search = '',
  ): Promise<Enum> {
    return await this.appService.findEnum(id, search);
  }
}
