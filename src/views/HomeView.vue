<template>
  <div class="home">
    <background-component :url="background"></background-component>
    <blur-background-component :url="background"></blur-background-component>
    <div class="container">
      <logo-component class="logo"></logo-component>
      <search-component class="search"
                        :left-icons="engines.data"
                        :placeholder="placeholder"
                        @instantSearch="instantSearch"
                        @fullSearch="fullSearch"
                        ref="search"
      ></search-component>
      <shortcuts-component :data="shortcuts.data"></shortcuts-component>
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
      background: process.env.VUE_APP_BACKGROUND || "/image/wallhaven-wq6jdr-center-3.36mb.png",
      placeholder: "搜索网址的标题、描述或者链接",
      shortcuts: {
        next_cursor: null,
        limit: 9,
        data: [],
      },
      engines: {
        next_cursor: null,
        limit: 4,
        data: [],
      }
    }
  },
  created() {
    window.watch_win()

    this.$axios.post("/shortcuts", JSON.stringify({
      cursor: this.shortcuts.next_cursor,
      limit: this.shortcuts.limit,
    }), {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      this.shortcuts.data = res.data.shortcuts
      this.shortcuts.next_cursor = res.data.next_cursor
    })

    this.$axios.post("/engines", JSON.stringify({
      cursor: this.engines.next_cursor,
      limit: this.engines.limit,
    }), {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      this.engines.data = res.data.engines
      this.engines.next_cursor = res.data.next_cursor
    })
  },
  methods: {
    instantSearch(){
    },
    fullSearch(val){
      const engine = this.engines.data[this.$refs.search.currentLeftIcon];
      window.open(engine.url.format(val))
    },
  }
}
</script>
