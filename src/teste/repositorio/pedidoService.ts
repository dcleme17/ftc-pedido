
  // src/userService.ts
  import { PedidoRepository } from './pedidoRepository';
  import { Pedido } from "../pedido/pedido";
  import { PedidoVersao } from "../pedido/pedido.versao";
  import { Cliente } from "../cliente/cliente";
  import { Pagamento } from "../pagamento/pagamento";
  import { PagamentoVersao } from "../pagamento/pagamento.versao";
  import axios from 'axios';

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

    async getClienteByCpf(cpf: string): Promise<Cliente> {
      const response = await axios.get(`/api/clientes/v1/${cpf}`);
      return response.data;
    }

    async getPagamentoByPedido(codigoPedido: string): Promise<Pagamento> {
      const response = await axios.get(`/api/pagamentos/v1/${codigoPedido}`);
      return response.data;
    }
  
    async createPagamento(pagamento: Pagamento): Promise<PagamentoVersao> {
      const response = await axios.post('/api/pagamentos/v1', pagamento);
      return response.data;
    }

  }
  
