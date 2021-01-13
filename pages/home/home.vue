<template>
		<view class="home_tab">
			<view class="home_tab_title">
				<view class="title_inner">
					<uni-segmented-control :current="current" :values="items.map(v => v.title)" @clickItem="onClickItem" style-type="text"
					 active-color="#d4237a"></uni-segmented-control>
				</view>
				<view class="iconfont icon-search"></view>
			</view>
			<view class="home_tab_content">
				<view v-if="current === 0">
					<!-- 推荐组件 -->
					<recommend></recommend>
				</view>
				<view v-if="current === 1">
					<!-- 分类组件 -->
					<category></category>
				</view>
				<view v-if="current === 2">
					<!-- 最新组件 -->
					<news></news>
				</view>
				<view v-if="current === 2">
					<!-- 专辑组件 -->
					<album></album>
				</view>
			</view>
		</view>
</template>

<script>
	// 引入首页的四个组件
	import recommend from "../../components/recommend.vue"
	import category from "../../components/category.vue"
	import news from "../../components/news.vue"
	import album from "../../components/album.vue"
	// 引入分段器
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		data() {
			return {
				// 分段器标题
				items: [{
						title: "推荐"
					},
					{
						title: "分类"
					},
					{
						title: "最新"
					},
					{
						title: "专辑"
					},
				],
				// 分段器当前索引
				current: 0
			}
		},
		methods: {
			// 分段器点击事件
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		},
		components: {
			recommend,
			category,
			news,
			album
		},
		onLoad() {
			// this.$http({
			// 	url: "v3/homepage/vertical"
			// }).then(res=>{
			// 	console.log(res)
			// })
		}
	}
</script>

<style lang="scss">
	.home_tab {
		.home_tab_title{
			position: relative;
			
			.title_inner{
			// 分段器标题
				width: 60%;
				margin: 0 auto;
			}
			.icon-search{
			// search图标
			position: absolute;
			top: 30%;
			transform: translate(-50%);
			right: 5%;
			}
		}
		.home_tab_content {
			
		}
	}

</style>
