<template>
    <div class="navbar">
        <div class="flex-box">
            <el-button <!--type="primary"变成蓝色-->
                <el-icon><Expand /></el-icon>
            </el-button>
            <p class="page-title">导航</p>
        </div>
        <div class="flex-box">
            <el-dropdown @command="handleCommand">
                <div class="flex-box">
                    <el-icon><Tools /></el-icon>
                    <!--这是以后图片但我不想用<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />-->
                    <p class="user-name">管理员</p>
                    <el-icon><ArrowDown /></el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                        <!--后续用户页面可以增加这个<el-dropdown-item command="profile">个人中心</el-dropdown-item>-->
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>


<script setup>
    const handleCommand = (command) => {
        if(command === 'logout') {
            //console.log('退出登录')打印看看点击有效吗
            // 处理退出登录逻辑
        }
        //else if(command === 'profile') {
            // 处理个人中心逻辑
        //}
    }
</script>


<style lang="scss" scoped>
.navbar {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background: white;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    border-bottom: 1px solid #e5e7ed;
    .flex-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .page-title {
        margin-left: 20px;
        font-size: 26px;
        font-weight: bold;
        //white-space: nowrap;
        color: #444;
    }
}
</style>