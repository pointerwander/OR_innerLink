<template>
    <div class="thirdList">
        <div class="thirdtop">
            <h2>第三方信息共享清单</h2>
            <p>当你使用第三方提供的服务时，我们会在获得或确保第三方获得你的授权同意后，以及其他符合法律法规规定的情形下共享对应信息。你可以通过本清单中列举的相关信息了解第三方会如何处理你的个人信息。我们也会对第三方获取个人信息的行为进行严格约束，以保护你的个人信息安全。
            </p>
            <p>为保障启麓OpenRoad稳定运行或实现相关功能，我们还可能会接入由第三方提供的软件开发包（SDK）实现前述目的。我们对接入的相关第三方SDK同时在以下清单中列明。你可以通过目录中提供的链接或者路径查看第三方的数据使用和保护规则。请注意，第三方SDK可能由于版本升级、策略调整等原因导致其个人信息处理类型发生变化，请以其公示的官方说明为准。
            </p>
        </div>
        <div class="List">
            <div v-for="(body, index) in Lists" :key="index" class="Lists">
                <div class="lists-info">
                        <h2>{{ Lists[index].name }}</h2>
                        <p>{{ Lists[index].description }}</p>
                        <P>{{ Lists[index].information }}</P>
                        <P>{{ Lists[index].information1 }}</P>
                        <P>{{ Lists[index].information2 }}</P>
                        <P>{{ Lists[index].information3 }}</P>
                        <p>{{ Lists[index].information4 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "thirdInformation",
    data() {
        return {
            Lists: [
                {
                    name: "QQ邮箱一键登录",
                    description: '第三方主体：深圳市腾讯计算机系统有限公司',
                    information: '共享的信息：终端设备唯一标识符（IDFV、OAID、IMEI、MEID、IMSI）、mac地址、操作系统版本、设备品牌及型号、设备配置、运营商类型、应用信息（应用名、应用版本号)',
                    information1: '使用场景：用户创立账号',
                    information2: '使用目的：登录使用',
                    information3: '共享方式：SDK本机采集',
                    information4:'第三方隐私链接：',
                    isShow: false
                },
                {
                    name: "广告服务",
                    description: '第三方主体：广告主和/或其委托的代理商、第三方广告监测服务商',
                    information: '共享的信息：如IDFA、OAID等设备标识符；如硬件型号、操作系统等设备信息；姓名、电话等用户主动填写的信息',
                    information1: '使用场景：广告投放过程中',
                    information2: '使用目的：程序化广告推荐、广告归因、广告落地页信息收集、广告监测',
                    information3: '共享方式：后台接口传输/表单传输/终端发起传输',
                    information4:'第三方隐私链接：',
                    isShow: false
                },
            ]
        };
    },
}
</script>

<style>
.thirdtop h2 {
    text-align: center;
}

.thirdtop p {
    text-align: left;
    margin: 3px;
    padding: 3px;
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 1.6;
    font-family: 微软雅黑 Light;
}

.lists-info {
    font-family: Helvetica, Arial, Helvetica, sans-serif;
    font-size: 13px;
    margin: 3px;
    color: black;
}

.lists-info h2{
    margin-bottom: -7px;
}

.lists-info p {
    font-size: 15px;
    margin-bottom: -8px;
}

.lists-info p:last-child{
    margin-bottom: 22px;
}
</style>