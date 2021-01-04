<template>
	<view class="content animated fadeIn faster">
		<loading-plus v-if="loadingShow"></loading-plus>
		<scroll-view scroll-x class="scroll-row border-bottom" style="height: 80rpx" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view class="scroll-row-item text-muted" style="height: 80rpx; line-height: 80rpx; padding: 0rpx 30rpx;" v-for="(item, index) in topList" :key="index" @tap="changeTab(index)" :id="'tab'+index">
				<text :class="{'text-danger': index == topIndex}">{{ item.name }}</text>
			</view>
		</scroll-view>
		<swiper :current="topIndex" :style="'height:'+swiperHeight+'px'" :duration="200" @change="onTabChange">
			<swiper-item v-for="(item, index) in topList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+swiperHeight+'px'" @scrolltolower="loadMore">
					<swiper-image :resdata="swipers"/>
					<index-nav :resNav="navList"/>
					<divider />
					<view class="d-flex">
						<image src="../../static/image/demo/demo1.jpg" mode="" style="width: 373upx; height: 530upx;"></image>
						<view class="d-flex flex-column j-start" style="margin-left: 2upx;">
							<image src="../../static/image/demo/demo2.jpg" mode="" style="width: 375upx; height: 264upx; margin-bottom: 2upx;"></image>
							<image src="../../static/image/demo/demo3.jpg" mode="" style="width: 375upx; height: 264upx;"></image>
						</view>
					</view>
					<cart title="每日精选" url="/static/image/demo/demo4.jpg" />
					<shop-list :shopIndexList="shopIndexList"/>
					<text class="d-flex a-center text-light-muted py-2 text-center j-center">{{ loadText }}</text>
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import swiperImage from "../../component/index/swiper-image.vue"
	import indexNav from "../../component/index/index-nav.vue"
	import loading from "@/mixin/loading.js"
	export default {
		components: { swiperImage, indexNav },
		mixins: [loading],
		data() {
			return {
				swipers: [
					{
						src: "../../static/image/demo/cate_banner.png"
					},
					{
						src: "../../static/image/demo/cate_banner.png"
					}
				],
				navList: [
					{
						src: "../../static/image/indexnav/1.png",
						name: "新品发布"
					},
					{
						src: "../../static/image/indexnav/2.gif",
						name: "小米众筹"
					},
					{
						src: "../../static/image/indexnav/3.gif",
						name: "以旧换新"
					},
					{
						src: "../../static/image/indexnav/4.gif",
						name: "一分拼团"
					},
					{
						src: "../../static/image/indexnav/5.gif",
						name: "超值特卖"
					},
					{
						src: "../../static/image/indexnav/6.gif",
						name: "小米秒杀"
					},
					{
						src: "../../static/image/indexnav/7.gif",
						name: "真心想要"
					},
					{
						src: "../../static/image/indexnav/8.gif",
						name: "电视热卖"
					},
					{
						src: "../../static/image/indexnav/9.gif",
						name: "家电热卖"
					},
					{
						src: "../../static/image/indexnav/10.gif",
						name: "米粉卡"
					}
				],
				shopIndexList: [
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					}
				],
				topList: [
					{
						name: "推荐"
					},
					{
						name: "体育"
					},
					{
						name: "热点"
					},
					{
						name: "财经"
					},
					{
						name: "娱乐"
					},
					{
						name: "军事"
					},
					{
						name: "生活"
					},
					{
						name: "城市"
					}
				],
				topIndex: 0,
				swiperHeight: null,
				scrollinto: 'tab0',
				loadText: "上拉加载更多"
			}
		},
		onLoad() {
			// 计算swiper高度
			setTimeout(() => {
				uni.getSystemInfo({
					success: (res) => {
						this.swiperHeight = res.windowHeight - uni.upx2px(82)
					}
				})
			})
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: "/pages/search/search",
				animationType: "slide-in-right",
			})
		},
		methods: {
			// 切换选项卡
			changeTab(index) {
				if(this.topIndex === index) return;
				this.topIndex = index;
				this.scrollinto = 'tab'+index;
			},
			onTabChange(e) {
				console.log(e);
				this.changeTab(e.detail.current)
			},
			loadMore() {
				console.log(1111);
				if(this.loadText !== '上拉加载更多') return;
				this.loadText = "加载中";
				setTimeout(() => {
					this.loadText = "没有更多了"
				}, 2000)
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				this.loadText = "上拉加载更多";
				uni.stopPullDownRefresh()
			}, 1000)
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding-bottom: var(--window-bottom);
		width: 100%;
	}
</style>
