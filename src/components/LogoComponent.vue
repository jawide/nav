<template>
  <div class="logo">
    <img src="/image/J.svg" alt="J"/>
    <img src="/image/N.svg" alt="N"/>
    <img src="/image/A.svg" alt="A"/>
    <img src="/image/V.svg" alt="V"/>
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
  flex-basis: 17rem;
  width: $box-width;

  img {
    width: 3rem;
    margin: 0 0.3rem;
  }

  animation: bounceInDown;
  animation-duration: 1s;
}
</style>