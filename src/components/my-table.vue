<template>
  <el-table
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
  >
    <template v-for="colConfig in colConfigs">
      <slot
        v-if="colConfig.slot"
        :name="colConfig.slot"
      />
      <component
        :is="colConfig.component"
        v-else-if="colConfig.component"
        :key="colConfig.id"
        :col-config="colConfig"
      />
      <el-table-column
        v-else
        :key="colConfig.id"
        min-width="100px"
        sortable
        :fixed="colConfig.fixed"
        v-bind="colConfig"
      >
        <template v-slot:header>
          <div>
            <div>{{ colConfig.label }}</div>
            <el-input
              v-model="colConfig.filter"
              class="inputFilter"
              @click.native.stop
            />
          </div>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'EnhancedTable',
  props: {
    colConfigs: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      listLoading: true,
      showTabs: false,
      tabPosition: 'right',
      tableHeight: window.innerHeight - 100,
      masterSpan: 24,
      sideSpan: 0,
      selectedRow: null
    }
  },
  computed: {
    filteredList() {
      if (this.tableData && this.colConfigs) {
        return this.tableData.filter(item => {
          var result = true
          this.colConfigs.forEach(colConfig => {
            if (colConfig.filter && colConfig.prop) {
              result =
                result &&
                new RegExp(colConfig.filter, 'gi').test(item[colConfig.prop])
            }
          })
          return result
        })
      } else {
        return this.tableData
      }
    }
  },
  methods: {}
}
</script>
<style>
.inputFilter input.el-input__inner {
  font-size: 11px;
}
.el-table .caret-wrapper {
  position: absolute;
  top: -5px;
  right: 0px;
}
</style>
