import { userInfo } from "os";


// 包含n个状态数据的对象

export default {
    latitude:40.10038,       //纬度
    longitude:116.36867,    //经度
    address:{},            //地址信息对象
    categorys:[],          //分类数组
    shops:[],              //商家数组
    user:{},                //当前登陆用户
    token:localStorage.getItem('token_key')          //当前登录用户对应的token
}