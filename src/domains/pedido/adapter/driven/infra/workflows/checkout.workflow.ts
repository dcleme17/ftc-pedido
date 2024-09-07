import { IPedido } from "../../../../core/applications/ports/pedido.port";
import { Pedido } from "../../../../core/entities/pedido";
import { PedidoVersao } from "../../../../core/entities/pedido.versao";
import { ExecutionsClient } from "@google-cloud/workflows";

export class CheckoutWorkflow implements IPedido {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async adiciona(_pedido: Pedido): Promise<PedidoVersao | null> {return null}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async versiona(_pedido: Pedido): Promise<boolean | null> {return null}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async buscaUltimaVersao (_codigoPedido: string): Promise<Pedido | null> {return null}
    async listaPedidos(): Promise<Array<Pedido>> {return []}

    async checkout (pedido: object): Promise<object | null> {
        const client = new ExecutionsClient();

        console.info('CLOUD_RUN_EXECUTION', process.env)

        const result  = await client.createExecution({
            parent: client.workflowPath(process.env.PROJECT_ID!, process.env.REGION!, 'checkout'),
            execution: {
                argument: JSON.stringify(pedido),
            },
        }).then();

        console.info(result);

        return result;
    }
}