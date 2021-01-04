<template>
	<view class="py-2 px-4 d-flex border-bottom border-light-secondary">
		<image :src="sourceData.img" style="width: 180rpx; height: 180rpx;"></image>
		<view class="ml-2 d-flex flex-column j-center">
			<view class="font-md text-addone line-h-lg">{{ sourceData.name }}</view>
			<view class="text-light-muted">金色</view>
		</view>
		<view class="d-flex flex-column j-center ml-auto a-end">
			<text class="font-md text-light-muted line-h-lg">{{ sourceData.price }}</text>
			<text class="text-light-muted">x{{ sourceData.num }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			sourceData: Object
		}
	}
</script>

<style>
</style>
