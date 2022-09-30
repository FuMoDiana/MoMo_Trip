import dayjs from 'dayjs'
//按照指定格式返回
export function formatDate(date, format = 'MM月DD日') {
    return dayjs(date).format(format)
}

export function diffDate(end, start) {
    return dayjs(end).diff(start, 'day')
}