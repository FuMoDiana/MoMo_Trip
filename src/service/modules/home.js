import HYRequest from '../request'

export function getHomeHotSuggests() {
    return HYRequest.get({
        url: "/home/hotSuggests"
    })
}