<template>
    <div class="top">
        <div class="title">
            <h2>Hi，小鹿</h2>
            <p>欢迎来到客服中心，已为您定制如下内容</p>
        </div>
        <div class="card">
            <h3>自助服务</h3>
            <vs-row>
                <vs-col v-for="(body, index) in cards" :key="index" class="cards" vs-type="flex" vs-justify="center"
                    vs-align="center" w="3">
                    <div>
                        <img :src="cards[index].images" :alt="cards[index].description" class="cards-icon">
                        <div class="cards-info">
                            <p>{{ cards[index].name }}</p>
                            <p>{{ cards[index].description }}</p>
                        </div>
                    </div>
                </vs-col>

            </vs-row>

        </div>
        <div class="cards1">
            <div class="post">
                <vs-input v-model="value" placeholder="搜索问题">
                    <template #icon>
                        <i class='bx bx-search-alt'></i>
                    </template>
                </vs-input>
            </div>
            <div class="question">
                <vs-table>
                    <template #thead>
                        <vs-tr>
                            <vs-th>
                                猜你想问
                            </vs-th>
                        </vs-tr>
                    </template>
                    <template #tbody>
                        <vs-tr :key="i" v-for="(tr, i) in users">
                            <vs-td>
                                {{ tr.name }}
                            </vs-td>
                            <vs-td>
                                {{ tr.email }}
                            </vs-td>
                            <vs-td>
                                {{ tr.id }}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
            <p>查看更多 ></p>
        </div>
        <div class="footer"  >
            <vs-row justify="space-around">
                <vs-button shadow v-for="(col, index) in cols" :key="index" class="col" vs-type="flex"
                    vs-justify="center" vs-align="center" w="3">
                    <h3 >
                        <a v-html="col.html"></a> 
                        {{ col.name }}
                    </h3>
                </vs-button>
                
            </vs-row>
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
            ],
            editActive: false,
            edit: null,
            editProp: '',
            search: '',
            allCheck: false,
            page: 1,
            max: 2,
            active: 0,
            selected: [],
            users: [
                { "id": "", "name": "1. 如何换手机号？" },
                { "id": "", "name": "2. 账号无法登陆怎么办？" },
                { "id": "", "name": "3. 为什么账号信息被修改过？" },
                { "id": "", "name": "4. 如何开通会员？" },
                { "id": "", "name": "5. 如何开启登陆保护？" },
                { "id": "", "name": "6. 落叶积分是什么？" },
            ],
            cols: [
                { name: "提点建议", html:"<i class='bx bx-edit-alt bx-spin' ></i>"},
                { name: "联系客服", html:"<i class='bx bx-user-voice bx-spin' ></i>"},
                { name: "服务进度", html:"<i class='bx bx-objects-horizontal-left bx-spin bx-rotate-90' ></i>"}
            ]
        }
    }
}
</script>

<style>
.top {
    background: radial-gradient(rgb(161, 237, 140), rgb(255, 255, 255));
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
    background-color: white;
    border-radius: 8px;
}

.cards1 {
    margin-top: 20px;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
}

.question {
    margin-top: 5px;
    width: 100%;
}

.cards1 p {
    text-align: center;
    font-size: 12px;
    color: #2c3e50;
}

.post {
    margin-top: 10px;
    padding: 5px;
}

.cards {
    display: inline-block;
    text-align: center;
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

.cards-info p{
    font-size: 14px;
}

.footer {
    text-align: center;
    color: #2c3e50;
    padding: 10px;
    margin-top: 20px;
    background-color: white;
    border-radius: 16px;
}
</style>