import { ProdutoService } from '../repositorio/produtoService';
import { ProdutoRepository } from '../repositorio/produtoRepository';
import { Produto } from './produto';
import { ProdutoVersao } from './produto.versao';
//import * as sinon from 'sinon';
jest.mock('../repositorio/produtoRepository');

describe('ProdutoService', () => {
  let produtoService: ProdutoService;
  let produtoRepository: jest.Mocked<ProdutoRepository>;

  beforeEach(() => {
    produtoRepository = new ProdutoRepository() as jest.Mocked<ProdutoRepository>;
    produtoService = new ProdutoService(produtoRepository);
  });

  it('devePermitirObterUltimaVersao', async () => {
    //Given
    const codigo = "1";
    let prd = new Produto("1", "Coca-cola","Bebida",10, "Coca-cola Zero",new ProdutoVersao("1", new Date()));
    produtoRepository.buscaUltimaVersao.mockResolvedValue(prd);
                      
    //When
    const result = await produtoService.buscaUltimaVersao(codigo); 

    //Then
    //expect(result).toBeNull();
    expect(produtoRepository.buscaUltimaVersao).toHaveBeenCalledTimes(1);
    expect(produtoRepository.buscaUltimaVersao).toHaveBeenCalledWith(codigo);
    expect(result).toBe(prd);
  });

  it('devePermitirAdicionarProduto', async () => {

    //Given
    let prd = new Produto("1","Coca-cola","Bebida",10, "Coca-cola Zero",new ProdutoVersao("1", new Date()));
    let versao = new ProdutoVersao("1", new Date());
    produtoRepository.adiciona.mockResolvedValue(versao);

    //When
    const result = await produtoService.adiciona(prd);
    
    //Then
    //expect(result).toBeNull();
    expect(produtoRepository.adiciona).toHaveBeenCalledTimes(1);
    expect(produtoRepository.adiciona).toHaveBeenCalledWith(prd);
    expect(result).toBe(versao);
  });

  it('devePermitirAtualizarProduto', async () => {

    //Given
    let prd = new Produto("1","Coca-cola","Bebida",10, "Coca-cola Zero",new ProdutoVersao("1", new Date()));
    let versao = new ProdutoVersao("1", new Date());
    produtoRepository.atualiza.mockResolvedValue(versao);

    //When
    const result = await produtoService.atualiza(prd);

    //Thenls
    //expect(result).toBeNull();
    expect(produtoRepository.atualiza).toHaveBeenCalledTimes(1);
    expect(produtoRepository.atualiza).toHaveBeenCalledWith(prd);
    expect(result).toBe(versao);
  });

  it('devePermitirExcluirProduto', async () => {

    //Given
    let prd = new Produto("1","Coca-cola","Bebida",10, "Coca-cola Zero",new ProdutoVersao("1", new Date()));
    let versao = new ProdutoVersao("1", new Date());
    produtoRepository.remove.mockResolvedValue(versao);

    //When
    const result = await produtoService.remove(prd);

    //Thenls
    //expect(result).toBeNull();
    expect(produtoRepository.remove).toHaveBeenCalledTimes(1);
    expect(produtoRepository.remove).toHaveBeenCalledWith(prd);
    expect(result).toBe(versao);
  });
});