<template>
        <div class="you1">
                <h1>you1</h1>
                <p>{{msg}}</p>
                <douban></douban>
        </div>
       
</template>



<script>
import you2 from '@/components/you2'
 
export default{
        name:'you1',
        data:function(){
                return{
                        msg:'豆瓣评分'
                }
        },
        commponents:{
                'douban':you2
        }
}
</script>