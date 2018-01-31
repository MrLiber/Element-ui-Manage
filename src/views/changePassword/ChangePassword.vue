<template>
    <div class="wrap">
        <div class="top">
            <p><router-link to="./loginRegister">&lt;返回</router-link> </p>
            <h4>找回密码</h4>
            <p></p>
        </div>
        <div class="first" v-show="ifShow1">
            <div class="box">请输入您的手机号码</div>
            <div class="box"><input type="text" placeholder="手机号"></div>
            <div class="box next" @click="next1">下一步</div>
            <div class="box telService">联系客服</div>
        </div>

        <div class="second" v-show="ifShow2">
            <div class="box">短信验证码已发送，请输入验证码</div>
            <div class="box"><input type="text" placeholder="验证码"></div>
            <div class="box next" @click="next2">下一步</div>
            <div class="box"><span>28`后重发</span></div>
        </div>

        <div class="third" v-show="ifShow3">
            <div class="box">设置新密码</div>
            <div class="box"><input type="text" placeholder="新密码"></div>
            <div class="box"><input type="text" placeholder="确认新密码"></div>
            <div class="box next">完成</div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'
    import { getList } from '../../service/AppService'
    export default {
        data: function () {
            return {
                ifShow1: true,
                ifShow2: false,
                ifShow3: false
            }
        },
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
			next1(){	
                this.ifShow1=false,
                this.ifShow2=true                  
			},
            next2(){	
                this.ifShow2=false,
                this.ifShow3=true                   
			},
		}
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    html,body,#app,.wrapper{
        width: 100%;
        height: 100%;
    }

    .top{
        display: flex;     
        width: 100%;
        height: 40px;
        background: #CA3232; 
        align-items: center;  
        color: #ffffff;
    }

    .top p{
        width: 50px;
        height: 20px;
        text-align: center;
    }

    .top p a{
        text-decoration: none;
        color: #ffffff;
    }

    .top h4{
        flex:1;
        text-align: center;
    }

    .box{
        width: 90%;
        height: 60px;
        line-height: 60px;
        margin-left: 5%;
        text-align: center;
        color: #808080;
    }

    input{
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        border: 0;
        outline: 0;
        text-align:center;
        border-bottom: 1px solid #e0e0e0;
    }

    .next{
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
        background: #CA3232;
        color: #fff;
        border-radius: 3px;
    }

    .telService{
        margin-top: 10px;
        height: 40px;
        line-height: 40px;
        background: #fff;
        color: #CA3232;
        border: 1px #CA3232 solid;
        border-radius: 3px;
    }

    span{
        color: #c00;
        font-size: 12px;
    }
</style>
