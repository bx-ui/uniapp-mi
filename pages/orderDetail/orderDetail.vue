<template>
	<view>
		<view style="height: 400rpx; padding-top: 200rpx;" class="main-bg-color">
			<view class="d-flex j-sb px-5">
				<view class="d-flex flex-column">
					<text class="font-lg text-white">卖家已发货</text>
					<text class="font-md text-white">还差7时10分自动确认</text>
				</view>
				<view class="icon iconfont text-white" style="font-size: 80rpx;">&#xe6b2;</view>
			</view>
		</view>
		<view class="p-2">
			<view class="d-flex a-center">
				<text class="font-lg d-block mr-1">邴鑫</text>
				<text class="text-light-muted">188****6731</text>
			</view>
			<view class="text-light-muted">
				山东省 青岛市 李沧区青峰路街道
			</view>
		</view>
		<divider />
		<view class="" v-for="(item, index) in orderList" :key="index">
			<order-item :sourceData="item" />
		</view>
		<divider />
		<list-item title="商品总价" textColor="text-light-muted" :rightIcon="false">
			<template v-slot:rightContent>
				<text class="text-light-muted">￥102.0</text>
			</template>
		</list-item>
		<list-item title="快递" textColor="text-light-muted" :rightIcon="false">
			<template v-slot:rightContent>
				<text class="text-light-muted">￥10</text>
			</template>
		</list-item>
		<list-item title="优惠卷" textColor="text-light-muted" :rightIcon="false">
			<template v-slot:rightContent>
				<text class="text-light-muted">-￥10</text>
			</template>
		</list-item>
		<list-item title="实际付款" textColor="main-text-color" :rightIcon="false">
			<template v-slot:rightContent>
				<text class="main-text-color">￥110</text>
			</template>
		</list-item>
		<divider />
		<view class="font-weight px-2 py-2">订单信息</view>
		<list-item title="订单编号" :rightIcon="false">
			<template v-slot:rightContent>
				<text class="main-text-color">123123123</text>
			</template>
		</list-item>
	</view>
</template>

<script>
	import orderItem from "@/component/order/orderItem.vue"
	export default {
		components: { orderItem },
		data() {
			return {
				orderList: [
					{
						img: "/static/image/demo/list/4.jpg",
						name: "小米8",
						price: "1999",
						num: "1"
					},
					{
						img: "/static/image/demo/list/4.jpg",
						name: "小米8",
						price: "1999",
						num: "1"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
