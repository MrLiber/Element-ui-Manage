<template>
  <div @click="loginEvent" class="btn">{{title}}</div>
</template>

<script>
    export default{
        data:function(){
            return {
                title:this.name || '确认'
            }
        },
        props:['name'],
        methods:{
            loginEvent:function(){
                this.$emit('toParent')
            }
            // ,
            // registEnent:function(){
            //     this.$emit()
            // }
        }
    }
</script>


<style scoped>

</style>
