<template>
  <div class="app-container">
    <template>
      <div>
        <enhanced-table :configs="colConfigs" />
      </div>
    </template>
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
        columns: ['iata_code', 'icao_code', 'description', 'local_description', 'size_category', 'max_pax', 'max_freight_weight', 'max_takeoff_weight', 'aircraft_length', 'wing_span', 'min_handling_time', 'max_airbridge', 'create_time', 'update_time'],
        dataTable: [],
        options: {
          headings: {
            iata_code: this.$t('aircraft_type.iata_code'),
            icao_code: this.$t('aircraft_type.icao_code'),
            description: this.$t('aircraft_type.description'),
            local_description: this.$t('aircraft_type.local_description'),
            size_category: this.$t('aircraft_type.size_category'),
            max_pax: this.$t('aircraft_type.max_pax'),
            max_freight_weight: this.$t('aircraft_type.max_freight_weight'),
            max_takeoff_weight: this.$t('aircraft_type.max_takeoff_weight'),
            aircraft_length: this.$t('aircraft_type.aircraft_length'),
            wing_span: this.$t('aircraft_type.wing_span'),
            min_handling_time: this.$t('aircraft_type.min_handling_time'),
            max_airbridge: this.$t('aircraft_type.max_airbridge'),
            create_time: this.$t('aircraft_type.create_time'),
            update_time: this.$t('aircraft_type.update_time')
          },
          filterByColumn: true,
          sortable: ['iata_code', 'icao_code'],
          filterable: ['iata_code', 'icao_code'],
          texts: {
            count: 'Showing {from} to {to} of {count} records|{count} records|One record',
            first: 'First',
            last: 'Last',
            filter: 'Filter:',
            filterPlaceholder: 'Search query',
            limit: 'Records:',
            page: 'Page:',
            noResults: 'No matching records',
            filterBy: 'Filter by {column}',
            loading: 'Loading...',
            defaultOption: 'Select {column}',
            columns: 'Columns'
          }
        }
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
