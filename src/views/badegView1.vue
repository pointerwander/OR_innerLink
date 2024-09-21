<template>
    <div class="app1">
        <div class="uesr-info">
            <img src="../assets/image/OPENROADLOGO.png" alt="avatar" class="avatar">
            <h1>{{ username }}</h1>
            <div v-for="piece in pieces" :key="piece.id" class="piece" :style="piece.style">
            <div class="shining: isShining ">
                <img src="../assets/image/树叶.png" alt="avater" class="avatar">
            </div>
            </div>
            <p>已点亮{{ badegCount }}枚徽章</p>
        </div>
        <div class="content">
        <p>┄活跃勋章┄</p>
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
        </div>
</template>
<script>
export default{
    data(){
        return{
            pieces:[],
            username:'小鹿',
            badegCount:20,
            badegs:[
                {name:'再这样呢', description:'',introduce:'恭喜你获得再这样女王称号', image:require("../assets/image/zaizheyang.jpg"),isShow:false},
                {name:'人机', description:'', introduce:'恭喜你获得死人机称号', image:require("../assets/image/renjing.webp"),isShow:false},
                {name:'淡淡的', description:'', introduce:'恭喜你淡淡的', image:require("../assets/image/dandande.jpg"),isShow:false},
                {name:'抽象', description:'',introduce:'恭喜你获得抽象女王称号',  image:require("../assets/image/chouxiang.jpg"),isShow:false},
                {name:'学习标兵', description:'',introduce:'恭喜你获得学习标兵',  image:require("../assets/image/yujing.jpg"),isShow:false},
                {name:'启麓', description:'',introduce:'恭喜你获得陪伴小伙伴',  image:require("../assets/image/tuojie_logo.png"),isShow:false},
                {name:'睡觉', description:'',introduce:'恭喜你获得随地大小睡称号',  image:require("../assets/image/shuijiao.jpg"),isShow:false},
                {name:'生命力', description:'',introduce:'恭喜你生命力爆棚',  image:require("../assets/image/shengmingli.jpg"),isShow:false},
            ]
        };
    },
    mounted(){
        this.generatePieces();
    },
    methods:{
        changeBadegInformationShow(index){
            this.badegs[index].isShow = !this.badegs[index].isShow
        },
        generatePieces(){
            for (let i=0; i<10; i++){
                this.pieces.push({
                    id: i,
                    style: this.getPieceStyle()
                });
            }
        },
        getPieceStyle(){
            const size = Math.random()*5 + 5 + 'px';
            const left = Math.random()*100 + 'vw';
            const top = '-10vh';
            const duration = Math.random()*8 + 10 + 's';
            const delay = Math.random()*2 + 's';

            return{
                width:size,
                height:size,
                left:left,
                top:top,
                AnimationDuration:duration,
                AnimationDelay:delay,
                backgroundColor:'gold',
                borderRadius:Math.random()*100 + '%',
                position:'absolute',
            };
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

.piece{
    animation: fall linear infinite;
    filter:blur(1.5px);
    z-index: -100;
}

@keyframes fall{
    0%{
        top:-20vh;
        opacity: 1;
    }
    100%{
        top: 105vh;
        opacity: 0;
    }
}

.content{
    background: linear-gradient(to bottom,rgb(240, 247, 180),rgb(222, 222, 222));
    height: 100%;
    border: 1px solid #ddd;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 1);
    border-radius: 10px 10px 0 0;
}

.user-info{
    margin-bottom: 20px;
}

.uesr-info h1{
    font-family: 微软雅黑;
    font-size: 32px;
}
.uesr-info p{
    font-size: 19px;
    color: #737373;
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
    border-radius: 16px;
}
.badge-info h2{
    font-size: 24px;
    font-family: 微软雅黑;
    color: #2c3e50;
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
.uesr-info, hr + p{
    font-size: 20px;
}
.uesr-info hr{
    opacity: 0.5;
}
</style>