<template>
<div class="backend-layout">
    <el-container class="main-container">
        <sidebar/>
    <el-container>
    <el-header>
        <navbar/>
    </el-header>
    <el-main class="main-container">
        <router-view class="content-container"></router-view>
    </el-main>
    </el-container>
    </el-container>
</div>
</template>
<style lang="scss" scoped>
    .backend-layout {
        height: 100vh;
        .el-header {
            height: 74px !important;
        }
        .main-container {
            height: 100vh;
            .content-container {
                padding: 20px;
                background-color: #fff;
                min-height: calc(100vh - 74px);
            }
        }
    }
</style>
<script setup>
    import sidebar from './sidebar.vue'
    import navbar from './navbar.vue'
</script>