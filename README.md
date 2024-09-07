# ftc-pedido

Vídeo demonstrando o funcionamento: https://www.youtube.com/watch?v=EC6GsMfhTKg

Para implementar o padrão SAGA utilizamos uma abordagem ORQUESTRADA para podermos desacoplar os serviços mas sem perder a visão centralizada do processo, facilitando a análise e compreensão do fluxo como um todo.

Swagger para simular o fluxo de checkout https://pedido-backend-91827266597.southamerica-east1.run.app/api-docs/#/Pedido/putpedidocheckoutpix

Swagger para simular o webhook de pagamento https://pagamento-backend-91827266597.southamerica-east1.run.app/api-docs/#/Pagamento/postWebhookMercadopago