import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from './products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getExpenseById(@Param('id', ParseIntPipe) id) {
    return this.productsService.getExpenseById(Number(id));
  }

  @Post()
  createProduct(@Body() product: ProductDTO) {
    return this.productsService.createProduct(product);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id) {
    return this.productsService.deleteProduct(Number(id));
  }

  @Put('/:id')
  updateProduct(@Param('id') id: number, @Body() product: ProductDTO) {
    return this.productsService.updateProduct(Number(id), product);
  }
}
