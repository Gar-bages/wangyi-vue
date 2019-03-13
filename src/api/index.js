import ajax from './ajax'

//推荐
//http://m.you.163.com/topic/v1/find/recManual.json
//http://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=8250,8319,4035,8166,7852,1487,6965,6410,8303,8331,5867,3438,4037,4024,3463,2876,2747,3413,2081,2082,1487,7318,1004,5821,7696,7710,7949,6696
//http://m.you.163.com/topic/v1/find/recAuto.json?page=2&size=5&exceptIds=8250,8319,4035,8166,7852,1487,6965,6410,8303,8331,5867,3438,4037,4024,3463,2876,2747,3413,2081,2082,1487,7318,1004,5821,7696,7710,7949,6696
//搜索
//http://m.you.163.com/xhr/search/searchAutoComplete.json?keywordPrefix=a
//晒单
//https://m.you.163.com/topic/v1/look/getCollection.json?id=57
//https://m.you.163.com/topic/v1/look/getList.json?page=2&size=20&type=1



export const reqHomeList = () => ajax('/home')
export const reqSearchData = () => ajax('/find')
export const reqCateList = () => ajax('/classify')

const BASE = '/api'
export const reqSearch = (searchName) => ajax(BASE+'/xhr/search/searchAutoComplete.json?keywordPrefix='+searchName)

export const reqTabs = () => ajax(BASE + '/topic/v1/find/getTabs.json')
export const reqRecommentData = () => ajax(BASE+'/topic/v1/find/recManual.json')
export const reqAutoRecommentData = (page,size,exceptIds='8250,8319,4035,8166,7852,1487,6965,6410,8303,8331,5867,3438,4037,4024,3463,2876,2747,3413,2081,2082,1487,7318,1004,5821,7696,7710,7949,6696') =>ajax(BASE + '/topic/v1/find/recAuto.json',{page,size,exceptIds})
export const reqCollectionImgs = (id) => ajax(BASE+'/topic/v1/look/getCollection.json',{id})
export const reqBuyerShowList = (page,size,type) => ajax(BASE+'/topic/v1/look/getList.json',{page,size,type})
