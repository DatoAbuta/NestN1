import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductDTO } from './products.dto';

export interface IProducts {
  id: number;
  name: string;
  price: string;
  created: string;
}

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Samsung',
      price: '1200',
      created: '2024-05-18T08:27:18.453Z',
    },
    {
      id: 2,
      name: 'cigarette',
      price: '25',
      created: '2024-05-18T08:38:55.969Z',
    },
    {
      id: 3,
      name: 'donaldduck',
      price: '50',
      created: '2024-05-18T08:39:01.237Z',
    },
    {
      id: 4,
      name: 'bartyi',
      price: '900',
      created: '2024-05-18T12:22:22.894Z',
    },
  ];

  getAll(): IProducts[] {
    return this.products;
  }

  createProduct(body: ProductDTO) {
    if (!body.name || !body.created || !body.price)
      throw new HttpException(
        'Name, Date And Price Are Required!',
        HttpStatus.BAD_REQUEST,
      );
    const lastId = this.products[this.products.length - 1]?.id || 0;
    const newProduct = {
      id: lastId + 1,
      ...body,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  deleteUser(id: number) {
    const index = this.products.findIndex((el) => el.id === id);

    if (index === -1)
      throw new HttpException('Not Found Product', HttpStatus.NOT_FOUND);

    const deletedProduct = this.products.splice(index, 1);

    return deletedProduct;
  }

  updateProduct(id: number, body: ProductDTO) {
    const index = this.products.findIndex((el) => el.id === id);

    if (index === -1)
      throw new HttpException('Not Found Product', HttpStatus.NOT_FOUND);

    const updatedProduct = {
      ...this.products[index],
      ...body,
    };

    this.products[index] = updatedProduct;

    return updatedProduct;
  }
}
