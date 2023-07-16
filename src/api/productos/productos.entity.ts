import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categorias } from '../categorias/categorias.entity';
import { Subcategorias } from '../sub-categorias/sub-categorias.entity';

@Entity()
export class Productos {
  @PrimaryGeneratedColumn()
  producto_id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @Column()
  cantidad_disponible: number;

  @ManyToOne(() => Categorias, (categoria) => categoria.productos)
  categorias: Categorias;

  @ManyToOne(() => Subcategorias, (subcategoria) => subcategoria.productos)
  subcategorias: Subcategorias;
}
