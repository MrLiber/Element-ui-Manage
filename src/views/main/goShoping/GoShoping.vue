<template>
  <div class="box">
      <div class="goShop_input_box">
          <p class="topLeft"></p>
          <div class="searchBox">
              <input type="text" placeholder="搜索商品">
          </div>
          <p class="topRight"></p>
      </div>
      <!-- 轮播图 -->
      <div class="goShop_swiper_box">
          <img v-bind:src="src" alt="">
      </div>
      <!-- 分类 -->
      <div class="goShop_type_box">
          <ul> 
              <li v-for="item in typeList"><img v-bind:src="item.typeIcon" alt="">{{item.typeName}}</li>
          </ul>
      </div>
      <!-- 本周主打 -->
      <div class="goShop_this_week">
          <div class="title">
              <h5>本周主打</h5>
              <span>更多主打</span>
          </div>
          <div class="weekCube">
              <div class="weekCubeLeft">
                  <p class="black">日本2H2D黑玛卡</p> 
                  <p class="orange">秘鲁有机玛咖</p> 
                  <p class="orange">重振男人雄风</p>  
                  <img src="../../../../static/imgs/goshop_38.jpg" alt="">
              </div>
              <div class="weekCubeRight">
                  <div class="weekCubeRightTop">
                      <dl>
                          <dd>
                            <p class="black">MARUEI</p> 
                            <p class="black">青汁酵素(芒果味)</p> 
                            <p class="orange">塑形  调养  养颜</p> 
                          </dd>
                          <dt><img src="../../../../static/imgs/goshop_42.jpg" alt=""></dt>
                      </dl>
                  </div>
                  <div class="weekCubeRightBottom">
                      <div class="weekCubeRightBottomLeft">
                          <p class="black">星期10左旋肉碱</p>
                          <p class="orange">减肥瘦身</p> 
                          <img src="../../../../static/imgs/goshop_42.jpg" alt="">
                      </div>
                      <div class="weekCubeRightBottomRight">
                          <p class="black">星期10左旋肉碱</p>
                          <p class="orange">减肥瘦身</p> 
                          <img src="../../../../static/imgs/goshop_42.jpg" alt="">
                      </div>
                  </div>
              </div>
          </div>

      </div>
      <!-- 本月推荐 -->
      <div class="goShop_this_month">
          <div class="title">
              <h5>本月推荐</h5>
              <span>更多推荐</span>
          </div>          
            <dl>
                <dd> 
                <p class="black">青汁酵素(芒果味)</p> 
                <p class="orange">塑形  调养  养颜</p> 
                </dd>
                <dt><img src="../../../../static/imgs/goshop_46.jpg" alt=""></dt>
            </dl>
            <dl>
                <dd> 
                <p class="black">青汁酵素(芒果味)</p> 
                <p class="orange">塑形  调养</p> 
                </dd>
                <dt><img src="../../../../static/imgs/goshop_46.jpg" alt=""></dt>
            </dl>
            <dl>
                <dd> 
                <p class="black">青汁酵素(芒果味)</p> 
                <p class="orange">塑形  调养</p> 
                </dd>
                <dt><img src="../../../../static/imgs/goshop_46.jpg" alt=""></dt>
            </dl>
            <dl>
                <dd> 
                <p class="black">青汁酵素(芒果味)</p> 
                <p class="orange">塑形  调养</p> 
                </dd>
                <dt><img src="../../../../static/imgs/goshop_46.jpg" alt=""></dt>
            </dl>
      </div>

      <!-- 家庭套装 -->
      <div class="goshop_family">
          <div class="title">
              <h5>家庭套装</h5>
              <span>更多实惠</span>
          </div>
          <div class="familyList">
              <dl>
                  <dd>
                    <p class="black">星期10左旋肉碱</p>
                    <p class="orange">减肥瘦身</p> 
                  </dd>
                  <dt>
                      <img src="../../../../static/imgs/goshop_49.jpg" alt="">
                  </dt>
              </dl>
              <dl>
                  <dd>
                    <p class="black">星期10左旋肉碱</p>
                    <p class="orange">减肥瘦身</p> 
                  </dd>
                  <dt>
                      <img src="../../../../static/imgs/goshop_49.jpg" alt="">
                  </dt>
              </dl>
              <dl>
                  <dd>
                    <p class="black">星期10左旋肉碱</p>
                    <p class="orange">减肥瘦身</p> 
                  </dd>
                  <dt>
                      <img src="../../../../static/imgs/goshop_49.jpg" alt="">
                  </dt>
              </dl>
          </div>
      </div>

      <!-- 为您推荐 -->
      <div class="foryou">
          <span class="font">为您推荐</span>  
          <span class="line"></span>
      </div>
      
      <div class="foryou_list">
        <dl v-for="item in foryouList">
            <dt><img v-bind:src="item.foryouImg" alt=""></dt>
            <dd>
                <div class="ddLeft">
                    <p>{{item.foryouName}}</p>
                    <span>保税区</span>
                </div>
                <div class="ddRight">
                    <p>{{item.foryouPrice1}}</p>
                    <span>{{item.foryouPrice2}}</span>
                </div>
            </dd>
        </dl>
        
    </div>

  </div>
</template>

<script>
    export default{
        mounted: function() {
            var that = this;
            var obj = new Swiper();
            obj.init();
            function Swiper() {
                this.index = 0;
                this.init = function() {
                    var _this = this;
                    setInterval(function(){
                        that.src = that.imgList[_this.index];
                        _this.index++;
                        if(_this.index >= 3){
                            _this.index = 0;
                        }
                    },3000)
                }
            }
        },
        data: function() {
            return {
                src:"../../../../static/imgs/goshop_11.jpg",
                imgList:[
                    "../../../../static/imgs/goshop_11.jpg",
                    "../../../../static/imgs/goshop_10.png",
                    "../../../../static/imgs/goshop_12.png"
                ],
                // 类型数据
                typeList:[
                    {
                        typeIcon:'../../../../static/imgs/goshop_14.jpg',
                        typeName:'新品上架'
                    },
                    {
                        typeIcon:'../../../../static/imgs/goshop_17.jpg',
                        typeName:'排毒养颜'
                    },{
                        typeIcon:'../../../../static/imgs/goshop_20.jpg',
                        typeName:'减肥塑形'
                    },{
                        typeIcon:'../../../../static/imgs/goshop_22.jpg',
                        typeName:'女士调理'
                    },{
                        typeIcon:'../../../../static/imgs/goshop_29.jpg',
                        typeName:'运动营养'
                    },{
                        typeIcon:'../../../../static/imgs/goshop_30.jpg',
                        typeName:'心血管健康'
                    },{
                        typeIcon:'../../../../static/imgs/goshop_31.jpg',
                        typeName:'男士健康'
                    },{
                        typeIcon:'../../../../static/imgs/goshop_32.jpg',
                        typeName:'精品套装'
                    },
                ],
                // 为您推荐
                foryouList:[
                    {
                        foryouImg:'../../../../static/imgs/goshop_53.jpg',
                        foryouName:'日本2H2D 黑玛卡 强肾 滋补 60粒',
                        foryouPrice1:'￥219.00',
                        foryouPrice2:'￥596.00',
                    },{
                        foryouImg:'../../../../static/imgs/goshop_53.jpg',
                        foryouName:'日本2H2D 黑玛卡 强肾 滋补 60粒',
                        foryouPrice1:'￥219.00',
                        foryouPrice2:'￥596.00',
                    },{
                        foryouImg:'../../../../static/imgs/goshop_53.jpg',
                        foryouName:'日本2H2D 黑玛卡 强肾 滋补 60粒',
                        foryouPrice1:'￥219.00',
                        foryouPrice2:'￥596.00',
                    },{
                        foryouImg:'../../../../static/imgs/goshop_53.jpg',
                        foryouName:'日本2H2D 黑玛卡 强肾 滋补 60粒',
                        foryouPrice1:'￥219.00',
                        foryouPrice2:'￥596.00',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    /* 搜索栏 */
    .goShop_input_box{
        height: 30px;
        width: 100%;
        background: #CA3232;
        align-items: center;
        display: flex;
    }
    .goShop_input_box .topLeft{
        width: 20px;
        height: 20px;
        background: #f0f;
        margin-left: 10px;
        background: url("../../../../static/imgs/goshop_06.jpg") no-repeat;
        background-size: 100% 100%;
    }
    .goShop_input_box .searchBox{
        flex:1;
        height: 20px;
        background: #A22828;
        margin-left: 10px;
        margin-right: 10px;
        color: #DF5252;
        border-radius: 3px;
    }
    .goShop_input_box .searchBox input{
        border: 0;
        outline: 0;
        height: 20px;
        line-height: 20px;
        width: 100%;
        padding-left: 10px;
        background: none;
    }
    .goShop_input_box .topRight{
        width: 20px;
        height: 20px;
        background: url("../../../../static/imgs/goshop_03.jpg") no-repeat;
        background-size: 100% 100%;
        margin-right: 10px;
    }
    /* 轮播图 */
    .goShop_swiper_box{
        height: 170px;
        width: 100%;
        background: rgb(11, 206, 115);
    }
    .goShop_swiper_box img{
        width: 100%;
        height: 100%;
    }

    /* 类型 */
    .goShop_type_box{
        height: 140px;
        width: 100%;
        background: #ffffff;
        padding-bottom: 10px;
    }
    .goShop_type_box ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .goShop_type_box ul li{
        width: 25%;
        height: 70px;
        background: #ffffff;
        padding: 16px 6px;
        box-sizing: border-box;
        text-align: center;
    }
    .goShop_type_box ul li img{    
        height: 100%;
        width: auto;
        display: block;
        margin: 0 auto; 
    }
    .goShop_type_box ul li {
        font-size: 12px;
        color: #808080;
    }
    /* 本周主打 */
    .goShop_this_week{
        width: 100%;
        height: 200px;
        background: #fff;
    }
    /* 小标题 */
    .title{
        width: 100%;
        height: 26px;
        line-height: 26px;
        box-sizing: border-box;
        margin-top: 8px;
        display: flex;
        border-bottom: 1px solid #eeeeee;
    }
    .title h5{
        color: #C62323;
        padding: 0 10px;
        border-bottom: 1px solid #C62323;        
    }
    .title span{
        flex:1;
        font-size: 12px;
        text-align: right; 
        padding-right: 10px; 
        color: #808080;
    }
    .black{
        color: #292626;
    }
    .orange{
        color: #f58f09;
    }
    .weekCube{
        width: 100%;
        height: 150px;
        background: #fff;
        display: flex;
    }

    .weekCube .weekCubeLeft{
        width: 36%;
        height: 100%;
        background: #ffffff;
        padding: 8px;
        border-right: 1px solid #dddddd;        
    }

    .weekCube .weekCubeLeft img{
        width: auto;
        height: 60%;
        display: block;
    }

    .weekCube .weekCubeRight{
        width: 64%;
        height: 100%;
        background: #ffffff;
    }
    .weekCube p{
        font-size: 12px;
    }
    .weekCube .weekCubeRight{
        display: flex;
        flex-direction: column;
    }
    .weekCubeRightTop{
        height: 40%;
        width: 100%;
    }
    .weekCubeRightTop dl{
        width: 100%;
        display: flex;
    }
    .weekCubeRightTop dl dd{
        width: 100%;
        height: 100%;
    }
    .weekCubeRightTop img{
        width: 50%;
        height: 100%;
    }
    .weekCubeRightBottom{
        height: 60%;
        width: 100%;
        display: flex;
        border-top: 1px solid #dddddd;
    }
    .weekCubeRightBottom img{
        width: 50%;
        height: auto;
        margin: 0 auto;
    }
    .weekCubeRightBottomLeft{
        width: 50%;
        height: 100%;
        background: #ffffff;
        border-right: 1px solid #dddddd;
    }
    .weekCubeRightBottomRight{
        width: 50%;
        height: 100%;
    }
    
    /* 本月推荐 */
    .goShop_this_month{
        width: 100%;
        background: #ffffff;
        display: flex;
        flex-wrap: wrap;
    }

    .goShop_this_month dl{
        width: 49%;
        height: 60px;
        display: flex;
        border-right: 1px solid #ccc;
        border-top: 1px solid #ccc;
        background: #fff;
    }

    .goShop_this_month dl dd {
        width: 70%;
        height: 60px;
        font-size: 12px;
    }

    .goShop_this_month dl dd p{
        height: 14px;
        line-height: 14px;
    }

    .goShop_this_month dl dt{
        width: 30%;
        height: 60px;
    }

    .goShop_this_month dl dt img{
        width: auto;
        height: 80%;
    }

    /* 家庭套装 */
    .goshop_family{
        width: 100%;
        background: #ffffff;
    }

    .familyList{
        width: 100%;
        display: flex;
    }

    .familyList dl{
        flex:1;
    }

    .familyList dl dd{
        font-size: 12px;
    }

    .familyList dl dt{
        width: 100%;
        margin-top: 10px;
    }

    .familyList dl dt img{
        width: 80%;
    }
    /* 为您推荐 */
    .foryou{
        position: relative;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #dddddd;
        color: #857d7d;
    }
    .foryou .font{
        position: absolute;
        top: 50%;
        padding: 0 10px;
        margin-top: -12px;
        margin-left: -40px;
        background: #dddddd;
        z-index: 999;
    }

    .foryou .line{
        position: absolute;
        width: 100%;
        height: 1px;
        background: #857d7d;
        top: 50%;
        left: -1px;
        z-index: 0;
    }

    .foryou_list{
        width: 100%;
        background: #ffffff;
    }
    .foryou_list dt{
        width: 100%;
        height: 150px;
    }
    .foryou_list dt img{
        width: 100%;
    }
    .foryou_list dd{
        display: flex;
    }
    .foryou_list .ddLeft{
        flex:1;
        border-right: 1px solid #eeeeee;
        font-size: 12px;
        padding: 0px 10px; 
    }
    .foryou_list .ddLeft p{
        margin-bottom: 4px;
    }
    .foryou_list .ddLeft span{
        color: #C62323;
        padding: 2px 4px;
        border: 1px solid #C62323;
        border-radius: 2px;
    }

    .foryou_list .ddRight{
        padding: 10px;
        font-size: 12px;
    }
    .foryou_list .ddRight p{
        color: #C62323;
    }

    .foryou_list .ddRight span{
        color: #dddddd;
        text-decoration: line-through;
    }
</style>
