<template>
        <el-card class='box-card'>
        <div class="you2">
                <div>
                    <el-button type="primary" icon="search" @click="show = !show">(淡入淡出))</el-button>
                        <div>
                                <transition name="el-fade-in-liner">
                                        <div v-show="!show" class='transition-box'>
                                                <div id = "ref">
                                                        <ul>
                                                                <li v-for='article in articles'>
                                                                         {{article.title}}
                                                                </li>
                                                         </ul>
                                                </div>
                                        </div>
                                </transition>
                        </div>
                </div>
                <div>
                        <el-button type="success" @click="show2 = !show2">(展开折叠)</el-button>
                        <div>
                                <el-collapse-transition>
                                        <div v-show ="!show2">
                                               <div id = "ref">
                                                        <ul>
                                                                <li v-for='article in articles'>
                                                                         {{article.title}}
                                                                </li>
                                                         </ul>
                                                </div>
                                        </div>
                                </el-collapse-transition>
                        </div>
                </div>
        </div>
        </el-card>
</template>

<script>
export default{
        name:'you2',
        data:function(){
                return {articles:[],
                show:true,
                show2:true
                }
        },
        mounted:function(){
                this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=5', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response){
            this.articles=response.data.subjects
    },function(response){
           console.log(response) 
    });
        }
}
</script>