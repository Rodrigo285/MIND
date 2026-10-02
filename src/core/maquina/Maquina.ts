import Erros from "../../constants/Erros";
import TagMaquina from "../shared/TagMaquina";

export interface MaquinaProps {
  tag: string;
  tipo: string;
  marca: string;
  modelo: string;
  fornecedor: string;
  dataFabricacao: Date;
}
export default class Maquina {
  readonly tag: TagMaquina;
  readonly tipo: string;
  readonly marca: string;
  readonly modelo: string;
  readonly fornecedor: string;
  readonly dataFabricacao: Date;

  constructor(props: MaquinaProps) {
    if (props.tag.trim() === "") {
      throw new Error(Erros.TAG_INVALIDA);
    }
    this.tag = props.tag;
    this.tipo = props.tipo;
    this.marca = props.marca;
    this.modelo = props.modelo;
    this.fornecedor = props.fornecedor;
    this.dataFabricacao = props.dataFabricacao;
  }
}
