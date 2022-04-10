<template>
  <div class="search">
    <div class="box">
      <img v-if="leftIcon" :src="leftIcon" alt=""/>
      <div class="input">
        <input :placeholder="placeholder"/>
      </div>
      <img v-if="rightIcon" :src="rightIcon" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  props: {
    leftIcon: {
      type: String,
      required: true,
    },
    rightIcon: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/common.scss";

.search {
  @include search-field;
  display: flex;
  justify-content: center;
  flex-basis: 11rem;

  .box {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
      flex-shrink: 1;
    }

    .input{
      flex-grow: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      input{
        flex-grow: 1;
        background: none;
        outline: none;
        border: none;
      }
    }
  }
}
</style>