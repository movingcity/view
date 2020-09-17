const Mock = require('mockjs')

const data = Mock.mock({
  'items|100': [{
    Airline: '@string("upper", 2)',
    FlightNumber: '@string("upper", 2)@integer(1000,9999)',
    MovementIndicator: '@pick(["A", "D"])',
    Sto: '@datetime("MM-dd HH:mm")',
    AircraftType: '@integer(300,800)',
    Eto: '@datetime("MM-dd HH:mm")',
    Ato: '@datetime("MM-dd HH:mm")',
    FlightIndicator: '@pick(["I", "D"])',
    PrevNextAirport: '@pick(["CTU", "PEK", "SHA", "CAN"])',
    'status|1': ['起飞', '到达', '取消']

    // id: '@id',
    // title: '@sentence(10, 20)',
    // 'status|1': ['published', 'draft', 'deleted'],
    // author: 'name',
    // display_time: '@datetime',
    // pageviews: '@integer(300, 5000)'
  }]
})
const aircraftTypedata = Mock.mock({
  'items|100': [{
    ACFTTYPE_CODE_IATA: '@string("upper", 3)',
    ACFTTYPE_CODE_ICAO: '@string("upper", 4)',
    ACFTTYPE_DESCR: '@sentence(3, 3)',
    ACFTTYPE_CODE_CAA: '@string("upper", 3)',
    ACFTTYPE_AIRCCHAP_CODE: '@string("upper", 3)',
    AIRCCHAP_DESCR: '@string("upper", 3)',
    ACFTTYPE_FREIGHT_WEIGHT_MAX: '@string("upper", 3)',
    ACFTTYPE_HANDLING_TIME_MIN: '@string("upper", 3)',
    ACFTTYPE_OVERALL_LENGTH: '@string("upper", 3)',
    ACFTTYPE_PASSENGERS_MAX: '@string("upper", 3)',
    ACFTTYPE_PROPULSN_CODE: '@string("upper", 3)',
    ACFTTYPE_TAXI_WEIGHT_MAX: '@string("upper", 3)',
    ACFTTYPE_TAKEOFF_LENGTH_MIN: '@string("upper", 3)',
    ACFTTYPE_TAKEOFF_WEIGHT_MAX: '@string("upper", 3)',
    ACFTTYPE_AIRBRIDGES_MAX: '@string("upper", 3)',
    PROPULSN_DESCR: '@string("upper", 3)',
    ACFTTYPE_ENGINE_TYPE: '@string("upper", 3)',
    ACFTTYPE_WING_SPAN: '@string("upper", 3)',
    ACFTTYPE_TIMESTAMP: '@string("upper", 3)',
    ACFTTYPE_BODY_WIDTH: '@string("upper", 3)',
    ACFTTYPE_CRUISE_SPEED_BEST: '@string("upper", 3)',
    ACFTTYPE_DESCR_CHN: '@string("upper", 3)',
    ACFTTYPE_ENGINES: '@string("upper", 3)',
    ACFTTYPE_FLYING_DISTANCE_MAX: '@string("upper", 3)',
    ACFTTYPE_GAS_CAPACITY: '@string("upper", 3)',
    ACFTTYPE_HANDLING_TIME_MAX: '@string("upper", 3)',
    ACFTTYPE_HEIGHT: '@string("upper", 3)',
    ACFTTYPE_LANDING_LENGTH_MIN: '@string("upper", 3)',
    ACFTTYPE_LANDING_WEIGHT_MAX: '@string("upper", 3)',
    ACFTTYPE_SELF_WEIGHT: '@string("upper", 3)',
    ACFTTYPE_SPEED_MAX: '@string("upper", 3)',
    ACFTTYPE_WEIGHT_MAX: '@string("upper", 3)',
    ACFTTYPE_WHEEL_DISTANCE: '@string("upper", 3)',
    ACFTTYPE_TRUEFALS_AERO_LIC: '@string("upper", 3)',
    AIRCCHAP_DESCR_CHN: '@string("upper", 3)',
    PROPULSN_DESCR_CHN: '@string("upper", 3)',
    TRUEFALS_CODE_LOCAL: '@string("upper", 3)',
    ACFTTYPE_ISBANNED: '@string("upper", 3)'

    // id: '@id',
    // title: '@sentence(10, 20)',
    // 'status|1': ['published', 'draft', 'deleted'],
    // author: 'name',
    // display_time: '@datetime',
    // pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [{
  url: '/vue-admin-template/table/list',
  type: 'get',
  response: config => {
    const items = data.items
    return {
      code: 20000,
      data: {
        total: items.length,
        items: items
      }
    }
  }
},
{
  url: '/vue-admin-template/table/aircraftTypeList',
  type: 'get',
  response: config => {
    const items = aircraftTypedata.items
    return {
      code: 20000,
      data: {
        total: items.length,
        items: items
      }
    }
  }
}]
