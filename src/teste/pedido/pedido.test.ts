import { PedidoService } from '../repositorio/pedidoService';
import { PedidoRepository } from '../repositorio/pedidoRepository';
import { Pedido } from './pedido';
import { PedidoVersao } from './pedido.versao';
import { ItemPedido } from "../pedido/itemPedido";


jest.mock('../repositorio/pedidoRepository');

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

});