<template>
<div class="backend-layout">
    <el-container class="main-container">
        <sidebar/>
    <el-container>
    <el-header>
        <navbar/>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    </el-container>
    </el-container>
</div>
</template>
<style lang="scss" scoped>
    .backend-layout {
        height: 100vh;
        .main-container {
            height: 100vh;
        }
    }
</style>
<script setup>
    import sidebar from './sidebar.vue'
    import navbar from './navbar.vue'
</script>