<template>
        <el-card class='box-card'>
        <div class="you2">
                <div>
                    <el-button type="primary" icon="search" @click="show = !show">(淡入淡出))</el-button>
                        <div>
                                <transition name="el-fade-in-liner">
                                        <div v-show="!show" class='transition-box'>
                                                <div id = "ref">
                                                        <ol>
                                                                <li v-for='article in articles'>
                                                                         {{article.title}}
                                                                </li>
                                                         </ol>
                                                </div>
                                        </div>
                                </transition>
                        </div>
                </div>
                <div>
                        <el-button type="success" @click="reverseMsg">{{(msg2)}}</el-button>
                        <div>
                                <el-collapse-transition>
                                        <div v-show ="!show2">
                                               <div id = "ref">
                                                        <ol>
                                                                <li v-for='article in articles'>
                                                                         {{article.title}}
                                                                </li>
                                                         </ol>
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
                show2:true,
                msg2:"折叠展开",
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
},
         methods:{
                reverseMsg:function(){
                        this.msg2 = this.msg2.split('').reverse().join(),
                        this.show2 = !this.show2
                }      
        },
}
</script>