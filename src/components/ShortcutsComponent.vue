<template>
  <div class="shortcuts">
    <div class="row" v-bind:key="index" v-for="index in Math.ceil(data.length/maxCol)">
      <shortcut-component
          v-bind:key="index"
          v-for="(item, index) in data.slice((index-1)*maxCol, index*maxCol)"
          :data="item"
      ></shortcut-component>
    </div>
  </div>
</template>

<script>
import ShortcutComponent from "@/components/ShortcutComponent";

export default {
  name: "ShortcutsComponent",
  components: {ShortcutComponent},
  props: {
    data: {
      type: Array,
      required: true,
    },
    maxCol: {
      type: Number,
      default: 5,
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/styles/common.scss";

.shortcuts {
  flex-grow: 1;
  width: $box-width;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;

  .row{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;

    &:last-child {
      padding: 0 2.5rem;
    }
  }
}
</style>