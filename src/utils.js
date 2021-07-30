import throttle from 'lodash.throttle'
import axios from 'axios'

export const throttledGet = throttle(function throttledGet(url) {
    return axios.get(url)
}, 30 * 1000)
