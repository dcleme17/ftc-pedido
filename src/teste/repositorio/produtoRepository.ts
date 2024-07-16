import { Produto } from "../pedido/produto";
import { ProdutoVersao } from "../pedido/produto.versao";
import { IProduto } from "../pedido/produto.port";


export class ProdutoRepository  implements IProduto {

  async buscaUltimaVersao(codigo: string): Promise<Produto | null> {
    console.log(codigo);
    // Implementação da função
    //return null;
    let produto =  new Produto("1", "Coca-cola","Bebida",10, "Coca-cola Zero", new ProdutoVersao("1", new Date()));
    return produto;
  }

  async adiciona(produto: Produto): Promise<ProdutoVersao | null> {
    console.log(produto);
    // Implementação da função
    //return null;
    let versao =  new ProdutoVersao("1", new Date());
    produto = new Produto("1", "Coca-cola","Bebida",10, "Coca-cola Zero", versao)
    return versao;
  }

  async atualiza(produto: Produto): Promise<ProdutoVersao | null> {
    console.log(produto);
    // Implementação da função
    //return null;
    let versao =  new ProdutoVersao("1", new Date());
    produto = new Produto("1", "Coca-cola","Bebida",10, "Coca-cola Zero", versao)
    return versao;
  }

  async remove(produto: Produto): Promise<ProdutoVersao | null> {
    console.log(produto);
    // Implementação da função
    //return null;
    let versao =  new ProdutoVersao("1", new Date());
    
    produto = new Produto("1", "Coca-cola","Bebida",10, "Coca-cola Zero", versao)
    return versao;  
  }

}