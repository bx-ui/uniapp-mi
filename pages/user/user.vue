<template>
	<view class="animated fadeIn faster">
		<loading-plus v-if="loadingShow"></loading-plus>
		<view class="position-relative">
			<image src="/static/image/bg.jpg" mode="widthFix" style="height: 320rpx;"></image>
			<view class="icon iconfont font-big position-absolute text-white" style="right: 20rpx; top: 30rpx;">&#xe619;</view>
			<view class="position-absolute d-flex pl-4 w-100" style="left: 0rpx; top: 140rpx;">
				<view class="border border-white rounded-circle" style="width: 120rpx; height: 120rpx" >
					<image src="/static/image/demo/demo6.jpg" mode="" style="width: 120rpx; height: 120rpx" class="rounded-circle"></image>
				</view>
				<view class="pl-2 text-white d-flex a-center">测试昵称</view>
				<view class="d-flex a-end ml-auto">
					<view class="bg-warning tip px-4 text-danger px-2">
						<text class="icon iconfont font-sm" space="ensp">&#xe603; 会员积分1.99</text>
					</view>
				</view>
			</view>
		</view>
		<cart title="我的订单" :hasBorder="true">
			<template v-slot:titleSlot>
				<view class="" @tap="jumpOrderPage">
					<text>全部订单</text>
					<text class="icon iconfont font-lg">&#xe68c;</text>
				</view>
			  </template>
			  <template>
			  	<view class=" d-flex py-2"> 
					<view class="flex-1 d-flex flex-column j-center a-center">
						<image src="/static/image/dfk.png" mode="" style="height: 50rpx; width: 50rpx;"></image>
						<text>待付款</text>
					</view>
					<view class="flex-1 d-flex flex-column j-center a-center">
						<image src="/static/image/dfh.png" mode="" style="height: 50rpx; width: 50rpx;"></image>
						<text>待收货</text>
					</view>
					<view class="flex-1 d-flex flex-column j-center a-center">
						<image src="/static/image/dpj.png" mode="" style="height: 50rpx; width: 50rpx;"></image>
						<text>待评价</text>
					</view>
					<view class="flex-1 d-flex flex-column j-center a-center">
						<image src="/static/image/tx.png" mode="" style="height: 50rpx; width: 50rpx;"></image>
						<text>退换修</text>
					</view>
				</view>
			   </template>
		</cart>
		<divider />
		<view class="w-100 mb-2">
			<image src="/static/image/demo/demo4.jpg" style="height: 300rpx;"></image>
		</view>
		<list-item title="小米会员">
			<view class="icon iconfont text-warning font-lg">&#xe68e;</view>
		</list-item>
		<list-item title="会员中心">
			<view class="icon iconfont text-warning font-lg">&#xe68e;</view>
		</list-item>
		<list-item title="服务中心">
			<view class="icon iconfont text-danger font-md ">&#xe62f;</view>
		</list-item>
		<list-item title="小米之家">
			<view class="icon iconfont main-text-color font-md ">&#xe669;</view>
		</list-item>
		<list-item title="更多功能">
			<view class="icon iconfont text-success font-lg">&#xe627;</view>
		</list-item>
		<divider />
		<list-item title="更多设置" @itemClick="moreSetting">
			<view class="icon iconfont text-secondary font-lg">&#xe611;</view>
		</list-item>
	</view>
</template>

<script>
	import loading from "@/mixin/loading.js"
	export default {
		mixins: [loading],
		data() {
			return {
				
			}
		},
		methods: {
			moreSetting() {
				uni.navigateTo({
					url: "/pages/setting/setting"
				})
			},
			jumpOrderPage() {
				uni.navigateTo({
					url: "/pages/order/order"
				})
			}
		}
	}
</script>

<style>
.tip {
	/* height: 52rpx; */
	border-top-left-radius: 30rpx;
	border-bottom-left-radius: 30rpx;
}
</style>
