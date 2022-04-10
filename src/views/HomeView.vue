<template>
  <div class="home">
    <background-component :url="background"></background-component>
    <blur-background-component :url="background"></blur-background-component>
    <div class="container">
      <logo-component class="logo"></logo-component>
      <search-component class="search"
                        :left-icon="searchEngineIcon"
                        :right-icon="qrcodeIcon"
                        :placeholder="placeholder"
      ></search-component>
      <shortcuts-component :data="shortcuts"></shortcuts-component>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "~@/styles/common.scss";

.home {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  @include fill-parent;

  .container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    @include fill-parent("flex");
  }
}
</style>

<script>
// @ is an alias to /src

import LogoComponent from "@/components/LogoComponent";
import SearchComponent from "@/components/SearchComponent";
import ShortcutsComponent from "@/components/ShortcutsComponent";
import BackgroundComponent from "@/components/BackgroundComponent";
import BlurBackgroundComponent from "@/components/BlurBackgroundComponent";

export default {
  name: 'HomeView',
  components: {
    BlurBackgroundComponent,
    BackgroundComponent,
    ShortcutsComponent,
    SearchComponent,
    LogoComponent
  },
  data() {
    return {
      background: "wallhaven-wq6jdr-center.png",
      searchEngineIcon: "N.svg",
      qrcodeIcon: "qrcode.svg",
      placeholder: "搜索网址的标题、描述或者链接",
      shortcuts: [],
      next_cursor: undefined,
      limit: 9,
    }
  },
  created() {
    window.watch_win()

    this.$axios.post("/shortcuts", JSON.stringify({
      cursor: this.next_cursor,
      limit: this.limit,
    }), {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      this.shortcuts = res.data.shortcuts
    })
  },
}
</script>
