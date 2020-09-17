<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.el-table--border th.gutter:last-of-type {
  display: block !important;
  width: 17px !important;
}
.el-tabs__item {
  font-size: 12px !important;
}
.el-tab-pane__item {
  font-size: 12px !important;
}
</style>
