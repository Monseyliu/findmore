// 封装请求
const BASE_URL = "http://service.picasso.adesk.com/"
export default (options)=> {
	// 发起请求，显示加载中
	uni.showLoading({
		title: "加载中"
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL +options.url,
			method:options.method || "GET",
			data:options.data || {},
			success(res) {
				resolve(res.data);
			},
			fail(err){
				reject(err);
			},
			complete() {
				// 隐藏加载效果
				uni.hideLoading();
			}
		})
	})
}