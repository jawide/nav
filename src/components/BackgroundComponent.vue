<template>
  <div class="background" :style="{'--url': 'url(\'{0}\')'.format(url)}"/>
</template>

<script>
export default {
  name: "BackgroundComponent",
  props: {
    url: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/common.scss";

$url: var(--url);
.background {
  position: absolute;
  @include fill-parent;
  background-image: $url;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  z-index: -1;
}
</style>