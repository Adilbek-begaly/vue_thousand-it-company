<template>
    <div v-show="posts.length > 0">
        <h3 style="text-align: center;">Список постов</h3>
        <transition-group name="user-list">
            <post-item 
                :post="post" 
                :key="post.id" 
                v-for="post in posts"
                @remove="$emit('remove', post)"
            /> 
        </transition-group>
    </div>
    <h3  v-show="posts.length === 0" style="color: red; text-align: center;"> 
        Список постов пуст
    </h3>
     
</template>


<script>
import PostItem from './PostItem.vue'

export default {
  components: { PostItem },
    props: {
        posts: {
            type:Array,
            require:true,
        }
    }
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.5s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>