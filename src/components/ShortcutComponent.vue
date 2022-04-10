<template>
  <div class="shortcut">
    <div class="icon" @click="to">
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
  },
  methods: {
    to() {
      window.open(this.data.url)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/common.scss";

.shortcut {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 4rem;

  p {
    color: white;
    font-size: 10px;
  }

  animation: bounceInUp;
  animation-duration: 1s;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 2.5rem;
    height: 2.5rem;
    background-color: white;
    border-radius: 1.25rem;
    box-shadow: $normal-box-shadow;

    img {
      width: 80%;
    }

    &:hover {
      animation: bounce;
      animation-duration: 1s;
    }
  }
}

</style>