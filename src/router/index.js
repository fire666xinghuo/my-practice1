import {createRouter,createWebHistory} from 'vue-router'
import BackendLayout from '@/components/BackendLayout.vue'
import Authlayout from '@/components/Authlayout.vue'

const houtaiRoutes =[
    {
        path:'/wocao',
        component:BackendLayout,
        children:[
            {
                path: 'dashboard',
                component:()=>import('@/views/dashboard.vue'),
                meta:{
                    title:'数据分析',
                    icon:'PieChart'
                }
            },
            {
                path: 'knowledge',
                component:()=>import('@/views/knowledge.vue'),
                meta:{
                    title:'知识文章',
                    icon:'ChatLineSquare'
                }
            },
            {
                path: 'consultations',
                component:()=>import('@/views/consultation.vue'),
                meta:{
                    title:'咨询记录',
                    icon:'Message'
                }
            },
            {
                path: 'emotion',
                component:()=>import('@/views/emotion.vue'),
                meta:{
                    title:'情绪日志',
                    icon:'User'
                }
            }
        ]
    },
    {
        path:'/auth',
        component:Authlayout,
        children:[
            {
                path:'login',
                component:()=>import('@/views/login.vue'),
                meta:{
                    title:'登录'
                }
            },{
                path:'register',
                component:()=>import('@/views/register.vue'),
                meta:{
                    title:'注册'
                }
            }
        ]
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:houtaiRoutes
})

export default router