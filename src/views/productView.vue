<template>
    <div class="grid" id="productView" style="min-height: calc(100vh);margin-top: 60px;">
        <vs-row style="padding-top: 50px;">
            <vs-col w="10">
                <vs-row justify="space-around" style="padding: 70px;">
                    <vs-col w="6" style="padding-left: 130px;">
                        <vs-row class="mh" align="center" justify="space-around" direction="column">
                            <vs-col>
                                <img :src="productContentList[choiceTheProduct].pic"
                                    style="border-radius: 30%;max-width: 82px;">
                            </vs-col>
                            <vs-col>
                                <h1>
                                    {{ productContentList[choiceTheProduct].pname }}
                                </h1>
                            </vs-col>
                            <vs-col style="white-space: pre-line">
                                <p>
                                    {{ productContentList[choiceTheProduct].info }}
                                </p>
                            </vs-col>
                            <vs-col>
                                <p>更多信息，请查看：</p>
                                <a :href="productContentList[choiceTheProduct].url">
                                    {{ productContentList[choiceTheProduct].url }}
                                </a>
                            </vs-col>
                        </vs-row>
                    </vs-col>
                    <vs-col w="6">
                        <img :src="productContentList[choiceTheProduct].pic"
                                    style="border-radius: 30%;max-width: 500px;">
                    </vs-col>
                </vs-row>





            </vs-col>
            <vs-col w="2">
                <vs-row class="mh" align="center" justify="space-around" direction="column">
                    <vs-col w="2" v-for="(body, index) in productList" :key="body.id">
                        <div class="center">
                            <vs-button circle icon floating border color="rgb(59,222,200)"
                                @click="choiceTheProductfunction(index)">
                                <img :src="body.pic" alt="" width="46px" style="border-radius: 50%;">
                            </vs-button>
                        </div>
                    </vs-col>
                </vs-row>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {
    name: "productView",
    data() {
        return {
            choiceTheProduct: 1,
            productList: [
                { pic: require("../assets/image/tuojie_logo.png"), pname: "启麓AI" },
                { pic: require("../assets/image/tuojie_logo.png"), pname: "小鹿课表" },
                { pic: require("../assets/image/tuojie_logo.png"), pname: "拓界浏览器HM" }
            ],
            productContentList: [{
                pic: require("../assets/image/tuojie_logo.png"), pname: "启麓AI",
                info: "有问题？！问问小鹿！\n 知识问答||智能创作||语音聊天",
                url: "http://www.openroadai.com"
            }, {
                pic: require("../assets/image/tuojie_logo.png"), pname: "小鹿课表",
                info: "不记得上什么课了？\n 日程总是忘记？\n 小鹿课表帮你解决\n 智能日程规划||教务系统同步",
                url: "http://tasks.openroadai.com"
            }, {
                pic: require("../assets/image/tuojie_logo.png"), pname: "拓界浏览器HM",
                info: "鸿蒙系统的原生浏览器\n 简洁||快速||小巧",
                url: "http://www.tjBrowser.com"
            }]
        }
    },
    mounted() {

    },
    methods: {
        choiceTheProductfunction(index) {
            this.choiceTheProduct = index
            console.log(this.choiceTheProduct);
        }
    }
}
</script>