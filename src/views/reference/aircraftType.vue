<template>
  <div class="table-container">
    <enhanced-table :configs="colConfigs" />
  </div>
</template>
<script>
import EnhancedTable from '@/components/my-table.vue'
import { getAircraftTypes } from '@/api/table'

export default {
  filters: {

  },
  components: {
    'enhanced-table': EnhancedTable
  },
  data () {
    return {
      isLoading: true,
      colConfigs:
      {
        isLoading: this.isLoading,
        columns: [
          // { field: 'id', label: 'aircraftType.id', searchable: true, sortable: true },
          { field: 'iataCode', label: 'aircraftType.iataCode', sticky: true, headerClass: 'sticky-column-header', cellClass: 'sticky-column-header', width: '80', searchable: true, sortable: true, numeric: false },
          { field: 'icaoCode', label: 'aircraftType.icaoCode', searchable: true, sortable: true, numeric: false },
          { field: 'description', label: 'aircraftType.description', searchable: true, sortable: true, numeric: false },
          { field: 'localDescription', label: 'aircraftType.localDescription', searchable: true, sortable: true, numeric: false },
          { field: 'sizeCategory', label: 'aircraftType.sizeCategory', searchable: true, sortable: true, numeric: false },
          { field: 'maxPax', label: 'aircraftType.maxPax', searchable: true, sortable: true, numeric: false },
          { field: 'maxFreightWeight', label: 'aircraftType.maxFreightWeight', searchable: true, sortable: true, numeric: false },
          { field: 'maxTakeoffWeight', label: 'aircraftType.maxTakeoffWeight', searchable: true, sortable: true, numeric: false },
          { field: 'aircraftLength', label: 'aircraftType.aircraftLength', searchable: true, sortable: true, numeric: false },
          { field: 'wingSpan', label: 'aircraftType.wingSpan', searchable: true, sortable: true, numeric: false },
          { field: 'minHandlingTime', label: 'aircraftType.minHandlingTime', searchable: true, sortable: true, numeric: false },
          { field: 'maxAirbridge', label: 'aircraftType.maxAirbridge', searchable: true, sortable: true, numeric: false },
          { field: 'createTime', label: 'aircraftType.createTime', searchable: true, sortable: true, numeric: false },
          { field: 'updateTime', label: 'aircraftType.updateTime', searchable: true, sortable: true, numeric: false }
        ],
        dataTable: []
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.isLoading = true
      getAircraftTypes().then((response) => {
        if (response.code === '00000') {
          var v = JSON.stringify(response.data)

          if (window.JSON && !window.JSON.dateParser) {
            var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/
            var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/

            JSON.dateParser = function (key, value) {
              if (typeof value === 'string') {
                var a = reISO.exec(value)
                if (a) { return new Date(value).toISOString().replace(/T/, ' ').replace(/\..+/, '') }
                a = reMsAjax.exec(value)
                if (a) {
                  var b = a[1].split(/[-+,.]/)
                  return new Date(b[0] ? +b[0] : 0 - +b[1]).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                }
              }
              if (typeof value === 'number') {
                return value.toString()
              }
              return value
            }
          }

          this.colConfigs.dataTable = JSON.parse(v, JSON.dateParser)
        } else {
          this.$message({
            showClose: true,
            duration: 0,
            message: '系统执行出错，没有成功获取返回数据',
            type: 'error'
          })
        }

        this.isLoading = false
      })
    },

    currentchange (val) {
      this.selectedRow = val
    }
  }
}
</script>

<style scoped></style>
<style>
</style>
