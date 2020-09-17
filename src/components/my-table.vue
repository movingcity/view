<template>
  <!-- <el-table
    ref="dataTable"
    :data="filteredList"
    style="width: 100%"
    size="mini"
    :row-style="{ height: '0' }"
    :cell-style="{ padding: '0' }"
    :height="tableHeight"
    v-bind="$attrs"
    border
    stripe
    highlight-current-row
    v-on="$listeners"
  > -->
  <div style="overflow:auto">
    <b-table
      ref="dataTable"
      :height="tableHeight"
      :columns="configs.columns"
      :data="configs.dataTable"
      style="white-space: nowrap"
      hoverable
      v-bind="$attrs"
      sort-icon="menu-up"
      sort-icon-size="is-small"
    />
  </div>
</template>

<script>
export default {
  name: 'EnhancedTable',
  props: {
    configs: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      listLoading: true,
      showTabs: false,
      tabPosition: 'right',
      masterSpan: 24,
      sideSpan: 0,
      selectedRow: null,
      tableHeight: window.innerHeight - 100
    }
  }
}
</script>
<style>
</style>
