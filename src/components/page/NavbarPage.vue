<template>
    <div class="navbar">
        <div class="navbar_logo" @click="$router.push('/')"> <h3>Thousand IT Company</h3>  </div>
        <div class="navbar_btns">
            <button class="btn" @click="$router.push('/about')">О сайте</button>
            <button class="btn" @click="$router.push('/posts')">Посты</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar {
    height: 50px;
    color: #fff;
    background: gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar_logo {
    cursor: pointer;
}
.navbar_btns {
    margin-left: auto;
}
.btn {
    padding: 10px 15px;
    background: none;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 10px;
    font-size: 14px;
    margin-right: 80px;
    cursor: pointer;
}

@media only screen and (max-width: 560px) {
    .btn {
        margin-right: 10px;
    }
}
@media only screen and (max-width: 400px) {
    .navbar {
        height: 90px;
    }
    .navbar_btns {
        width: 70%;
        display: flex;
        justify-content: space-around;
    }
    
}
</style>