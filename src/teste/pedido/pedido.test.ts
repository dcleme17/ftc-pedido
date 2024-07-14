import { PedidoService } from '../repositorio/pedidoService';
import { PedidoRepository } from '../repositorio/pedidoRepository';
import { Pedido } from './pedido';
//import { Cliente } from '../cliente/cliente';
//import { ClienteVersao } from '../cliente/cliente.versao';
//import { Pagamento } from '../pagamento/pagamento';
//import { PagamentoVersao } from '../pagamento/pagamento.versao';
import { PedidoVersao } from './pedido.versao';
import { ItemPedido } from "../pedido/itemPedido";
//import axios from 'axios';
jest.mock('../repositorio/pedidoRepository');

//jest.mock('axios');
//const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PedidoService', () => {
  let pedidoService: PedidoService;
  let pedidoRepository: jest.Mocked<PedidoRepository>;

  beforeEach(() => {
    pedidoRepository = new PedidoRepository() as jest.Mocked<PedidoRepository>;
    pedidoService = new PedidoService(pedidoRepository);
  });

  it('devePermitirObterUltimaVersao', async () => {
    //Given
    const codigo = "1";
    const cpf = "12345678909";

    const itens = [
      new ItemPedido ("1", 2, "Coca Zero","Bebida", 8.00),
      new ItemPedido ("2", 1, "", "Lanche", 12.00)
    ];
    
    let ped =  new Pedido((new Date(), 'dd/MM/yyyy'), (new Date(), 'hh:mm:ss'),  null, itens, 28.00);
    pedidoRepository.buscaUltimaVersao.mockResolvedValue(ped);
                       
    //When
    const result = await pedidoService.buscaUltimaVersao(codigo, cpf); 

    //Then
    //expect(result).toBeNull();
    expect(pedidoRepository.buscaUltimaVersao).toHaveBeenCalledTimes(1);
    expect(pedidoRepository.buscaUltimaVersao).toHaveBeenCalledWith(codigo, cpf);
    expect(result).toBe(ped);
  });

  it('devePermitirAdicionarPedido', async () => {

    //Given
    const itens = [
      new ItemPedido ("1", 2, "Coca Zero","Bebida", 8.00),
      new ItemPedido ("2", 1, "", "Lanche", 12.00)
    ];

    let ped = new Pedido((new Date(), 'dd/MM/yyyy'), (new Date(), 'hh:mm:ss'), null, itens, 28.00);

    let versao = new PedidoVersao("1",new Date(),  "1");

    pedidoRepository.adiciona.mockResolvedValue(versao);

    //When
    const result = await pedidoService.adiciona(ped);
    
    //Then
    //expect(result).toBeNull();
    expect(pedidoRepository.adiciona).toHaveBeenCalledTimes(1);
    expect(pedidoRepository.adiciona).toHaveBeenCalledWith(ped);
    expect(result).toBe(versao);
  });

  // it('devePermitirObterClientePeloMetodoGet', async () => {
  //   const cpf = '12345678909';
  //   const cliente: Cliente = new Cliente("Nome Teste","12345678909","nome.teste@gmail.com", "1",new ClienteVersao("1", new Date()));
  //   mockedAxios.get.mockResolvedValue({ data: cliente });

  //   const result = await pedidoService.getClienteByCpf(cpf);
  //   expect(result).toEqual(cliente);
  //   expect(mockedAxios.get).toHaveBeenCalledWith(`/api/clientes/v1/${cpf}`);
  // });

  // it('devePermitirObterPagamentoPeloMetodoGet', async () => {
  //   const codigoPedido = '12345678909';
  //   const pagamento: Pagamento = new Pagamento("TESTE", "12345678909","teste@teste.com.br",1.99,1,"PIX","123456");
  //   mockedAxios.get.mockResolvedValue({ data: pagamento });

  //   const result = await pedidoService.getPagamentoByPedido(codigoPedido);
  //   expect(result).toEqual(pagamento);
  //   expect(mockedAxios.get).toHaveBeenCalledWith(`/api/pagamentos/v1/${codigoPedido}`);
  // });

  // it('devePermitircriarPagamentoPeloMetodoPost', async () => {
  //   const pagamentoVersao = new PagamentoVersao("1",new Date());
  //   const pagamento: Pagamento = new Pagamento("TESTE", "12345678909","teste@teste.com.br",1.99,1,"PIX","123456");
  //   mockedAxios.get.mockResolvedValue({ data: pagamentoVersao });

  //   const result = await pedidoService.createPagamento(pagamento);
  //   expect(result).toEqual(pagamentoVersao);
  //   expect(mockedAxios.post).toHaveBeenCalledWith('/api/clientes/v1', pagamento);
  // });

});