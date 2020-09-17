<template>
  <div class="app-container">
    <el-row>
      <el-col>
        <el-row>
          <el-col>
            <template>
              <div>
                <enhanced-table
                  :table-data="list"
                  :col-configs="colConfigs"
                />
              </div>
            </template>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
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
      list: null,
      listLoading: true,
      tableHeight: window.innerHeight - 100,
      colConfigs: [
        { prop: 'ACFTTYPE_CODE_IATA', label: this.$t('ACFTTYPE.	ACFTTYPE_CODE_IATA'), fixed: true, filter: '' },
        { prop: 'ACFTTYPE_CODE_ICAO', label: this.$t('ACFTTYPE.	ACFTTYPE_CODE_ICAO'), fixed: true, filter: '' },
        { prop: 'ACFTTYPE_CODE_CAA', label: this.$t('ACFTTYPE.	ACFTTYPE_CODE_CAA'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_DESCR', label: this.$t('ACFTTYPE.	ACFTTYPE_DESCR'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_AIRCCHAP_CODE', label: this.$t('ACFTTYPE.	ACFTTYPE_AIRCCHAP_CODE'), fixed: false, filter: '' },
        { prop: 'AIRCCHAP_DESCR', label: this.$t('ACFTTYPE.	AIRCCHAP_DESCR'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_FREIGHT_WEIGHT_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_FREIGHT_WEIGHT_MAX'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_HANDLING_TIME_MIN', label: this.$t('ACFTTYPE.	ACFTTYPE_HANDLING_TIME_MIN'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_OVERALL_LENGTH', label: this.$t('ACFTTYPE.	ACFTTYPE_OVERALL_LENGTH'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_PASSENGERS_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_PASSENGERS_MAX'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_PROPULSN_CODE', label: this.$t('ACFTTYPE.	ACFTTYPE_PROPULSN_CODE'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_TAXI_WEIGHT_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_TAXI_WEIGHT_MAX'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_TAKEOFF_LENGTH_MIN', label: this.$t('ACFTTYPE.	ACFTTYPE_TAKEOFF_LENGTH_MIN'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_TAKEOFF_WEIGHT_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_TAKEOFF_WEIGHT_MAX'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_AIRBRIDGES_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_AIRBRIDGES_MAX'), fixed: false, filter: '' },
        { prop: 'PROPULSN_DESCR', label: this.$t('ACFTTYPE.	PROPULSN_DESCR'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_ENGINE_TYPE', label: this.$t('ACFTTYPE.	ACFTTYPE_ENGINE_TYPE'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_WING_SPAN', label: this.$t('ACFTTYPE.	ACFTTYPE_WING_SPAN'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_TIMESTAMP', label: this.$t('ACFTTYPE.	ACFTTYPE_TIMESTAMP'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_BODY_WIDTH', label: this.$t('ACFTTYPE.	ACFTTYPE_BODY_WIDTH'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_CRUISE_SPEED_BEST', label: this.$t('ACFTTYPE.	ACFTTYPE_CRUISE_SPEED_BEST'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_DESCR_CHN', label: this.$t('ACFTTYPE.	ACFTTYPE_DESCR_CHN'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_ENGINES', label: this.$t('ACFTTYPE.	ACFTTYPE_ENGINES'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_FLYING_DISTANCE_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_FLYING_DISTANCE_MAX'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_GAS_CAPACITY', label: this.$t('ACFTTYPE.	ACFTTYPE_GAS_CAPACITY'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_HANDLING_TIME_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_HANDLING_TIME_MAX'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_HEIGHT', label: this.$t('ACFTTYPE.	ACFTTYPE_HEIGHT'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_LANDING_LENGTH_MIN', label: this.$t('ACFTTYPE.	ACFTTYPE_LANDING_LENGTH_MIN'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_LANDING_WEIGHT_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_LANDING_WEIGHT_MAX'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_SELF_WEIGHT', label: this.$t('ACFTTYPE.	ACFTTYPE_SELF_WEIGHT'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_SPEED_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_SPEED_MAX'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_WEIGHT_MAX', label: this.$t('ACFTTYPE.	ACFTTYPE_WEIGHT_MAX'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_WHEEL_DISTANCE', label: this.$t('ACFTTYPE.	ACFTTYPE_WHEEL_DISTANCE'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_TRUEFALS_AERO_LIC', label: this.$t('ACFTTYPE.	ACFTTYPE_TRUEFALS_AERO_LIC'), fixed: false, filter: '' },
        { prop: 'AIRCCHAP_DESCR_CHN', label: this.$t('ACFTTYPE.	AIRCCHAP_DESCR_CHN'), fixed: false, filter: '' },
        { prop: 'PROPULSN_DESCR_CHN', label: this.$t('ACFTTYPE.	PROPULSN_DESCR_CHN'), fixed: false, filter: '' },
        { prop: 'TRUEFALS_CODE_LOCAL', label: this.$t('ACFTTYPE.	TRUEFALS_CODE_LOCAL'), fixed: false, filter: '' },
        { prop: 'ACFTTYPE_ISBANNED', label: this.$t('ACFTTYPE.	ACFTTYPE_ISBANNED'), fixed: false, filter: '' }

      ]
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.listLoading = true
      getAircraftTypeList().then((response) => {
        this.list = response.data.items
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
