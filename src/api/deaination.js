
// https://place.qyer.com/qcross/place/public.php?action=placesearch&keyword=kkk&client=web
// promise封装的的一个请求

// 声明一个函数
function getCountrys(url) {
    // 返回一个promise对象
    return new Promise((resolve,reject)=>{
        // AJAX一个get请求
        const xhr = new XMLHttpRequest()
        xhr.responseType = 'json'
        xhr.open('get',url)
        xhr.send()
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >=200 && xhr.status<300){
                    resolve(xhr.response)
                }else{
                    reject(xhr.statuss)
                }
            }
        }
    })
}
// 使用async 和 await 
async function countrys(){
    let country=  await getCountrys('coun/qcross/place/public.php?action=placesearch&keyword=555&client=web')
    return country
}
countrys()
// 暴露这个函数
export default countrys()