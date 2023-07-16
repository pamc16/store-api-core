import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Productos } from './productos.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Productos)
    private readonly productoRepository: Repository<Productos>,
  ) {}

  async findAll(): Promise<Productos[]> {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<Productos> {
    return this.productoRepository.findOne({ where: { id: id } });
  }

  async create(productoData: Partial<Productos>): Promise<Productos> {
    const Producto = this.productoRepository.create(productoData);
    return this.productoRepository.save(Producto);
  }

  // async update(
  //   id: number,
  //   ProductoData: Partial<Productos>,
  // ): Promise<Productos> {
  //   await this.productoRepository.update(id, ProductoData);
  //   return this.productoRepository.findOne({ where: { id: id } });
  // }

  async delete(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }
}
