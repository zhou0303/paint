<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
     data(){
       return{

       }
     },
     created(){
        
     },
     mounted() {
     
        
     },
     methods:{
     }
}
</script>

<style lang="scss">

html,body,#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
  background: url('https://ikea-mrm.woaap.com/images/paint/bg.png');
  position: relative;
}
*{
  padding: 0;
  margin: 0;
}
 /* 去除选中后的外边框 */
  input,
  button,
  a {  
    outline: none;
  }
  /* 取消ios点击出现黑色背景 */
  div{
      -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  
    .otherbg{
      width: 7.5rem;
      height: 16.24rem;
      background: url('https://ikea-mrm.woaap.com/images/paint/otherbg.png') no-repeat;
      background-size: 100% 100%;
      position:absolute;
      top: 50%;
      left: 0;
      transform: translate(0,-51%);
  }

  .btngroup{
    position: absolute;
    width: 7rem;
    height: 1rem;
    top: 12.58rem;
    left: 50%;
    transform: translate(-50%,0);
    display: flex;
    justify-content:center;
  }
  .btnsmall{
    width: 3.05rem;
    height: 1rem;
    font-weight: 700;
    font-family: "黑体";
    font-size: 0.36rem;
    box-sizing: border-box;
    padding-left:  0.8rem;
    line-height: 0.9rem;
    background: url('https://ikea-mrm.woaap.com/images/paint/btnbg2.png') no-repeat;
    background-size: 100% 100%;
  }

</style>
