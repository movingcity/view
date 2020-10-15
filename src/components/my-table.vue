<template>
  <b-table
    ref="dataTable"
    :data="configs.dataTable"
    :loading="configs.isLoading"
    class="my-table"
    hoverable
    narrowed
    striped
    bordered
    height="300"
    :sticky-header="true"
    v-bind="$attrs"
    sort-icon="menu-up"
    sort-icon-size="is-small"
  >
    <template v-for="column in configs.columns">
      <b-table-column
        :key="column.field"
        centered
        :label="$t(column.label)"
        v-bind="column"
      >
        <!-- <template v-slot:header>
          <div style="margin:10px">{{ $t(column.label) }}</div>
        </template> -->
        <template
          v-if="column.searchable"
          slot="searchable"
          slot-scope="props"
        >
          <!-- TODO: 粘滞单元格bug https://github.com/buefy/buefy/issues/2885 -->
          <b-input
            v-model="props.filters[props.column.field]"
            class="min-width-input"
            size="is-small"
          />
        </template>
        <template v-slot="props">
          {{ props.row[column.field] }}
        </template>
      </b-table-column>
    </template>
  </b-table>
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
      selectedRow: null
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
        var div = document.querySelector('.table-wrapper')
        div.style.height = window.innerHeight - 80 + 'px'
      })
    }
  }
}
</script>
<style>
.is-sticky {
  background: #ffffff !important;
  color: black !important;
  font-weight: 500;
}
.sticky-column-header {
}
.my-table {
  white-space: nowrap;
}
.my-table.table-wrapper {
  overflow: auto !important;
}
.min-width-input {
  min-width: 50px !important;
}
</style>
