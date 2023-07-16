import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Productos } from '../productos/productos.entity';
import { Subcategorias } from '../sub-categorias/sub-categorias.entity';

@Entity()
export class Categorias {
  @PrimaryGeneratedColumn()
  categoria_id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Subcategorias, (subcategoria) => subcategoria.categorias)
  subcategorias: Subcategorias[];

  @OneToMany(() => Productos, (producto) => producto.categorias)
  productos: Productos[];
}
