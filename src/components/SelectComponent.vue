<template>
  <div class="select" @click="show">
    <slot name="show"></slot>
    <div class="pop" v-show="show_flag" ref="pop">
      <slot class="option"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  data() {
    return {
      show_flag: false,
    }
  },
  methods: {
    show() {
      this.show_flag = true
    },
    hide() {
      this.show_flag = false;
    }
  },
  created() {
    window.addEventListener("click", e => {
      if (this.$el !== e.target && !this.$el.contains(e.target)) {
        this.hide()
      }
      if(this.$refs.pop.contains(e.target)){
        for (let i = 0; i < this.$refs.pop.children.length; i++) {
          if(this.$refs.pop.children.item(i).contains(e.target)){
            this.$emit("select", i)
            this.hide()
          }
        }
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/common.scss";

.select {
  position: relative;

  .pop {
    position: absolute;
    background-color: white;
    border-radius: 0.5rem;
    z-index: 1;
    box-shadow: $normal-box-shadow;

    &:deep(> *){
      display: flex;
      flex-flow: row nowrap;
      padding: 0.25rem 0.5rem 0.25rem 0.5rem;
      &:first-child{
        padding-top: 0.5rem;
      }
      &:last-child{
        padding-bottom: 0.5rem;
      }
      &:hover{
        background-color: #bebebe;
      }
      &:first-child:hover{
        border-radius: 0.5rem 0.5rem 0 0;
      }
      &:last-child:hover{
        border-radius: 0 0 0.5rem 0.5rem;
      }
    }
  }
}
</style>