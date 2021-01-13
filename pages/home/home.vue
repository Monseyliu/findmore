<template>
	<view>
		home页面
		<text class="iconfont icon-customer-service">12</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.request({
				url: "http://service.picasso.adesk.com/v3/homepage/vertical",
				success: res => {
					console.log(res)
				}
			})
		}
	}
</script>

<style>

</style>
