<template>
  <div class="wrapper flexBox flexCol">
      <div class="imageBox topPic">
          <img src="../../../static/imgs/1_02.jpg" alt="headerimg">
      </div>
      <div class="loginOrRegister">
          <div class="flex1" @click="change1">登录</div>
          <div class="flex1" @click="change2">注册</div>
      </div>
      <div class="container">
            
            <div  v-show="isLogin">
              <div class="flexBox inputBox">                 
                  <InputComponent  
                    placeholder="请输入手机号" 
                    imgSrc="../../../static/imgs/1_05.jpg"
                    v-on:change="getMyPhone"
                    v-on:blur="phoneBlur"
                  />
                  <!-- 15910590943 -->
              </div>
              <p v-show="showPhoneTip" class="tips">提示：请输入手机号!</p>
              <div class="flexBox inputBox">
                  <InputComponent                      
                    placeholder="请输入密码" 
                    imgSrc="../../../static/imgs/1_08.png"
                    v-on:change="getMyPassword"
                    v-on:blur="pwdBlur"
                  />
              </div>
              <p v-show="showPwdTip" class="tips">提示：请输入密码!</p>
              <div class="flexBox">
                <BtnComponent  @toParent="loginEvent" name="登录"/>
                <!-- <div class="btn" @click="loginEvent">登录</div> -->
              </div>
              <div class="flexBox">
                  <span class="gorget"> <router-link to="./changePassword">忘记密码？</router-link></span>
              </div>
            </div>
            <div  v-show="!isLogin">
                <div class="flexBox inputBox inputBox2">
                    <InputComponent  
                        v-on:change="getMyPhone"
                        placeholder="请输入手机号" 
                        imgSrc="../../../static/imgs/1_05.jpg"
                    />
                </div>
                <p v-show="showPhoneTip" class="tips">提示：请输入手机号!</p>
                <div class="flexBox inputBox inputBox2">
                    <InputComponent      
                        placeholder="请输入验证码" 
                        imgSrc="../../../static/imgs/2_05.jpg"
                        v-on:change="getMyCode"
                    />
                    <span class="idenCode" @click="getIdenCode">验证码</span>
                </div> 
                <p v-show="showCodeTip" class="tips">提示：请输入验证码!</p>
                <div class="flexBox inputBox inputBox2">
                    <InputComponent  
                        v-on:change="getMyPassword"
                        placeholder="请输入密码" 
                        imgSrc="../../../static/imgs/2_09.png"
                    />
                </div>
                <p v-show="showPwdTip" class="tips">提示：请输入密码!</p>
                <div class="flexBox inputBox inputBox2">
                    <InputComponent  
                        v-on:change="getMyPassword"
                        placeholder="请再次输入密码" 
                        imgSrc="../../../static/imgs/2_09.png"
                    />
                </div> 
                <p v-show="showPwdTip" class="tips">提示：请确认密码!</p>
                <div class="flexBox">
                    <div class="btn" @click="registEvent" >注册</div>
                    <!-- <BtnComponent  @toParent="registEvent" name="注册"/> -->
                </div>
            </div>
      </div>
  </div>
</template>


<script>
    import axios from 'axios'
    import { getList } from '../../service/AppService'
    import { login } from '../../service/AppService'
    import InputComponent from '../../components/inputComponent'
    import BtnComponent from '../../components/btnComponent'
    export default {
        data: function () {
            return {
                isLogin: true,
                userName:'',
                passWord:'',
                showPhoneTip:false,
                showPwdTip:false,
                showCodeTip:false,
                idenCode:'',
            }
        },
        components:{ InputComponent, BtnComponent},
        created: function () {
            // getList().then(function (value) {
            //     console.log(value)
            // });

            // axios.post('http://114.55.249.153:8028/login/LoginByName', {
            //     username: 'Fred',
            //     password: 'Flintstone'
            // })
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        },
        methods:{
			change1(){	
                this.isLogin=true                
			},
            change2(){				
                this.isLogin=false                
			},
            //获取手机号
            getMyPhone:function(data){
                this.userName = data;
            },
            // 获取密码
            getMyPassword:function(data){
                // console.log(data)
                this.passWord = data;
            },
            // 获取验证码
            getMyCode:function(data){
                this.idenCode = data;
            },
            // 检测手机号为空
            phoneBlur:function(data){
                // console.log('username',data)
                //如果data存在,让showPhoneTip显示，否则不显示
                if(data){
                    this.showPhoneTip = false
                }else{
                    this.showPhoneTip = true
                }
            },
            // 检测密码为空
            pwdBlur:function(data){
                //如果data存在,让showPwdTip显示，否则不显示
                if(data){
                    this.showPwdTip = false
                }else{
                    this.showPwdTip = true
                }
            },
            // 点击登录按钮
            loginEvent:function(){
                // alert('123');
                var username = this.userName;
                var password = this.passWord;

                // console.log(username,password)

                if(username && password){
                    login({
                        phone:username,
                        password:password
                    })
                    .then(function(res){
                        console.log(res)
                        this.$router.replace('/')                        
                    }.bind(this))
                    // axios.post('http://114.55.249.153:8028/login/LoginByPhone',{
                    //     phone:username,
                    //     password:password
                    // })
                    // .then(function(res){
                    //     console.log('login',res)
                    //     this.$router.replace('/')
                    // }.bind(this))
                    // .catch(function(error){
                    //     console.log(error)
                    // })
                }else{
                    // console.log(!username,!password)
                    this.userName && (this.showPhoneTip == false);
                    !this.userName && (this.showPhoneTip == true);

                    this.passWord && (this.showPwdTip == false);
                    !this.passWord && (this.showPwdTip == true);
                }
            },//loginEvent
            // 点击获取验证码
            getIdenCode(){
                var username = this.userName;
                var idencode = this.idenCode;
                if(username){
                    axios.post('http://114.55.249.153:8028/login/sendCode',{
                        phone:username,
                    })
                    .then(function(res){
                        console.log('IndenCode',res)                        
                    }.bind(this))
                    .catch(function(error){
                        console.log(error)
                    })
                }else{
                    console.log(!idencode)
                    this.idenCode && (this.showCodeTip == false);
                    !this.idenCode && (this.showCodeTip == true);
                }
            },
            // 点击注册按钮
            registEvent(){
                var username = this.userName;
                var password = this.passWord;
                if(username && password){
                    // login({
                    //     phone:username,
                    //     password:password
                    // })
                    // .then(function(res){
                    //     console.log(res)
                    //     this.$router.replace('/')                        
                    // }.bind(this))
                    axios.post('http://114.55.249.153:8028/login/regWithPhone',{
                        phone:username,
                        password:password
                    })
                    .then(function(res){
                        console.log('regist',res)
                        // 切换到登录
                        this.isLogin=true
                    }.bind(this))
                    .catch(function(error){
                        console.log(error)
                    })
                }
                else{
                    // console.log(!username,!password)
                    this.userName && (this.showPhoneTip == false);
                    !this.userName && (this.showPhoneTip == true);

                    this.passWord && (this.showPwdTip == false);
                    !this.passWord && (this.showPwdTip == true);
                }
            }
		}
    }
</script>


<style lang="scss" type="text/css">
    *{
        margin: 0;
        padding: 0;
    }

    html,body,#app,.wrapper{
        width: 100%;
        height: 100%;
    }

    .flexBox{
        display: flex;
    }

    .flexCol{
        flex-direction: column;
    }

    .center{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #808080;
    }

    .topPic{
        height: 200px;
        background: #eb6d6d;
    }

    .topPic img{
        width: 100%;
        height: 100%;
    }

    .loginOrRegister{
        height: 60px;
        line-height:60px;
        background: #f0f0f0;
        display: flex;
    }

    .flex1{
        flex:1;
        text-align: center;
    }

    .container{
        flex:1;
        background: #ffffff;
    }

    .inputBox{
        width: 80%;
        height: 46px;
        margin-top: 10px;
        border-bottom: 1px solid #eee;
        margin-left: 10%;
        box-sizing: border-box;
        align-items: center;
    }
    
    .inputBox img{
        margin-left: 6px;
        width: 10px;
        height: auto;
    }

    .inputBox input{
        padding-left: 30px;
        padding-right: 20px;
        height: 100%;
        border: 0;
        outline: 0;
        text-align: center;
        color: #808080;
    }

    .tips{
        text-align: center;
        font-size: 14px;
        color: #c00;
    }

    .btn{
        margin-top: 30px;
        width: 80%;
        margin-left: 10%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #CA3232;
        color: #ffffff;
        border-radius: 3px;
        letter-spacing: 6px;
    }

    .gorget{
        width: 100%;
        text-align: center;
        margin-top: 30px;
        
    }

    .gorget a{
        text-decoration: none;
        color: #909090;
        font-size: 12px;
    }


    .inputBox2 input{
        padding-left: 10px;
        text-align: left;
    }

    .idenCode{
        font-size: 10px;
        border: 1px solid #ccc;
        color: #CA3232;
        border-radius: 2px;
    }

</style>
