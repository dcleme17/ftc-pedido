import { Router } from 'express'
import helthCheckRoutes from '../domains/suporte/adapter/driver/rest/routes/health-check.route'
import pedidoRoutes from '../domains/pedido/adapter/driver/rest/routes/pedido.route'
import produtoRoutes from '../domains/pedido/adapter/driver/rest/routes/produto.route'

const routes = Router()

routes.use('/api/health-check', helthCheckRoutes)
routes.use('/api/pedidos', pedidoRoutes)
routes.use('/api/produtos', produtoRoutes)

export default routes;
