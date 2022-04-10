<template>
  <div class="search">
    <div class="box">
      <select-component @select="changeEngine">
        <template v-slot:show>
          <img v-if="leftIcons.length>0" :src="leftIcons[currentLeftIcon].icon" alt=""/>
        </template>
        <div class="option" v-bind:key="index" v-for="index in leftIcons.length">
          <img v-if="leftIcons.length>0" :src="leftIcons[index-1].icon" alt=""/>
          <p>{{ leftIcons[index - 1].text }}</p>
        </div>
      </select-component>
      <div class="input">
        <input :placeholder="placeholder" @input="instantSearch" @focusin="currentRightIcon=1" @focusout="currentRightIcon=0"/>
      </div>
      <img v-if="rightIcons.length>0" :src="rightIcons[currentRightIcon]" alt=""/>
    </div>
  </div>
</template>

<script>
import SelectComponent from "@/components/SelectComponent";

export default {
  name: "SearchComponent",
  components: {SelectComponent},
  props: {
    leftIcons: {
      type: Array,
      required: true,
    },
    rightIcons: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentLeftIcon: 0,
      currentRightIcon: 0,
    }
  },
  methods: {
    changeEngine(i){
      this.currentLeftIcon = i;
    },
    instantSearch(){
    },
    changeRightIcon(e){
      console.log(e)
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

  animation: bounceInLeft;
  animation-duration: 1s;

  .box {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: relative;

    .option {
      img{
        margin-right: 0.5rem;
      }
    }

    img {
      flex-shrink: 1;
    }

    .input {
      flex-grow: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      input {
        flex-grow: 1;
        background: none;
        outline: none;
        border: none;
      }
    }
  }
}
</style>