<template>
  <div class="hidden" id="App">

    <vs-row class="mh" justify="space-between" direction="column">

      <vs-col>
        <vs-navbar target-scroll="#padding-scroll-content" hide-scroll center-collapsed fixed v-model="active"
          ref="navbar">
          <template #left>
            <h2><b>创作者中心</b></h2>
          </template>

          <template #right>
            <vs-button-group>
              <vs-button flat icon dark shadow>
                <i class='bx bxs-shapes'></i>
              </vs-button>
              <vs-button flat icon dark shadow @click="CloseSelf('js://webview?arg1=111&arg2=222')">
                <i class='bx bx-x-circle'></i>
              </vs-button>
            </vs-button-group>
          </template>
        </vs-navbar>
      </vs-col>

      <vs-col :style="`margin-top: ${navbarHeight}px`">
        <router-view></router-view>
      </vs-col>

    </vs-row>

  </div>
</template>



<script>
  export default {
    name:"App",
    data(){
      return{
        currentllyNavItem:"/",
        active: 'about',
        activenum:1,
        activeSidebar: false,
        value2:"",
        value: '1',
        navbarHeight:0
      }
    },
    mounted(){
      this.navbarHeight = this.$refs.navbar.$el.offsetHeight;
    },
    methods:{
      NavigationToPage(pathname){
        this.active = pathname
        if(pathname != this.currentllyNavItem){
          this.$router.replace(pathname)
          this.currentllyNavItem = pathname
        }else{
          return
        }
      },
      CloseSelf(url){
        document.location = url
      }
    }
  }
</script>

<style>
@import './assets/font/font.css';

#app {
  font-family: 'MiSans_re';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0073e6;
  background-color: #034a91;
}
</style>