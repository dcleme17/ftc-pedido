import { Pedido } from "../pedido/pedido";
import { PedidoVersao} from "../pedido/pedido.versao";
import { IPedido } from "../pedido/pedido.port";
import { ItemPedido } from "../pedido/itemPedido";

export class PedidoRepository  implements IPedido {
              
  async buscaUltimaVersao(codigoPedido: string, cpf: string): Promise<Pedido | null> {
    console.log(codigoPedido, cpf);
    // Implementação da função
    //return null;
    const itens = [
      new ItemPedido ("1", 2, "Coca Zero","Bebida", 8.00),
      new ItemPedido ("2", 1, "", "Lanche", 12.00)
    ];

    let pedido =  new Pedido("13/07/2024", "17:00",  null, itens, 28.00);
    return pedido;
  }

  async adiciona(pedido: Pedido): Promise<PedidoVersao | null> {
    console.log(pedido);
    // Implementação da função
    //return null;
    const itens = [
      new ItemPedido ("1", 2, "Coca Zero","Bebida", 8.00),
      new ItemPedido ("2", 1, "", "Lanche", 12.00)
    ];

    let versao =  new PedidoVersao( "1",new Date(),  "1");

    pedido = new Pedido("13/07/2024", "17:00", null, itens, 28.00);
    return versao;
  }
}