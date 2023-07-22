import EmptyRouterView from '@/views/EmptyRouterView.vue';
import Home from '@/views/administrator/Home.vue';
import User from '@/views/administrator/User.vue'
import Inicio from '@/views/administrator/Inicio.vue'

export const routes = [
  { path: '/administrador',
    component: EmptyRouterView,
    children: [
      {
        path: "inicio",
        name: "inicioHome",
        component: Inicio,
      },
      {
        path: 'solicitudes',
        name: 'administratorHome', 
        component: Home,
      },
      {
        path: 'usuarios',
        name: 'userHome', 
        component: User,
      },
    ]
  },
]