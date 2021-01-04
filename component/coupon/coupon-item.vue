<template>
	<view class="">
		<view class="w-100 d-flex bg-white mb-4" style="height: 180rpx;" v-for="(item, index1) in sourceList" :key="index1">
			<view class="pl-4 d-flex flex-column j-center b-box" style="flex: 1.5">
				<text class="font-lg text-addone line-h-lg">{{ item.leftname }}</text>
				<text class="font-cc text-light-muted">{{ item.leftTime }}</text>
			</view>
			<view class="d-flex flex-column a-center" style="flex: 1" :class="item.status == 1 ? 'main-bg-color' : 'bg-coupon'">
				<view class="text-white line-h-sm mt-1">
					<text class="font-lg">{{ item.delMoney }}</text>
					<text class="font-md">元</text>
				</view>
				<view class="text-white mb-2">满{{ item.manMoney }}元使用</view>
				<view class="px-2 bg-white line-h-0 d-inline-block main-text-color" :class="item.status == 1 ? 'main-text-color' : 'text-coupon'">去使用</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			sourceList: Array
		}
	}
</script>

<style>
	.bg-coupon {
		background: #767676;
	}
	.text-coupon {
		color: #767676;
	}
</style>
