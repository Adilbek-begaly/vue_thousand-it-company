<template> 
    <div class="post-page">
        <div class="post-input-btn">
            <input class="search-input" v-model="search" placeholder="Поиск...." />
            <button class="btn" @click="showDialog">Создать пост</button>
        </div>
        <div class="dialog" v-show="isModal" @click="hideDialog">
            <div class="dialog_content" @click.stop>
                <post-form @create="createPosts"/> 
            </div>
        </div>
        
    
        <post-list :posts="searchPosts" @remove="removePost" v-if="!isPostLoading"/>
        <div v-else><loader-post/></div>
        <div class="observer" ref="observer"></div>
        <!-- <div class="page_wrapper">
            <div 
                class="page" 
                :key="pageNumber" 
                v-for="pageNumber in totalPage"
                :class="{'current-page': page === pageNumber}"
                @click="changePage(pageNumber)"
            >
                {{pageNumber}}
            </div>
        </div> -->
    </div>
</template>



<script>
import PostList from '@/components/Posts/PostList.vue'
import PostForm from '@/components/Posts/PostForm.vue'
import axios from 'axios'
import LoaderPost from '@/components/Loader/LoaderPost.vue'



export default {
    components:{
        PostList,
        PostForm,
        LoaderPost,
    },

    data() {
        return {
            posts: [],
            isPostLoading: false,
            isModal: false,
            search: '',
            page: 0,
            limit: 10,
            totalPage: 0,
        }
    },
    methods: {
        createPosts(post){
            this.posts.push(post)
            this.isModal = false
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        changePage(pageNumber){
            this.page = pageNumber
            this.fetchPosts()
        },
        hideDialog() {
            this.isModal = false
        },
        showDialog(){
            this.isModal = true
        },

        async fetchPosts() {
            try { 
                this.page += 1
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {_page: this.page, _limit: this.limit}})
                this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data]
                this.isPostLoading = false
            } catch(e) {
                console.log('erroe', e)
            } 
        },
        
    },
    mounted() {
        this.fetchPosts()
        console.log(this.$refs.observer);
        const  options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const  callback = (entries) => {
            if(entries[0].isIntersecting && this.page < this.totalPage){
                this.fetchPosts()
            }
        };
        const  observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
    },
    computed: {
        searchPosts() {
            return [...this.posts].filter(post => post.title.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
} 
</script>



<style scoped>
.post-page {
    max-width: 880px;
    margin: auto;
}

.page_wrapper{
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid teal;
    padding: 10px;
    margin: 0 1px;
    cursor: pointer;
}
.current-page {
    border: 2px solid turquoise;
}
.observer {
    height: 30px;
}
.dialog {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog_content {
    margin: auto;
    background: white;
    border-radius: 15px;
    min-height: 50px;
    min-width: 360px;
    padding: 20px;
}
.post-input-btn{
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search-input {
    margin-left: 100px;
    width: 250px;
    border: 1px solid teal;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 10px;

}
.btn {
    padding: 10px 15px;
    background: none;
    border: 1px solid teal;
    color: teal;
    border-radius: 10px;
    font-size: 14px;
    margin-right: 100px;
    cursor: pointer;
}
</style>