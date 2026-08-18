<template>
    <el-aside width="264px">
        <el-menu 
        default-active="2" 
        @open="handleOpen" 
        @close="handleClose"
        class='menu-style'
        >
            <div class="brand">
                <el-image style="width:50px;height:50px; margin-right:10px;" :src="iconUrl" alt="logo" />
                <!--<el-image src="https://picsum.photos/id/237/100/100" />-->
                <div class="info-card">
                    <h2 class="brand-tatle">心理健康AI助手</h2>
                    <p class="brand-subtitle">管理后台</p>
                </div>
            </div>
            
            <el-menu-item @click="selectMenu" v-for="item in router.options.routes[0].children" :key="item.path" :index="item.path">
                <el-icon><component :is="item.meta.icon" /></el-icon>
                <span>{{item.meta.title}}</span>
            </el-menu-item>
            
        </el-menu>
    </el-aside>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const iconUrl = new URL('@/assets/images/111.png', import.meta.url).href
//console.log(router,'router')   打印路由信息

/*handleOpen=()=>{
    console.log('open')
}
handleClose=()=>{
    console.log('close')
}*/
const selectMenu = (key) => {
    console.log(key)//打印点击的菜单路径
    const currentRoute = router.options.routes[0]
    router.push(`${currentRoute.path}/${key.index}`)   
    
}

</script>
<style lang="scss" scoped>
.menu-style {
    height: 100%;
    .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        background-color: #fff;
        border-bottom: 1px solid #e5e7ed;
        .info-card {
            .brand-title {
                font-size:16px;
                color:#fff;
                white-space: nowrap;
            }
            .brand-subtitle {
                font-size:13px;
                color:#444;
                white-space: nowrap;
            }
        }
    }
}
</style>

