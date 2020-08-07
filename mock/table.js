const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
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

module.exports = [
  {
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
  }
]
