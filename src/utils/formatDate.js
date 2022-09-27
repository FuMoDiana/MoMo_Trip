import dayjs from 'dayjs'
//按照指定格式返回
export function formatDate(date) {
    return dayjs(date).format("MM月DD日")
}

export function diffDate(end, start) {
    return dayjs(end).diff(start, 'day')
}