<template>
    <div class="app1">
        <div class="uesr-info">
            <img src="../assets/image/OPENROADLOGO.png" alt="avatar" class="avatar">
            <h1>{{ username }}</h1>
            <p>已点亮{{ badegCount }}枚徽章</p>
            <hr>
            <p>┄活跃勋章┄</p>
        </div>
        <div class="badeg-list">
            <div v-for="(body,index) in badegs" :key="index" class="badeg" @click='changeBadegInformationShow(index)'>
                <img :src="badegs[index].image" :alt="badegs[index].description" class="badeg-icon" >
                <div class="badge-info">
                    <h2>{{ badegs[index].name }}</h2>
                    <p>{{ badegs[index].description }}</p>
                </div>
                    <vs-dialog scroll overflow-hidden not-close auto-width v-model="badegs[index].isShow">
                    <template #header>
                        <h3>
                            {{ badegs[index].name }}
                        </h3>
                    </template>
                    <div class="con-content">
                        <img src="../assets/image/OPENROADLOGO.png" width="32">
                        <h4>
                            {{ badegs[index].introduce }}
                        </h4>
                    </div>
                </vs-dialog>
            </div>
            </div>
        </div>
</template>
<script>
export default{
    data(){
        return{
            username:'范钰晶',
            badegCount:20,
            badegs:[
                {name:'再这样呢', description:'',introduce:'恭喜你获得再这样女王称号', image:require("../assets/image/zaizheyang.jpg"),isShow:false},
                {name:'人机', description:'', introduce:'恭喜你获得死人机称号', image:require("../assets/image/renjing.webp"),isShow:false},
                {name:'淡淡的', description:'', introduce:'恭喜你淡淡的', image:require("../assets/image/dandande.jpg"),isShow:false},
                {name:'抽象', description:'',introduce:'恭喜你获得抽象女王称号',  image:require("../assets/image/chouxiang.jpg"),isShow:false},
                {name:'浴巾', description:'',introduce:'恭喜你获得启麓CEO',  image:require("../assets/image/yujing.jpg"),isShow:false},
                {name:'启麓', description:'',introduce:'恭喜你获得陪伴小伙伴',  image:require("../assets/image/tuojie_logo.png"),isShow:false},
                {name:'睡觉', description:'',introduce:'恭喜你获得随地大小睡称号',  image:require("../assets/image/shuijiao.jpg"),isShow:false},
                {name:'生命力', description:'',introduce:'恭喜你生命力爆棚',  image:require("../assets/image/shengmingli.jpg"),isShow:false},
            ]
        };
    },
    methods:{
        changeBadegInformationShow(index){
            this.badegs[index].isShow = !this.badegs[index].isShow
        }
    }
};
</script>
<style>
.app1{
    font-family: Helvetica,Arial, Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.user-info{
    margin-bottom: 20px;
}
.avatar{
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.badeg-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.badeg{
    width: 150px;
    margin: 10px;
    padding: 10px;
    border: none;
    /* border: 1px solid #ddd; */
    border-radius: 16px;
}
.badeg img{
    border-radius: 50%;
    width: 115px;
    height: 115px;
}
.badeg-icon{
    width: 25px;
    height: 25px;
}
.con-content{
    text-align: center;
    width: 250px;
    height: 150px;
    font-size: 20px;
}
.con-content img{
    display: inline-block;
    height: 100px;
    width: 100px;
}
.badeg-list{
    border-radius: 50%;
}
.uesr-info,hr + p{
    font-size: 20px;
}
.uesr-info hr{
    opacity: 0.5;
}
</style>