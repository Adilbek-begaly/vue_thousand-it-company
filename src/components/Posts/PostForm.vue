<template>
    <form @submit.prevent>
            <h4>Создание поста</h4>
            <input 
                v-model="post.title"
                class="input" 
                type="text" 
                placeholder="Название">
            <input 
                v-model="post.body"
                class="input" 
                type="text" 
                placeholder="Описание">
            <button 
                @click="createPosts" 
                class="btn">
                    Создать
            </button>
        </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    }, 
    methods: {
        createPosts() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title:'',
                body:''
            }
        }
    }
}
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
}

.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 5px;
    margin-top: 10px;
}

.btn {
    align-self: flex-end;
    margin-top: 10px;
    padding: 10px 15px;
    background: none;
    border: 1px solid teal;
    color: teal;
    border-radius: 10px;
}

</style>