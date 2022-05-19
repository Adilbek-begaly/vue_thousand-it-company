<template>
    <div>
        <h1> <strong>Post Id =</strong>  {{id = $route.params.id}}</h1>
        <h1> <strong>Название:</strong>  {{posts.title}}</h1>
        <h1> <strong>Описание:</strong> {{posts.body}}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            posts: [],
            id: 1,
        }
    },
    methods: {
        async getId() {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
                this.posts = response.data
        },
    },
    mounted() {
        this.getId()
    }
}
</script>

<style scoped>
h1 {
    font-weight: 500;
}
</style>