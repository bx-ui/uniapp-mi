<template>
	<view>
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" title="我的订单" :fixed="true" left-icon="arrowleft">
			<template v-slot:right>
				<view class="d-flex a-center">
					<view class="icon iconfont font-lg mr-2">&#xe66d;</view>
					<view class="icon iconfont" style="font-size: 46upx;">&#xe63c;</view>
				</view>
			</template>
		</uni-nav-bar>
		<scroll-view scroll-x class="scroll-row d-flex w-100" :scroll-with-animation="true" :scroll-into-view="scrollinto">
			<view class="flex-1 scroll-row-item text-center span24-6 font-cc"
			 v-for="(item, index) in tabList" :key="index" 
			 :class="index === showTab ? 'active' : ''" 
			 style="line-height: 90rpx;" 
			 @tap="changeTab(index)"
			 :id="'tab'+index">
			{{ item.name }}
			</view>
		</scroll-view>
		<divider />
		<swiper :current="showTab" :duration="200" :style="'height:'+swiperHeight+'px'" @change="onTabChange">
			<swiper-item v-for="(swiper, index) in swiperList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+swiperHeight+'px'" >
					<view v-for="(list, index1) in swiper.list" :key="index1" @tap="jumpOrderDetailPage">
						<view class="d-flex flex-column">
							<view class="d-flex j-sb border-bottom border-light-secondary line-h-big px-2">
								<text class="text-light-muted">{{ list.time }}</text>
								<text class="main-text-color">{{ list.status | showStatus }}</text>
							</view>
							<block v-for="(item, index2) in list.shopList" :key="index2">
								<!-- 空 -->
								<order-item :sourceData="item"></order-item>
							</block>
							
							<text class="font-weight font-cc text-right px-2 line-h-big">共三件商品，合计：￥{{ list.totalPrice }}</text>
							<view class="d-flex j-end px-2 pb-2">
								<view class="px-2 py-1 border border-light-secondary mr-2" v-if="list.status == 2">查看物流</view>
								<view class="px-2 py-1 border border-light-secondary" v-if="list.status == 2">确认收货</view>
								<view class="px-2 py-1 border border-light-secondary main-bg-color text-white" v-if="list.status == 1">去支付</view>
								<view class="px-2 py-1 border border-light-secondary" v-if="list.status == 3">去评价</view>
							</view>
						</view>
						<divider />
					</view>
					<!-- 猜你喜欢 -->
					<view class="pt-5" style="background: #f5f5f5;">
						<view class="main-text-color font-weight text-center" style="font-size: 32rpx;">猜你喜欢</view>
						<view class="line-block">
							<view class="line-lines"></view>
							<view class="line-content">实时推荐你的爱</view>
						</view>
						<shop-list :shopIndexList="shopIndexList"/>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
	
<script>
	import uniNavBar from "@/component/uni/uni-nav-bar/uni-nav-bar.vue"
	import orderItem from "@/component/order/orderItem.vue"
	export default {
		components: { uniNavBar, orderItem },
		data() {
			return { 
				showTab: 0,
				tabList: [
					{
						name: "全部"
					},
					{
						name: "待付款"
					},
					{
						name: "待收货"
					},
					{
						name: "待评价"
					}
				],
				swiperList: [
					{
						list: [
							{
								time: "2019-06-20 10:20",
								status: 1,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米8",
										price: "1999",
										num: "1"
									},
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米Max",
										price: "1099",
										num: "1"
									}
								],
								totalPrice: "2056"
							},
							{
								time: "2019-06-20 10:20",
								status: 2,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米8",
										price: "1999",
										num: "1"
									},
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米Max",
										price: "1099",
										num: "1"
									}
								],
								totalPrice: "2056"
							},
							{
								time: "2019-06-20 10:20",
								status: 3,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米8",
										price: "1999",
										num: "1"
									},
								],
								totalPrice: "2056"
							}
						]
					},
					{
						list: [
							{
								time: "2019-06-20 10:20",
								status: 1,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米体验卡",
										price: "1999",
										num: "1"
									},
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米Max",
										price: "1099",
										num: "1"
									}
								],
								totalPrice: "2056"
							},
							{
								time: "2019-06-20 10:20",
								status: 1,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米8",
										price: "1999",
										num: "1"
									},
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米Max",
										price: "1099",
										num: "1"
									}
								],
								totalPrice: "2056"
							},
							{
								time: "2019-06-20 10:20",
								status: 1,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米8",
										price: "1999",
										num: "1"
									},
								],
								totalPrice: "2056"
							}
						]
					},
					{
						list: [
							{
								time: "2019-06-20 10:20",
								status: 2,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米体验卡",
										price: "1999",
										num: "1"
									},
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米Max",
										price: "1099",
										num: "1"
									}
								],
								totalPrice: "2056"
							},
							{
								time: "2019-06-20 10:20",
								status: 2,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米8",
										price: "1999",
										num: "1"
									},
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米Max",
										price: "1099",
										num: "1"
									}
								],
								totalPrice: "2056"
							},
							{
								time: "2019-06-20 10:20",
								status: 2,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米8",
										price: "1999",
										num: "1"
									},
								],
								totalPrice: "2056"
							}
						]
					},
					{
						list: [
							{
								time: "2019-06-20 10:20",
								status: 3,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米体验卡",
										price: "1999",
										num: "1"
									},
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米Max",
										price: "1099",
										num: "1"
									}
								],
								totalPrice: "2056"
							},
							{
								time: "2019-06-20 10:20",
								status: 3,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米8",
										price: "1999",
										num: "1"
									},
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米Max",
										price: "1099",
										num: "1"
									}
								],
								totalPrice: "2056"
							},
							{
								time: "2019-06-20 10:20",
								status: 3,  // 1 待付款(待付款) 2 待收货(已发货) 3 待评价（待评价） 
								shopList: [
									{
										img: "/static/image/demo/list/4.jpg",
										name: "小米8",
										price: "1999",
										num: "1"
									},
								],
								totalPrice: "2056"
							}
						]
					}
				],
				scrollinto: 'tab0',
				swiperHeight: '',
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
			}
		},
		filters: {
			showStatus(status) {
				switch(status) {
					case 1:
						return "待付款"
					case 2:
						return "待收货"
					case 3:
						return "待评价"
				}
			}
		},
		methods: {
			changeTab(index) {
				if(this.showTab !== index) {
					this.showTab = index;
					this.scrollinto = 'tab'+index;
				}
			},
			onTabChange(e) {
				console.log(e)
				this.changeTab(e.detail.current)
			},
			jumpOrderDetailPage() {
				uni.navigateTo({
					url: "/pages/orderDetail/orderDetail"
				})
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.swiperHeight = res.windowHeight - uni.upx2px(240)
				}
			})
		}
	}
</script>

<style scoped>
.active {
	color: #FD6801;
	border-bottom: 1px solid #FD6801;
}
.line-block {
	width: 100%;
	height: 60rpx;
	position: relative;
}
.line-lines {
	width: 100%;
	height: 1rpx;
	background: #dddddd;
	position: absolute;
	top: 30rpx;
	left: 0;
	right: 0;
}
.line-content {
	width: 240rpx;
	height: 60rpx;
	background: #f5f5f5;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #b2b2b2;
}
</style>
