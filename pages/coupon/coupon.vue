<template>
	<view style="height: 100%; background: #efeeec;">
		<scroll-view scroll-x="true" class="scroll-row bg-white" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view class="scroll-row-item span-10 text-center" :class="{'showBorder': currentIndex == index}" style="line-height: 90rpx;" v-for="(item, index) in navList" :key="index" @tap="changeTab(index)" :id="'tab'+index">{{ item.name }}</view>
		</scroll-view>
		<swiper :current="currentIndex" :duration="200" :style="'height:'+swiperHeight+'px'" @change="onTabChange">
			<swiper-item @change="onTabChange" v-for="(swipers, index) in swiperList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+swiperHeight+'px'" class="p-4 b-box">
					
					<coupon-item :sourceList="swipers.list"></coupon-item>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import couponItem from "@/component/coupon/coupon-item.vue"
	export default {
		components: { couponItem },
		data() {
			return {
				currentIndex: 0,
				navList: [
					{
						name: "可用"
					},
					{
						name: "已失效"
					}
				],
				swiperHeight: "",
				scrollinto: 'tab0',
				swiperList: [
					{
						list: [
							{
								leftname: "手机离间1000元",
								leftTime: "2019-09-01 ~ 2019-10-01",
								delMoney: 100,
								manMoney: 3000,
								status: 1,  // 1可用 2已失效
							},
							{
								leftname: "手机离间1000元",
								leftTime: "2019-09-01 ~ 2019-10-01",
								delMoney: 100,
								manMoney: 3000,
								status: 1,  // 1可用 2已失效
							}
						],
					},
					{
						list: [
							{
								leftname: "手机离间1000元",
								leftTime: "2019-09-01 ~ 2019-10-01",
								delMoney: 100,
								manMoney: 3000,
								status: 2,  // 1可用 2已失效
							},
							{
								leftname: "手机离间1000元",
								leftTime: "2019-09-01 ~ 2019-10-01",
								delMoney: 100,
								manMoney: 3000,
								status: 2,  // 1可用 2已失效
							}
						],
					}
				]
			}
		},
		methods: {
			changeTab(index) {
				if(this.currentIndex !== index) {
					this.currentIndex = index;
					this.scrollinto = "tab" + index;
				}
				
			},
			onTabChange(e) {
				this.changeTab(e.detail.current)
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.swiperHeight = res.windowHeight - uni.upx2px(90)
				}
			})
		}
	}
</script>

<style>
.showBorder {
	border-bottom: 1px solid #FD6801;
}
</style>
