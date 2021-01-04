<template>
	<view class="row">
		<block v-for="(item, index) in shopIndexList" :key="index">
			<view style="width: 373upx;" class="d-flex flex-column item-block mb-1" @tap="openDetail">
				<image :src="item.src" mode="" style="height: 368upx;"></image>
				<view class="font-weight font px-2" style="margin-top: 10upx;">{{ item.name }}</view>
				<text class="text-light-muted font-sm px-2">{{ item.subname }}</text>
				<view class="d-flex px-2 a-center" style="margin-top: 10upx;">
					<price :money="item.endPrice" style="margin-right: 12upx;"/>
					<view class="d-flex a-start" style="margin-right: 12upx;">
						<text class="font-sm text-light-muted">￥</text>
						<text class="text-light-muted font-sm">{{ item.fristPrice }}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import price from "./price.vue"
	export default {
		components: { price },
		props: {
			shopIndexList: Array
		},
		methods: {
			openDetail() {
				console.log("2343434")
				uni.navigateTo({
					url: "/pages/shopDetail/shopDetail"
				})
			}
		}
	}
</script>

<style>
	.item-block:nth-of-type(even){ margin-left: 5upx; }
	.kl { margin-left: 10upx; }
</style>
