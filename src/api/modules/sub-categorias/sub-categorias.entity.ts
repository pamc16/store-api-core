import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Productos } from '../productos/productos.entity';
import { Categorias } from '../categorias/categorias.entity';

@Entity()
export class Subcategorias {
  @PrimaryGeneratedColumn()
  subcategoria_id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Categorias, (categoria) => categoria.subcategorias)
  categorias: Categorias;

  @OneToMany(() => Productos, (producto) => producto.subcategorias)
  productos: Productos[];
}
