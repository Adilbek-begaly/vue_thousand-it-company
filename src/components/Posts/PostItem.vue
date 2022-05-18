<template>
    <div class="post" v-bind:key="post.id" >
        <div>
            <div><strong>Название: </strong>{{post.title}}</div>
            <div><strong>Описание: </strong>{{post.body}}</div>
        </div>
        <div class="post_btns">
            <button class="btn" @click="$router.push(`/posts/${post.id}`)">Открыть</button>
            <button class="btn" @click="$emit('remove', post)">Удалть</button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
}
</script>


<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post_btns {
    display: flex;
}

.btn {
    width: 100px;
    margin: 0 5px;
    padding: 10px 15px;
    background: none;
    border: 1px solid teal;
    color: teal;
    border-radius: 10px;
    cursor: pointer;
}
</style>