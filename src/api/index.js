// 当前封装的请求方法
// import base from './base'

// 二次封装的axios (自己封装  1.项目中已经封装好了  请使用项目中  2. 未封装的-可以封装  -百度一个)


function getCitys(url) {
    return new Promise((resolve, reject) => {
        const XML = new XMLHttpRequest()
        XML.responseType = 'json'
        XML.open('get', url)
        XML.send()
        XML.onreadystatechange = function () {
            if (XML.readyState === 4) {
                if (XML.status >= 200 && XML.status < 300) {
                    resolve(XML.response)
                } else {
                    reject(XML.status)
                }
            }
        }
    })
}
async function city() {
    let citys = await getCitys('api/aj/getcitycode')
    let text = await getCitys('myzl/qcross/place/public.php?action=placesearch&keyword=bj&client=web')
    let travel_notes = await getCitys('myzl/qcross/home/index.php?action=recommend&timer=1685072691311&ajaxID=59b0b70acebeb65c1882399e')
    let home_shop = await getCitys('myzl/qcross/home/index/recommendbiz?page=1')
    let scenic_spot = await getCitys('myzl/qcross/home/ajax?action=thread&timer=1685092274951&ajaxID=59b60840cebeb65c188239a8')
    return [citys, text, travel_notes, home_shop, scenic_spot]
}
city()
export default city()

// export async function store() {
//     let  qyStore =  await getCitys('myzl/qcross/home/index/recommendbiz?page=1')
//     console.log(qyStore);
//     return  qyStore
// }
// store()

// function getCity(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.responseType = 'json'
//         xhr.open('get', url)
//         xhr.send()
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status >= 200 && xhr.status < 300) {
//                     resolve(xhr.response)
//                 } else {
//                     reject(xhr.status)
//                 }
//             }
//         }
//     })
// }
// async function citys() {
//     let city = await getCity('api/aj/getcitycode')
//     return city
// }
// citys()




