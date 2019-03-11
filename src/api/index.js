import ajax from './ajax'

export const reqHomeList = () => ajax('/home')
export const reqSearchData = () => ajax('/find')
export const reqCateList = () => ajax('/classify')
