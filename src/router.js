import vueRouter from 'vue-router' //permite hacer el enrutamiento de las urls
import User from './components/User'

import UserBalance from './components/UserBalance'
import App from './App'

//definir cómo serán las rutas en la aplicación

const router = new vueRouter({  //debería coincidar con las rutas de la api
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',  //ruta que debe seguir
                name: "root",
                component: App //componente al cual se asocia
            },
            {  //ruta para consultar usuario
                path: '/user/:username', //los : son parámetros que le pasan
                name: "user",
                component: User
            },
            {
                path: '/user/balance/:username', //ruta del balance
                name: "user_balance",
                component: UserBalance
            },
        ]
    })
export default router