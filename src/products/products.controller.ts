import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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

  @Post()
  createProduct(@Body() product: ProductDTO) {
    return this.productsService.createProduct(product);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id) {
    return this.productsService.deleteUser(Number(id));
  }

  @Put('/:id')
  updateProduct(@Param('id') id: number, @Body() product: ProductDTO) {
    return this.productsService.updateProduct(Number(id), product);
  }
}
