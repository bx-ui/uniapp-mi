<template>
	<view style="height: 100%; background: #efeeec;">
		<view class="main-bg-color d-flex j-sb px-2 a-center" style="height: 260rpx" @tap="chooseItemAddress">
			<view class="d-flex flex-column j-center ">
				<view class="d-flex a-center font-md text-white">
					<text class="d-block">邴鑫</text>
					<text class="d-block ml-1">188****6731</text>
					<view class="border border-white line-h-0 ml-1" style="padding: 0rpx 10rpx;">默认</view>
				</view>
				<view class="text-white mt-1">山东省 青岛市 李沧区 青峰路66号</view>
			</view>
			<view class="icon iconfont font-big text-white">&#xe68c;</view>
		</view>
		<view style="background: white; border-radius: 30rpx 30rpx 0rpx 0rpx; margin-top: -30rpx;">
			<view style="border-radius: 30rpx 30rpx 0rpx 0rpx; height: 130rpx;"
			class="d-flex px-2 j-sb a-center border-bottom border-light-secondary">
				<view class="d-flex">
					<image src="../../static/image/demo/demo6.jpg" mode="" style="height: 90rpx; width: 90rpx;" class="d-block mr-1"></image>
					<image src="../../static/image/demo/demo6.jpg" mode="" style="height: 90rpx; width: 90rpx;" class="d-block mr-1"></image>
					<image src="../../static/image/demo/demo6.jpg" mode="" style="height: 90rpx; width: 90rpx;" class="d-block"></image>
				</view>
				<view class="d-flex a-center">
					<text>共3件</text>
					<text class="icon iconfont font-lg">&#xe68c;</text>
				</view>
			</view>
			<list-item height="90rpx" title="商品总价" :rightIcon="false">
				<template v-slot:rightContent>
					<view class="font-weight font-cc">￥20.00</view>
				</template>
			</list-item>
			<list-item height="90rpx" title="运费" :rightIcon="false">
				<template v-slot:rightContent>
					<view class="font-weight font-cc">包邮</view>
				</template>
			</list-item>
			<list-item height="90rpx" title="优惠卷" @itemClick="jumpCouponPage">
				<template v-slot:rightContent>
					<view class="font-cc">暂无优惠卷</view>
				</template>
			</list-item>
			<list-item height="90rpx" title="小计" :rightIcon="false" textColor="main-text-color">
				<template v-slot:rightContent>
					<view class="font-weight font-cc main-text-color">￥20.00</view>
				</template>
			</list-item>
			<divider />
			<list-item height="90rpx" title="发票" @itemClick="jumpInvoicePage">
				<template v-slot:rightContent>
					<view class="font-cc">电子发票-个人</view>
				</template>
			</list-item>
		</view>
		<!-- 底部操作栏 -->
		<view style="height: 90rpx" class="position-absolute left-0 right-0 bottom-0 bg-white px-4 d-flex j-end a-center">
			<text class="font-weight mr-2">合计:</text>
			<text class="main-text-color font-weight">￥20.00</text>
			<view class="px-4 main-bg-color py-1 text-white ml-2" style="border-radius: 25rpx;" @click="payMoney">去付款</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			chooseItemAddress() {
				uni.navigateTo({
					url: "/pages/address/address"
				})
			},
			jumpInvoicePage() {
				uni.navigateTo({
					url: "/pages/invoice/invoice"
				})
			},
			payMoney() {
				uni.navigateTo({
					url: "/pages/payType/payType"
				})
			},
			jumpCouponPage() {
				uni.navigateTo({
					url: "/pages/coupon/coupon"
				})
			}
		},
		onLoad() {
			uni.$on("loadAddressInfo", (obj) => {
				console.log("我进来了", obj)
			})
		},
		onUnload() {
			uni.$off()
		}
	}
</script>

<style>

</style>
