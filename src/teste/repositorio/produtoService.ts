
  // src/userService.ts
  import { ProdutoRepository } from './produtoRepository';
  import { Produto } from "../pedido/produto";
  import { ProdutoVersao } from "../pedido/produto.versao";

  export class ProdutoService {
    private produtoRepository: ProdutoRepository;
  
    constructor(produtoRepository: ProdutoRepository) {
        this.produtoRepository = produtoRepository;
    }
  
    async buscaUltimaVersao(codigo: string): Promise<Produto | null> {
        const ret = await this.produtoRepository.buscaUltimaVersao(codigo);
      return ret;
    }
  
    async adiciona(produto: Produto): Promise<ProdutoVersao | null> {
        const ret = await this.produtoRepository.adiciona(produto);
      return ret;
    }
  
    async atualiza(produto: Produto): Promise<ProdutoVersao | null> {
        const ret = await this.produtoRepository.atualiza(produto);
      return ret;
    }

    async remove(produto: Produto): Promise<ProdutoVersao | null> {
      const ret = await this.produtoRepository.remove(produto);
    return ret;
    }

  }
  