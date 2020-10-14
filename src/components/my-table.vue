<template>
  <b-container fluid>
    <b-table
      ref="dataTable"
      :data="configs.dataTable"
      :loading="configs.isLoading"
      style="white-space: nowrap"
      class="my-table"
      hoverable
      narrowed
      striped
      bordered
      v-bind="$attrs"
      sort-icon="menu-up"
      sort-icon-size="is-small"
    >
      <template v-for="column in configs.columns">
        <b-table-column
          :key="column.field"
          v-bind="column"
        >
          <template
            v-if="column.searchable"
            slot="searchable"
            slot-scope="props"
          >
            <b-input
              v-model="props.filters[props.column.field]"
              size="is-small"
            />
          </template>
          <template v-slot="props">
            {{ props.row[column.field] }}
          </template>
        </b-table-column>
      </template>
    </b-table>
  </b-container>
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
      tableHeight: window.innerHeight - 80
    }
  },
  mounted: function () {
    this.setScrollBar()
    // 浏览器缩放，更新ScrollBar位置
    window.addEventListener('resize', this.setScrollBar)
  },
  methods: {
    setScrollBar () {
      this.$nextTick(function () {
        var div = document.querySelector('.main-container')
        div.style.height = window.innerHeight - 10 + 'px'
        console.log('mounted: ', div)
        console.log('mounted: ', window.innerHeight)
      })
    }
  }
}
</script>
<style>
.sticky-column-header {
  background: #ffffff !important;
  color: black !important;
  font-weight: 500;
}
.my-table.table-wrapper {
  overflow: auto !important;
}
</style>
