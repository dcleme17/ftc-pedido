import { Produto } from "./produto"
import { ProdutoVersao } from "./produto.versao"

export interface IProduto {
    adiciona: (produto: Produto) => Promise<ProdutoVersao | null>
    atualiza: (produto: Produto) => Promise<ProdutoVersao | null>
    buscaUltimaVersao: (codigo: string) => Promise<Produto | null>
    //buscaCategoria: (categoria: string) => Promise<Array<Produto>>
    //buscaListaProduto: () => Promise<Array<Produto>>
    remove: (produto : Produto) => void
}