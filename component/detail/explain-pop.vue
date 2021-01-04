<template>
	<u-popup v-model="value" mode="bottom" border-radius="20" height="80%" @close="close">
		<view class="p-2">
			<view class="text-center line-h-lg font-md font-weight border-bottom border-light-secondary">服务说明</view>
			<view class="d-flex mt-2 px-2">
				<view class="icon iconfont text-dark mr-1">&#xe638;</view>
				<view>小米自营</view>
			</view>
			<view class="d-flex mt-2 px-2">
				<view class="icon iconfont text-dark mr-1">&#xe638;</view>
				<view>小米发货</view>
			</view>
			<view class="text-muted px-4">由小米发货</view>
			<view class="d-flex mt-2 px-2">
				<view class="icon iconfont text-dark mr-1">&#xe638;</view>
				<view>七天无理由退货</view>
			</view>
			<view class="d-flex mt-2 px-2">
				<view class="icon iconfont text-dark mr-1">&#xe638;</view>
				<view>运费说明</view>
			</view>
		</view>
	</u-popup>
</template>

<script>
	export default {
		props: {
			value: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			close() {
				this.$nextTick(() => {
					this.$emit("input", false)
				})
			}
		}
	}
</script>

<style>
</style>
