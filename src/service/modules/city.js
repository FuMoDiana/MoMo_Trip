import HYRequest from '../request'


export function getAllCity() {
    return HYRequest.get({
        url: '/city/all'
    })
}