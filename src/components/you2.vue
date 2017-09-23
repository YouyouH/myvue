<template>
        <el-card class='box-card'>
        <div class="you2">
                <div>
                    <el-button @click="show = !show">点击获取豆瓣热门电影</el-button>
                        <div>
                                <transition name="el-fade-in-liner">
                                        <div v-show="!show" class='transition-box'>
                                                <ul>
                                                         <li v-for='article in articles'>
                                                                {{article.title}}
                                                         </li>
                                                </ul>
                                        </div>
                                </transition>
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
                show:true
                }
        },
        mounted:function(){
                this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=20', {}, {
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