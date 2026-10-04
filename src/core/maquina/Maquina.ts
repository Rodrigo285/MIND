import TagMaquina from "../shared/TagMaquina";
import { TipoMaquina } from "./TipoMaquina";

export interface MaquinaProps {
  tag: TagMaquina;
  tipo: TipoMaquina;
  marca: string;
  modelo: string;
  fornecedor: string;
  dataFabricacao: Date;
}
export default class Maquina {
  readonly tag: TagMaquina;
  readonly tipo: TipoMaquina;
  readonly marca: string;
  readonly modelo: string;
  readonly fornecedor: string;
  readonly dataFabricacao: Date;

  constructor(props: MaquinaProps) {
    this.tag = props.tag;
    this.tipo = props.tipo;
    this.marca = props.marca;
    this.modelo = props.modelo;
    this.fornecedor = props.fornecedor;
    this.dataFabricacao = props.dataFabricacao;
  }
}
