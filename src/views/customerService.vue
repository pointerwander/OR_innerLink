<template>
    <div class="top">
        <div class="title">
            <h2>Hi，小鹿</h2>
            <p>欢迎来到客服中心，已为您定制如下内容</p>
        </div>
        <div class="card">
            <h3>自助服务</h3>
            <div v-for="(body, index) in cards" :key="index" class="cards">
                <img :src="cards[index].images" :alt="cards[index].description" class="cards-icon">
                <div class="cards-info">
                    <h2>{{ cards[index].name }}</h2>
                    <p>{{ cards[index].description }}</p>
                </div>
            </div>
        </div>
        <div class="cards1">
            <div class="post">
                <vs-input v-model="value" placeholder="搜索问题" />
            </div>
            <vs-table>
            <template #thead>
                <vs-tr>
                    <vs-th>
                        猜你想问
                    </vs-th>
                </vs-tr>
            </template>
            </vs-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "customerService",
    data() {
        return {
            value: '',
            cards: [
                { name: "找回账号", description: '', images: require("../assets/image/zaizheyang.jpg"), isShow: false },
                { name: "清理缓存", description: '', images: require("../assets/image/zaizheyang.jpg"), isShow: false },
                { name: "网络诊断", description: '', images: require("../assets/image/zaizheyang.jpg"), isShow: false },
                { name: "修改号码", description: '', images: require("../assets/image/zaizheyang.jpg"), isShow: false },
                { name: "历史记录", description: '', images: require("../assets/image/zaizheyang.jpg"), isShow: false },
                { name: "支付问题", description: '', images: require("../assets/image/zaizheyang.jpg"), isShow: false },
                { name: "登陆保护", description: '', images: require("../assets/image/zaizheyang.jpg"), isShow: false },
                { name: "注册账号", description: '', images: require("../assets/image/zaizheyang.jpg"), isShow: false },
            ]
        }
    }
}
</script>

<style>
 .top{
    background: radial-gradient(rgb(161, 237, 140), rgb(255, 255, 255));;
    /* background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(161, 237, 140)); */
                /* linear-gradient(to right, rgb(126, 163, 106), rgb(83, 125, 83)); */
 }

.title h2 {
    text-align: left;
    font-weight: bolder;
}

.title p {
    font-size: 12px;
    color: #2c3e50;
}

.card {
    margin: 3px;
    padding: 3px;
    height: 260px;
    background-color: white;
    border-radius: 8px;
}

.cards1 {
    margin: 3px;
    margin-top: 20px;
    padding: 3px;
    height: 260px;
    background-color: white;
    border-radius: 8px;
}

.post {
    margin-top: 10px;
    padding: 5px;
}

.cards {
    display: inline-block;
    margin-right: 11px;
    margin-left: 11px;
}

.cards h3 {
    margin: 3px;
}

.cards-icon {
    width: 25px;
    height: 25px;
}

.cards img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: 5px;
    margin-bottom: -5px;
}

.cards-info {
    font-family: Helvetica, Arial, Helvetica, sans-serif;
    font-size: 10px;
    margin: 3px;
    color: black;
}
</style>