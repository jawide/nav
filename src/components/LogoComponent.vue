<template>
  <div class="logo">
    <img src="J.svg" alt="J"/>
    <img src="N.svg" alt="N"/>
    <img src="A.svg" alt="A"/>
    <img src="V.svg" alt="V"/>
  </div>
</template>

<script>
export default {
  name: "LogoComponent"
}
</script>

<style scoped lang="scss">
@import "~@/styles/common.scss";

.logo{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
  @include logo-field;

  animation: bounceInDown;
  animation-duration: 1s;
}
</style>