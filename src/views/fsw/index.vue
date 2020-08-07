<template>
  <div class="app-container">
    <el-row>
      <el-col>
        <el-row :gutter="24">
          <el-col :span="masterSpan">
            <template>
              <div>
                <vxe-table
                  ref="xTable"
                  :data="filteredList"
                  style="width: 100%"
                  :height="tableHeight"
                  border
                  fit
                  resizable
                  highlight-hover-row
                  highlight-current-row
                  @current-change="currentChangeEvent"
                >
                  <vxe-table-column type="expand" width="30">
                    <template v-slot:content="{ row, rowIndex }">
                      <template v-if="rowIndex === 1">
                        <vxe-table
                          border
                          :data="tableData"
                        >
                          <vxe-table-column field="role" title="Role" />
                          <vxe-table-column field="age" title="Age" />
                        </vxe-table>
                      </template>
                      <template v-else>
                        <ul>
                          <li>
                            <span>前后接飞航班号(缺少具体信息)：</span>
                            <span>{{ row.FlightNumber }}</span>
                          </li>
                        </ul></template>
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="Airline" width="80">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[0] }}</div>
                        <el-input v-model="inputFilter[0]" class="inputFilter" type="search" />
                      </div>
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="FlightNumber" width="90">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[1] }}</div>
                        <el-input v-model="inputFilter[1]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template v-slot="{ row }">
                      <el-link type="primary" @click="dblclick(row)">{{ row.FlightNumber }}</el-link>
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="Sto" width="100">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[2] }}</div>
                        <el-input v-model="inputFilter[2]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template v-slot="{ row }">
                      {{ row[columnName[2]] }}
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="MovementIndicator" width="100">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[3] }}</div>
                        <el-input v-model="inputFilter[3]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template v-slot="{ row }">
                      {{ row[columnName[3]] }}
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="AircraftType" width="80">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[4] }}</div>
                        <el-input v-model="inputFilter[4]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template v-slot="{ row }">
                      {{ row[columnName[4]] }}
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="FlightIndicator" width="100">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[5] }}</div>
                        <el-input v-model="inputFilter[5]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template v-slot="{ row }">
                      {{ row[columnName[5]] }}
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="Eto" width="100">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[6] }}</div>
                        <el-input v-model="inputFilter[6]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template v-slot="{ row }">
                      {{ row[columnName[6]] }}
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="Ato" width="100">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[7] }}</div>
                        <el-input v-model="inputFilter[7]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template v-slot="{ row }">
                      {{ row[columnName[7]] }}
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="status" width="100">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[8] }}</div>
                        <el-input v-model="inputFilter[8]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template slot-scope="scope">
                      <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="PrevNextAirport" width="100">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[9] }}</div>
                        <el-input v-model="inputFilter[9]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template v-slot="{ row }">
                      {{ row[columnName[9]] }}
                    </template>
                  </vxe-table-column>
                  <vxe-table-column sortable field="PrevNextAirport" width="100">
                    <template v-slot:header>
                      <div class="first-col">
                        <div class="first-col-top">{{ columnHeader[10] }}</div>
                        <el-input v-model="inputFilter[10]" class="inputFilter" type="search" />
                      </div>
                    </template>
                    <template v-slot="{ row }">
                      {{ row[columnName[10]] }}
                    </template>
                  </vxe-table-column>
                </vxe-table></div>
            </template>

          </el-col>
          <el-col v-show="showTabs" :span="sideSpan">
            <el-tabs id="sideTabs" size="small" :tab-position="tabPosition" type="border-card">
              <el-tab-pane v-if="selectedRow" label="详细信息">
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
                </div></el-tab-pane>
              <el-tab-pane label="VIP">VIP</el-tab-pane>
              <el-tab-pane label="保障信息">保障信息</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
  data() {
    return {
      list: null,
      listLoading: true,
      showTabs: false,
      tabPosition: 'right',
      tableHeight: window.innerHeight - 100,
      masterSpan: 24,
      sideSpan: 0,
      selectedRow: null,
      inputFilter: [],
      columnName: ['Airline', 'FlightNumber', 'Sto', 'MovementIndicator', 'AircraftType', 'FlightIndicator', 'Eto', 'Ato', 'status', 'PrevNextAirport', 'PrevNextAirport'],
      columnHeader: ['航空公司', '航班号', '计划时间', '到达/出发', '机型', '国际/国内', '预计时间', '实际时间', '状态', '前后站', '测试']
    }
  },
  computed: {
    filteredList() {
      if (this.list != null) {
        return this.list.filter((item) => {
        //   var reg = new RegExp(this.inputFilter[1], 'gi')
        //   return !this.inputFilter[1] || reg.test(item[this.columnName[1]])
          return (!this.inputFilter[0] || new RegExp(this.inputFilter[0], 'gi').test(item[this.columnName[0] ])) &&
          (!this.inputFilter[1] || new RegExp(this.inputFilter[1], 'gi').test(item[this.columnName[1] ])) &&
          (!this.inputFilter[2] || new RegExp(this.inputFilter[2], 'gi').test(item[this.columnName[2] ])) &&
          (!this.inputFilter[3] || new RegExp(this.inputFilter[3], 'gi').test(item[this.columnName[3] ])) &&
          (!this.inputFilter[4] || new RegExp(this.inputFilter[4], 'gi').test(item[this.columnName[4] ])) &&
          (!this.inputFilter[5] || new RegExp(this.inputFilter[5], 'gi').test(item[this.columnName[5] ])) &&
          (!this.inputFilter[6] || new RegExp(this.inputFilter[6], 'gi').test(item[this.columnName[6] ])) &&
          (!this.inputFilter[7] || new RegExp(this.inputFilter[7], 'gi').test(item[this.columnName[7] ])) &&
          (!this.inputFilter[8] || new RegExp(this.inputFilter[8], 'gi').test(item[this.columnName[8] ])) &&
          (!this.inputFilter[9] || new RegExp(this.inputFilter[9], 'gi').test(item[this.columnName[9] ])) &&
          (!this.inputFilter[10] || new RegExp(this.inputFilter[10], 'gi').test(item[this.columnName[10]]))
        })
      } else {
        return this.list
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    sortNameMethod(a, b) {
      var v1 = (a.name || '').toLowerCase()
      var v2 = (b.name || '').toLowerCase()
      return v1 < v2 ? -1 : v1 > v2 ? 1 : 0
    },
    sortChangeEvent({ column, property, order }) {
      console.info(property, order)
    },
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    dblclick() {
      this.selectedRow = this.$refs.xTable.getCurrentRecord()
      if (this.showTabs || this.selectedRow == null) {
        this.showTabs = false
        this.masterSpan = 24
        this.sideSpan = 0
      } else {
        this.showTabs = true
        this.masterSpan = 18
        this.sideSpan = 6
      }
    },
    currentChangeEvent({ row }) {
      this.selectedRow = this.$refs.xTable.getCurrentRecord()
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
