import HYRequest from '../request'


export function getCityInfos(houseId) {
    return HYRequest.get({
        url: '/detail/infos/',
        params: {
            houseId
        }
    })
}