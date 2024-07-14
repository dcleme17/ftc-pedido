
  // src/userService.ts
  import { PedidoRepository } from './pedidoRepository';
  import { Pedido } from "../pedido/pedido";
  import { PedidoVersao } from "../pedido/pedido.versao";

  export class PedidoService {
    private pedidoRepository: PedidoRepository;
  
    constructor(pedidoRepository: PedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
  
    async buscaUltimaVersao(codigoPedido: string, cpf: string): Promise<Pedido | null> {
        const ret = await this.pedidoRepository.buscaUltimaVersao(codigoPedido,cpf);
      return ret;
    }
  
    async adiciona(pedido: Pedido): Promise<PedidoVersao | null> {
        const ret = await this.pedidoRepository.adiciona(pedido);
      return ret;
    }
  
  }
  