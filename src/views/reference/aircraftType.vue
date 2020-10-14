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
          // { field: 'id', label: this.$t('aircraftType.id'), searchable: true, sortable: true },
          { field: 'iataCode', label: this.$t('aircraftType.iataCode'), sticky: true, headerClass: 'sticky-column-header', cellClass: 'sticky-column-header', width: '80', searchable: true, sortable: true, numeric: false },
          { field: 'icaoCode', label: this.$t('aircraftType.icaoCode'), searchable: true, sortable: true, numeric: false },
          { field: 'description', label: this.$t('aircraftType.description'), searchable: true, sortable: true, numeric: false },
          { field: 'localDescription', label: this.$t('aircraftType.localDescription'), searchable: true, sortable: true, numeric: false },
          { field: 'sizeCategory', label: this.$t('aircraftType.sizeCategory'), searchable: true, sortable: true, numeric: false },
          { field: 'maxPax', label: this.$t('aircraftType.maxPax'), searchable: true, sortable: true, numeric: false },
          { field: 'maxFreightWeight', label: this.$t('aircraftType.maxFreightWeight'), searchable: true, sortable: true, numeric: false },
          { field: 'maxTakeoffWeight', label: this.$t('aircraftType.maxTakeoffWeight'), searchable: true, sortable: true, numeric: false },
          { field: 'aircraftLength', label: this.$t('aircraftType.aircraftLength'), searchable: true, sortable: true, numeric: false },
          { field: 'wingSpan', label: this.$t('aircraftType.wingSpan'), searchable: true, sortable: true, numeric: false },
          { field: 'minHandlingTime', label: this.$t('aircraftType.minHandlingTime'), searchable: true, sortable: true, numeric: false },
          { field: 'maxAirbridge', label: this.$t('aircraftType.maxAirbridge'), searchable: true, sortable: true, numeric: false },
          { field: 'createTime', label: this.$t('aircraftType.createTime'), searchable: true, sortable: true, numeric: false },
          { field: 'updateTime', label: this.$t('aircraftType.updateTime'), searchable: true, sortable: true, numeric: false }
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
