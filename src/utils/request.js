/* 
* @Author: wei.xu  
* @Date: 2022-08-28 16:08:49  
* @Des: 网络请求封装 promise 、axios
*/
import axios from "axios";
import Qs from "qs";
import { message } from "antd";

// 设置默认值
axios.defaults.timeout = 20000;



// 请求拦截
axios.interceptors.request.use(
  config => {
    config = {
      ...config,
      headers: {
        /*设置请求所需要的头信息*/ 
        ...config.headers,
        "Access-Control-Allow-Origin": "*",
        "token": ""
      }
    }

    return config;
  },
  error => {

    return Promise.reject(error.message)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch(error.code) {
      case 403:
        break;
      case 500:
        message.error(error.messge || '服务器异常！')
        break;
      default:
        message.error(error.messge || '请求失败！')
    }
    return Promise.reject(error);
  }
)
const CONTENT_TYPE = {
  json: "application/json",
  enCode: "application/x-www-form-urlencoded",
  formate: "multipart/form-data"
}
const request = ({
  baseUrl,
  url,
  method="get",
  params,
  data,
  headers="json"
}) => {
  return new Promise((resolve, reject) => {
    headers = {
      "Content-Type": CONTENT_TYPE[headers['contentType']],
      ...headers
    }
    if(headers['contentType'] === "enCode") {
      params = Qs.stringify(params)
      data = Qs.stringify(data)
    } else if(headers['contentType'] === "formate") {
      let formData = new FormData()
      data = Object.keys(data).map(item => {
        return formData.append(key, data[key])
      })
      data = Object.keys(params).map(item => {
        return formData.append(key, params[key])
      })
    }
    axios({
      baseUrl,
      url,
      params,
      data,
      method
    })
    .then(res => {
      if(res.code == 200) {
        resolve(res.data)
      }
    })
    .catch(error => {
      resolve(error)
    })
  })
}


export {
  request
};