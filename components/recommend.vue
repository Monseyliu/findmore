<template>
	<scroll-view scroll-y class="recommend_scroll" v-if="recommentdlist.length>0" @scrolltolower="handToLower">
		<!--推荐开始 -->
		<view class="recommend_wrap">
			<view class="recommend_item" v-for="item in recommentdlist" :key="item.id">
				<image :src="item.thumb" mode="widthFix"></image>
			</view>
		</view>
		<!-- 推荐结束 -->
		<!-- 月份相关开始 -->
		<view class="month_wrap">
			<view class="month_title">
				<view class="month_title_info">
					<view class="title_info_data">
						<text>{{monthslist.DD}}/</text>
						{{monthslist.MM}} 月
					</view>
					<view class="title_info_text">{{monthslist.title}}</view>
				</view>
				<view class="month_title_more">更多 > </view>
			</view>
			<view class="month_content">
				<view class="content_item" v-for="item in monthslist.items" :key="item.id">
					<image :src="item.thumb+item.rule.replace('$<Height>',360)" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<!-- 月份相关结束 -->
		<!-- 热门模块开始 -->
		<view class="hots_wrap">
			<view class="hots_title">
				<text>热门</text>
			</view>
			<view class="hots_content">
				<view class="hots_item" v-for="item in hots" :key="item.id">
					<image :src="item.thumb" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<!-- 热门模块结束 -->
	</scroll-view>
</template>

<script>
	// 引入moment.js 处理时间戳
	import moment from "moment"
	export default {
		data() {
			return {
				// 推荐模块数据
				recommentdlist: [],
				// 月份数据
				monthslist: {},
				// 热门数据
				hots: [],
				// 是否还有分页数据
				hasMore: true
			}
		},
		mounted() {
			this.getdata()
		},
		methods: {
			getdata() {
				// 获取推荐数据
				this.$http({
					url: "v3/homepage/vertical"
				}).then(result => {
					if(this.recommentdlist.length === 0){
						this.recommentdlist = result.res.homepage[1].items;
						this.monthslist = result.res.homepage[2];
						// 时间戳修改
						this.monthslist.MM = moment(this.monthslist.stime).format("MM")
						this.monthslist.DD = moment(this.monthslist.stime).format("DD")
						console.log(result)
						this.hots = result.res.vertical
					}
				})
			},
			handToLower() {
				// 滚动条触底事件
				console.log(11)
				// 1.修改请求条数，2.重新发送请求，3.请求回来成功，追加参数
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 滚动区域高度设置,动态计算
	.recommend_scroll {
		height: calc(100vh -36px);
	}

	// 推荐样式
	.recommend_wrap {
		min-height: 350rpx;
		display: flex;
		flex-wrap: wrap;

		.recommend_item {
			width: 50%;
			border: 3rpx solid #fff;
		}
	}

	// 月份相关样式
	.month_wrap {
		.month_title {
			display: flex;
			justify-content: space-between;
			padding: 20rpx;

			.month_title_info {
				color: $MyColor;
				font-size: 30rpx;
				font-weight: 600;
				display: flex;

				.title_info_data {
					text {
						font-size: 36rpx;
					}
				}

				.title_info_text {
					font-size: 34rpx;
					color: #666;
					margin-left: 30rpx;
				}
			}

			.month_title_more {
				font-size: 24rpx;
				color: $MyColor;
			}
		}

		.month_content {
			display: flex;
			flex-wrap: wrap;

			.content_item {
				width: 33.33%;
				border: 5rpx solid #fff;
			}
		}
	}

	// 热门样式
	.hots_wrap {
		.hots_title {
			padding: 20rpx;

			text {
				font-style: 34rpx;
				border-left: 15rpx solid $MyColor;
				padding-left: 20rpx;
				font-weight: 600;
			}
		}

		.hots_content {
			display: flex;
			flex-wrap: wrap;

			.hots_item {
				width: 33.33%;
				border: 5rpx solid #fff;

				image {}
			}
		}
	}
</style>
