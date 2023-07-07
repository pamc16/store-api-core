import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { ProductoService } from './productos.service';
import { Productos } from './productos.entity';

@ApiTags('Productos')
@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @ApiOperation({ summary: 'Obtener todos los productos' })
  @Get()
  async buscarTodos(): Promise<Productos[]> {
    return this.productoService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un producto por su ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @Get(':id')
  async buscarUno(@Param('id') id: number): Promise<Productos> {
    return this.productoService.findOne(id);
  }

  @ApiOperation({ summary: 'Crear un nuevo producto' })
  @ApiBody({ type: Productos })
  @Post()
  async crear(@Body() productoData: Partial<Productos>): Promise<Productos> {
    return this.productoService.create(productoData);
  }

  // @ApiOperation({ summary: 'Actualizar un producto existente' })
  // @ApiParam({ name: 'id', type: 'number' })
  // @ApiBody({ type: Productos })
  // @Put(':id')
  // async actualizar(
  //   @Param('id') id: number,
  //   @Body() productoData: Partial<Productos>,
  // ): Promise<Productos> {
  //   return this.productoService.update(id, productoData);
  // }

  @ApiOperation({ summary: 'Eliminar un producto' })
  @ApiParam({ name: 'id', type: 'number' })
  @Delete(':id')
  async eliminar(@Param('id') id: number): Promise<void> {
    return this.productoService.delete(id);
  }
}
