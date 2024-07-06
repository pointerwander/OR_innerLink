<template>
    <div id="badegView">
        <vs-alert :hidden-content.sync="hidden">
                    <template #title>
                        Vuesax Framework
                    </template>
                    Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                    created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                    developed from the frontend lover to the backend that wants to easily create
                    your visual approach to the end user
                </vs-alert>
        <vs-navbar center-collapsed v-model="tabIndex" ref="privateNav">
            <template #left>
                <img src="../assets/image/OPENROADLOGO.png" alt="" height="50px" width="50px" >
            </template>
            <vs-navbar-item :active="tabIndex == 'indexone'" id="indexone" @Click="ChangeTabIndex('indexone')">
                任务勋章
            </vs-navbar-item>
            <vs-navbar-item :active="tabIndex == 'indextwo'" id="indextwo" @Click="ChangeTabIndex('indextwo')">
                成就勋章
            </vs-navbar-item>
        </vs-navbar>
        <div id="content" :style="`margin-top: ${marginTopValue}px`">

            <div v-show="tabIndex == 'indexone'">
                <div id="badegOne" v-for="(index,keys) in badegList" :key="keys">
                    <img :src="badegList[keys].pic" width="32px" @click="isShowBadegInformation = !isShowBadegInformation">
                <h4>{{ badegList[keys].bname }}</h4>
                <vs-dialog scroll overflow-hidden not-close auto-width v-model="isShowBadegInformation">
                    <template #header>
                        <h3>
                            再这样呢
                        </h3>
                    </template>
                    <div class="con-content">
                        <img src="../assets/image/OPENROADLOGO.png">
                        <h4>
                            恭喜你已获得再这样女王称号
                        </h4>
                    </div>
                </vs-dialog>
                
                </div>
            </div>

        </div>

    </div>
</template>
<script>
export default {
    name: "badegView",
    data() {
        return {
            hidden: true,
            marginTopValue: 0,
            active: 0,
            tabIndex: '',
            isShowBadegInformation: false,
            badegList: [
                { pic: require("../assets/image/tuojie_logo.png"), bname: "再这样呢" },
                { pic: require("../assets/image/tuojie_logo.png"), bname: "人机" },
                { pic: require("../assets/image/tuojie_logo.png"), bname: "滚" }
            ],
        }
    },
    mounted() {
        this.marginTopValue = this.$refs.privateNav.$el.offsetHeight;
    },
    methods: {
        ChangeTabIndex(index) {
            console.log(index);
            this.tabIndex = index
            console.log(this.tabIndex);
        }
    }
}
</script>
<style>
p {
    color: white;
    font-size: 25px;
    font-family: 宋体;
    font-weight: bolder;
}
.con-content{
    text-align: center;
}
.con-content img{
    display: inline-block;
    height: 65px;
    width: 65px;
}
</style>