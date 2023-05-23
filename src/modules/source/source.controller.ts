import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import SourceEntity from './source.entity';
import { SourceService } from './source.service';
import { CreateSourceDto } from './dto/create-source.dto';
import UpdateSourceDto from './dto/update-source.dto';

@Controller('source')
@ApiTags('Source')
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: SourceEntity,
    isArray: true,
  })
  getAllData(): Promise<SourceEntity[]> {
    return this.sourceService.getAllSources();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Success', type: () => SourceEntity })
  @ApiNotFoundResponse({ description: 'Data not found' })
  getDataById(@Param('id') id: number): Promise<SourceEntity> {
    return this.sourceService.getSourceById(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Data created successfully' })
  createData(@Body() data: CreateSourceDto): Promise<SourceEntity> {
    return this.sourceService.createSource(data);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Data updated successfully' })
  @ApiNotFoundResponse({ description: 'Data not found' })
  updateData(
    @Param('id') id: number,
    @Body() updatedData: UpdateSourceDto,
  ): Promise<SourceEntity> {
    return this.sourceService.updateSource(id, updatedData);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Data deleted successfully' })
  @ApiNotFoundResponse({ description: 'Data not found' })
  deleteData(@Param('id') id: number): Promise<void> {
    return this.sourceService.deleteSource(id);
  }
}
