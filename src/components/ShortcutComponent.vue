<template>
  <div class="shortcut">
    <div class="icon">
      <img :src="data.icon" :alt="data.text[0]"/>
    </div>
    <p>{{ data.text }}</p>
  </div>
</template>

<script>
export default {
  name: "ShortcutComponent",
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/common.scss";

.shortcut {
  @include shortcut-field;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
}
</style>