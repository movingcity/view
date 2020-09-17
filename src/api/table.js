import request from '@/utils/request'

export function getList (params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
export function getAircraftTypeList (params) {
  return request({
    url: '/vue-admin-template/table/aircraftTypeList',
    method: 'get',
    params
  })
}
