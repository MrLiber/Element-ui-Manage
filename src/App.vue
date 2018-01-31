<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<script>
// import axios from "axios"
import {getList} from "./service/AppService"
export default {
  name: 'App',
  data:function(){
    return {

    }
  },
  created:function(){
    this.$router.replace('./loginRegister')
  }

}
</script>

<style lang="scss" scoped="" type="text/css">
  // @import "./style/common.scss";
</style>
