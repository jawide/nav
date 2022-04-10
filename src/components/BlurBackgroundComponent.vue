<template>
  <div class="background" :style="{
    '--url': 'url(\'{}\')'.format(url),
    '--blur': 'blur({}px)'.format(blur),
    '--border': '-{}px'.format(blur*2),
  }"/>
</template>

<script>
export default {
  name: "BlurBackgroundComponent",
  props: {
    url: {
      type: String,
      required: true,
    },
    blur: {
      type: Number,
      default: 5,
    },
  }
}
</script>

<style scoped lang="scss">
$url: var(--url);
$blur: var(--blur);
$border: var(--border);
.background {
  position: absolute;
  background-image: $url;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: $blur;
  left: $border;
  right: $border;
  top: $border;
  bottom: $border;
  z-index: -2;
}
</style>