<template>
  <div class="app-container">
    <enhanced-table :configs="colConfigs" />
  </div>
</template>
<script>
import EnhancedTable from '@/components/my-table.vue'
import { getAircraftTypeList } from '@/api/table'

export default {
  filters: {

  },
  components: {
    'enhanced-table': EnhancedTable
  },
  data () {
    return {
      listLoading: true,
      tableHeight: window.innerHeight - 100,
      colConfigs:
      {
        columns: [
          { field: 'iata_code', label: this.$t('aircraft_type.iata_code'), sticky: true, width: '80', searchable: true, sortable: true },
          { field: 'icao_code', label: this.$t('aircraft_type.icao_code'), width: '80', searchable: true, sortable: true },
          { field: 'description', label: this.$t('aircraft_type.description'), width: '200', searchable: true, sortable: true },
          { field: 'local_description', label: this.$t('aircraft_type.local_description'), width: '200', searchable: true, sortable: true },
          { field: 'size_category', label: this.$t('aircraft_type.size_category'), searchable: true, sortable: true },
          { field: 'max_pax', label: this.$t('aircraft_type.max_pax'), searchable: true, sortable: true },
          { field: 'max_freight_weight', label: this.$t('aircraft_type.max_freight_weight'), searchable: true, sortable: true },
          { field: 'max_takeoff_weight', label: this.$t('aircraft_type.max_takeoff_weight'), searchable: true, sortable: true },
          { field: 'aircraft_length', label: this.$t('aircraft_type.aircraft_length'), searchable: true, sortable: true },
          { field: 'wing_span', label: this.$t('aircraft_type.wing_span'), searchable: true, sortable: true },
          { field: 'min_handling_time', label: this.$t('aircraft_type.min_handling_time'), searchable: true, sortable: true },
          { field: 'max_airbridge', label: this.$t('aircraft_type.max_airbridge'), searchable: true, sortable: true },
          { field: 'create_time', label: this.$t('aircraft_type.create_time'), searchable: true, sortable: true },
          { field: 'update_time', label: this.$t('aircraft_type.update_time'), searchable: true, sortable: true }

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
      this.listLoading = true
      getAircraftTypeList().then((response) => {
        this.colConfigs.dataTable = response.data.items
        this.listLoading = false
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
.inputFilter input.el-input__inner {
  height: 20px;
  padding: 3px;
}
</style>
