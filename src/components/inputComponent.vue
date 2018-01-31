<template>
  <div class="inputContainer">
      <img :src="imgSrc" alt="">
      <input 
        :placeholder="placeholder" 
        type="text"
        v-on:input="inputEvent"
        v-on:blur="blurEvent"
      >
  </div>
</template>


<script>
    export default {
        data:function(){
            return {

            }
        },
        props:['placeholder','imgSrc'],
        methods:{
            inputEvent:function(e) {
                var value = e.target.value
                this.$emit('change',value)
            },
            blurEvent: function(e) {
                var value = e.target.value;
                this.$emit('blur',value)
            }
        }
    }
</script>

<style>

</style>
