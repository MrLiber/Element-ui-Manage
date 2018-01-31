<template>
  <div class="wrap">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link to="goShoping"><img src="../../../static/imgs/goshop_57.jpg">购物</router-link>
      <router-link to="shopingCar"><img src="../../../static/imgs/goshop_59.jpg">购物车</router-link>
      <router-link to="myShop"><img src="../../../static/imgs/goshop_61.jpg">店铺管理</router-link>
      <router-link to="userCenter"><img src="../../../static/imgs/goshop_63.png">个人中心</router-link>
    </div>
  </div>
</template>

<script>
    
</script>

<style>
  .wrap{
    width: 100%;
    display: flex;
    flex-direction: column;    
  }
  .main{
    width: 100%;
    flex:1;
    background: #dddddd;
    overflow-y: scroll;
  }
  .footer{
    display: flex;
    height: 45px;
    width: 100%;
    padding-top: 5px;
    border-top: 1px solid #ccc;
  }

  .footer a{
    flex:1;
    text-align: center;
    color: #808080;
    font-size: 12px;
  }

  .footer img{
    width: 20px;
    height: 20px;
    display: block;
    margin: 0 auto;
  }

</style>
