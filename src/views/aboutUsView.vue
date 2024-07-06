<template>
  <div id="aboutUs">

    <!-- <div id="CompanyImage">
      <img src='https://www.tencent.com/img/banners/brief-1.jpg' style="width: calc(100%);" />
    </div>

    <div id="CompanyProfile" style="padding: 70px;">
      <h1>公 司 简 介</h1>
      <h3><strong>指针漫游是一家基于AI提供个性化教育服务的互联网科技公司，用创新的产品帮助每个人达成目标。</strong></h3>
      <p>指针漫游最先由广东理工职业学院学子提起，在学校内获得成立。</p>
    </div>

    <div id="CompanyDeeds" style="padding: 70px;">
      <h1>公 司 事 迹</h1>
      <vs-card-group>
        <vs-card v-for="body in theCompanyDeedsContent" :key="body.id" type="1">
          <template #title>
            <h2>{{ body.title }}</h2>
          </template>

          <template #img>
            <img :src="body.pic" :alt="body.text">
          </template>

          <template #text>
            <p style="font-size: 20px;">{{ body.text }}</p>
          </template>
        </vs-card>
      </vs-card-group>
    </div>

    <div id="ProfessionalTeam" style="padding: 70px;">
      <h1>专 业 团 队</h1>
      <vs-avatar-group float max="8">
        <vs-avatar badge badge-position="bottom-left" badge-color="rgb(59,222,200)" size="160"
          v-for="body in theProfessionalTeamContent" :key="body.id" style="margin: 10px;">
          <img :src="body.pic" alt="">
          <template #badge>
            <vs-tooltip color="rgb(59,222,200)" border-thick style="padding: 10px;">
              <i style="font-size: 20px;">{{ body.text }}</i>
              <template #tooltip>
                {{ body.text }}
              </template>
            </vs-tooltip>
          </template>
        </vs-avatar>
      </vs-avatar-group>



    </div>

    <div id="ContactInformation" style="padding: 70px;">
      <h1>联 系 我 们</h1>
      <template>
        <vs-row justify="space-between">
          <vs-col w="3" v-for="body in theContactInformationContent" :key="body.id">
            <vs-alert color="rgb(59,222,200)" shadow relief style="max-width: 300px;min-height: 85px;">
              <template #title>
                <h2>{{ body.title }}</h2>
              </template>
              <i style="font-size: 20px;">{{ body.text }}</i>
            </vs-alert>
          </vs-col>
        </vs-row>
      </template>
    </div> -->

    <!--  创作者数据  -->
    <vs-card type="3">
      <template #title>
        <p style="font-size: 32px;"><b>Sen70s</b></p>
      </template>

      <template #img>
        <img
          src="https://cdn-static.sspai.com/page/prime_s03/build/assets/images/page/rights/account/prime.png?v=1.0.49"
          alt="头像" style="width: 64px;">
      </template>

      <template #text>
        <vs-checkbox checked v-model="CheckboxIsChecked">
          <template #icon>
            <i class='bx bx-universal-access'></i>
          </template>
          粉丝数量:90K
        </vs-checkbox>
        <vs-checkbox checked v-model="CheckboxIsChecked">
          <template #icon>
            <i class='bx bx-book-reader'></i>
          </template>
          阅读量:90K
        </vs-checkbox>
        <vs-checkbox checked v-model="CheckboxIsChecked">
          <template #icon>
            <i class='bx bx-like'></i>
          </template>
          点赞量:1000
        </vs-checkbox>

        <vs-checkbox checked v-model="CheckboxIsChecked">
          <template #icon>
            <i class='bx bx-book-open'></i>
          </template>
          作品数:1000
        </vs-checkbox>
      </template>

      <template #interactions>
        <vs-button danger icon style="margin-bottom: 25px;">
          <i class='bx bx-heart'></i>
          发布新作品
        </vs-button>
      </template>
    </vs-card>

    <!-- 近期数据 -->
    <h3 style="margin-top:20px;">
      近期数据
    </h3>
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th>
            文章名称
          </vs-th>
          <vs-th>
            阅读量
          </vs-th>
          <vs-th>
            评论数
          </vs-th>
          <vs-th>
            点赞数
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in worksData" :data="tr">
          <vs-td>
            {{ tr.title }}
          </vs-td>
          <vs-td>
            {{ tr.read }}
          </vs-td>
          <vs-td>
            {{ tr.comment }}
          </vs-td>
          <vs-td>
            {{ tr.like }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>

    <!-- 创作者活动 -->
    <h3 style="margin-top:20px;">
      创作者活动
    </h3>

    <vs-card-group>
      <vs-card type="4" v-for="(i,key) in 6" :key="key">
        <template #title>
          <h3>活动{{ i }}</h3>
        </template>
        <template #img>
          <img
            src="https://cdn-static.sspai.com/page/prime_s03/build/assets/images/page/rights/gift/box-open.png?v=1.0.49"
            alt="" style="height: 100%;">
        </template>
        <template #text>
          <p>
            夏日大挑战，启麓与你同在！！！！！！！！！！
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bxs-hot'></i>
            500W
          </vs-button>
        </template>
      </vs-card>
    </vs-card-group>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {
      ShowTheContactInformation: {
        title:"媒体问询",text:"Interview@tuojiekj.top"
      },
      theCompanyDeedsContent: [{
        pic: require("../assets/image/wp_logo.png"),
        title: "2023.09.01",
        text: "拓界团队成立"
      }, {
        pic: require("../assets/image/openroad_logo.png"),
        title: "2023.09.02",
        text: "启麓OpenRoad·项目启动"
      }, {
        pic: require("../assets/image/wp_logo.png"),
        title: "2024.02.22",
        text: "指针漫游成立，拓界团队成为旗下创新创业团队"
      }],
      theProfessionalTeamContent: [{
        pic: "http://q1.qlogo.cn/g?b=qq&nk=2985222366&s=100",
        text: "创始人·CEO"
      }, {
        pic: "http://q1.qlogo.cn/g?b=qq&nk=3565107517&s=100",
        text: "COO"
      }, {
        pic: "http://q1.qlogo.cn/g?b=qq&nk=1018907534&s=100",
        text: "CMO"
      }, {
        pic: "http://q1.qlogo.cn/g?b=qq&nk=2982134479&s=100",
        text: "CIO"
      }, {
        pic: "http://q1.qlogo.cn/g?b=qq&nk=2310369679&s=100",
        text: "CTO"
      }, {
        pic: "http://q1.qlogo.cn/g?b=qq&nk=1977830771&s=100",
        text: "CD"
      }, {
        pic: "http://q1.qlogo.cn/g?b=qq&nk=1909791401&s=100",
        text: "TF"
      }],
      theContactInformationContent:[{
        title:"媒体问询",text:"Interview@tuojiekj.top"
      },{
        title:"招聘相关",text:"HR@tuojiekj.top"
      },{
        title:"广告合作",text:"Advertising@tuojiekj.top"
      },{
        title:"廉洁举报",text:"Compliance@tuojiekj.top"
      }],
      CheckboxIsChecked:true,
      worksData: [
        {
          "title": "你好，启麓！",
          "read": "90k",
          "comment": "19K",
          "like": "20k"
        },
        {
          "title":"你好，启麓！",
          "read":"90k",
          "comment":"19K",
          "like":"20k"
        },
        {
          "title": "你好，启麓！",
          "read": "90k",
          "comment": "19K",
          "like": "20k"
        },
        {
          "title":"你好，启麓！",
          "read":"90k",
          "comment":"19K",
          "like":"20k"
        },
        {
          "title": "你好，启麓！",
          "read": "90k",
          "comment": "19K",
          "like": "20k"
        }
      ]
    }
  },

  mounted() {
  },
  
  onMounted(){
  },

  methods:{
    ShowContactInformation(index){
      this.ShowTheContactInformation = this.theContactInformationContent[index]
    }
  }

}
</script>

<style>
/* #aboutUs{
  background: url("https://www.tencent.com/img/banners/brief-1.jpg");
  background-size: 100%;
} */

</style>