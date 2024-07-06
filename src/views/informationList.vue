<template>
    <div class="top">
        <div class="title">
            <h2>个人信息收集清单</h2>
            <p>你可以查阅启麓OpenRoad对你的个人信息的收集情况。以下只统计Android 7.0 及之后版本启麓OpenRoad所收集的信息。你使用旧版本期间的信息收集情况，启麓OpenRoad将无法完整统计到。
            </p>
        </div>
        <div class="time">
            <vs-row justify="flex-end">
                <vs-select placeholder="时间段" v-model="value">
                    <vs-option label="最近一年" value="1">
                        最近一年
                    </vs-option>
                    <vs-option label="最近三个月" value="2">
                        最近三个月
                    </vs-option>
                    <vs-option label="最近一个月" value="3">
                        最近一个月
                    </vs-option>
                    <vs-option label="最近7天" value="4">
                        最近7天
                    </vs-option>
                </vs-select>
            </vs-row>
        </div>
        <div class="neirong">
            <p>用户基本信息</p>
            <div class="for">
                <div v-for="(body, index) in lists" :key="index" class="lists">
                    <vs-alert :hidden-content.sync="lists[index].isHidden" color="dark">
                        <template #title>
                            {{ lists[index].name }}
                        </template>
                        <p>{{ lists[index].description }}</p>
                        <p>{{ lists[index].information }}</p>
                        <p>{{ lists[index].introduct }}</p>
                    </vs-alert>
                </div>
            </div>
        </div>
        <div class="neirong2">
            <p>用户服务内容与衍生信息</p>
            <div class="for1">
                <div v-for="(body, index) in lists1" :key="index" class="lists1">
                    <vs-alert :hidden-content.sync="lists1[index].isHidden" color="dark">
                        <template #title>
                            {{ lists1[index].name }}
                        </template>
                        <p>{{ lists1[index].description }}</p>
                        <p>{{ lists1[index].information }}</p>
                        <p>{{ lists1[index].introduct }}</p>
                    </vs-alert>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "informationList",
    data() {
        return {
            value: '',
            hidden: true,
            lists: [
                { name: '头像', description: '使用目的：用于社交展示', information: '使用场景：首次注册启麓OpenRoad时', introduct: '收集情况：0次', isHidden: true },
                { name: '名字', description: '使用目的：用于实名认证', information: '使用场景：首次注册启麓OpenRoad时', introduct: '收集情况：0次', isHidden: true },
                { name: '手机号', description: '使用目的：创建账号，实名认证', information: '使用场景：启麓OpenRoad账号创建，注册认证时', introduct: '收集情况：0次', isHidden: true },
                { name: '性别', description: '使用目的：用于社交展示', information: '使用场景：个人主页信息展示', introduct: '收集情况：0次', isHidden: true },
                { name: '地区', description: '使用目的：用于社交展示', information: '使用场景：个人主页信息展示', introduct: '收集情况：0次', isHidden: true },
                { name: '生日', description: '使用目的：用于生日祝福', information: '使用场景：用户变更生日信息时', introduct: '收集情况：0次', isHidden: true },
            ],
            lists1: [
                { name: '账号信息', description: '使用目的：用于实名认证，第三方登陆', information: '使用场景：首次注册启麓OpenRoad时，利用第三方账号创建账号，登陆注册绑定时', introduct: '收集情况：0次', isHidden: true },
                { name: '设备剪切板内容读取', description: '使用目的：用于内容粘贴', information: '使用场景：每次用户使用发布帖子、发表评论等功能时', introduct: '收集情况：0次', isHidden: true },
                { name: '评论数据', description: '使用目的：用于用户观点发表', information: '使用场景：有关评论页面信息展示或涉及评论功能时', introduct: '收集情况：0次', isHidden: true },
                { name: '服务日志', description: '使用目的：用于搜索历史记录', information: '使用场景：用户搜索记录回看，优化搜索结果排序、个性化推荐', introduct: '收集情况：0次', isHidden: true },
            ]
        }
    }
}
</script>

<style>
.title {
    font-family: Helvetica, Arial, Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.neirong p {
    font-size: 13px;
    font-weight: bold;
    text-align: left;
    color: #a8a8a8;
}

.lists {
    margin-bottom: 15px;
}

.time {
    text-align: right;
    margin-top: 30px;
}

.neirong2 {
    margin-top: 30px;
}

.neirong2 p {
    font-size: 13px;
    font-weight: bold;
    text-align: left;
    color: #a8a8a8;
}

.lists1 {
    margin-bottom: 15px;
}
</style>