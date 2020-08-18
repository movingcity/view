<template>
  <div class="app-container">
    <el-row>
      <el-col>
        <el-row :gutter="20">
          <el-col :span="masterSpan"><template>
            <div>
              <enhanced-table
                :table-data="list"
                :col-configs="colConfigs"
                @row-dblclick="rowdblclick"
                @current-change="currentchange"
              >
                <!--  :default-sort="{prop: 'Sto', order: 'ascending'}"
                default-sort会报错，暂时没发现影响，像是个bug https://github.com/ElemeFE/element/pull/17113 -->
                <!-- <el-table-column
                  slot="options"
                  label="操作"
                >
                  <el-button slot-scope="{ row }" size="mini">查看</el-button>
                </el-table-column> -->
              </enhanced-table>
            </div>
          </template>

          </el-col>
          <el-col :span="sideSpan">
            <el-tabs
              v-if="selectedRow"
              key="tabDetail"
              :lazy="true"
              size="small"
              :tab-position="tabPosition"
              type="border-card"
              style="height:400px"
            >
              <el-tab-pane label="详细信息">
                <div style="padding: 2px;font-size: 12px">
                  <el-row class="el-row">
                    <el-col :span="16"><span>航空公司：</span></el-col>
                    <el-col :span="8"><span>{{ selectedRow.Airline }}</span></el-col>
                  </el-row>
                  <el-row class="el-row">
                    <el-col :span="16">航班号：</el-col>
                    <el-col :span="8">{{ selectedRow.Airline }}{{ selectedRow.FlightNumber }}</el-col>
                  </el-row>
                </div>
              </el-tab-pane>
              <el-tab-pane v-if="selectedRow" label="关联信息">
                <div style="padding: 2px;font-size: 12px">
                  <el-row class="el-row">
                    <el-col :span="16">前后接飞：</el-col>
                    <el-col :span="8">{{ selectedRow.Airline }}{{ selectedRow.FlightNumber }}</el-col>
                  </el-row>
                  <el-row class="el-row">
                    <el-col :span="16">代码共享：</el-col>
                    <el-col :span="8">{{ selectedRow.Airline }}{{ selectedRow.FlightNumber }}</el-col>
                  </el-row>
                </div>
              </el-tab-pane>
              <el-tab-pane key="tabVIP" label="VIP">VIP</el-tab-pane>
              <el-tab-pane key="tabOther" label="保障信息">保障信息</el-tab-pane>
            </el-tabs>
            <el-button type="primary" size="mini" style="float: right;margin: 2px" @click="closeDetail">关闭</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import EnhancedTable from '@/components/my-table.vue'
import { getList } from '@/api/table'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        起飞: 'success',
        到达: 'gray',
        取消: 'danger'
      }
      return statusMap[status]
    }
  },
  components: {
    'enhanced-table': EnhancedTable
  },
  data() {
    return {
      list: null,
      listLoading: true,
      tabPosition: 'right',
      tableHeight: window.innerHeight - 100,
      masterSpan: 24,
      sideSpan: 0,
      selectedRow: null,
      colConfigs: [
        { prop: 'Airline', label: '航空公司', fixed: true, filter: '' },
        { prop: 'FlightNumber', label: '航班号', fixed: true, filter: '' },
        { prop: 'Sto', label: '计划时间', fixed: false, filter: '' },
        { prop: 'MovementIndicator', label: '到达/出发', fixed: false, filter: '' },
        { prop: 'AircraftType', label: '机型', fixed: false, filter: '' },
        { prop: 'AircraftType', label: '机型', fixed: false, filter: '' },
        { prop: 'AircraftType', label: '机型', fixed: false, filter: '' },
        { prop: 'AircraftType', label: '机型', fixed: false, filter: '' },
        { prop: 'AircraftType', label: '机型', fixed: false, filter: '' },
        { prop: 'AircraftType', label: '机型', fixed: false, filter: '' },
        { prop: 'AircraftType', label: '机型', fixed: false, filter: '' },
        { prop: 'AircraftType', label: '机型', fixed: false, filter: '' },
        { slot: 'options', message: 'message' }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    rowdblclick(row, column) {
      this.selectedRow = row
      if (this.selectedRow == null) {
        this.masterSpan = 24
        this.sideSpan = 0
      } else {
        this.masterSpan = 18
        this.sideSpan = 6
      }
    },
    closeDetail() {
      this.masterSpan = 24
      this.sideSpan = 0
    },
    currentchange(val) {
      this.selectedRow = val
    }
  }
}
</script>

<style scoped>

</style>
<style>
.inputFilter input.el-input__inner {
height: 20px;
padding: 3px;
}
</style>
