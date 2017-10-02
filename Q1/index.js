/**
 * Created by CTD on 2017/10/2.
 */
// options 是个object，一般有url， method等异步请求相关的参数。
//ajax: (options) => Promise
//ajaxWithRetry: (options) => Promise
//其中重试的次数在options.retryCount中，如果使用者不传递，那么默认是5次。
//新的函数里，重试retryCount次后依然失败，才算真的失败

let times = 0
ajaxWithRetry((options) => {
    let retryCount = options.retryCount || 5
    return new Promise((resolve, reject) => {
       ajax((options, (data, err)=> {
           if(err) {
               times++
               if(times <= retryCount) {
                   ajax(this)
                   return
               }
               reject(err)
           } else  {
               resolve(data)
           }
        }))
    })


})