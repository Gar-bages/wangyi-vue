import Mock from 'mockjs'
import shouye_data from './shouye_data.json'
import classify_data from './fenlei_zhuanqu.json'
import goods_data from './cateList.json'
import search_data from './search.json'

Mock.mock('/home', {
  code: 0,
  data: shouye_data
});
Mock.mock( '/classify', {
  code: 0,
  data: classify_data
});
Mock.mock( '/goods', {
  code: 0,
  data: goods_data
});
Mock.mock( '/find', {
  code: 0,
  data: search_data
});
