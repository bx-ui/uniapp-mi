<template>
	<view class="d-flex a-start" style="margin-right: 12upx;">
		<text class="font-sm text-danger">￥</text>
		<text class="font-lg text-danger line-h" :class="{'font-weight': weight, size}">{{ money }}</text>
	</view>
</template>

<script>
	export default {
		props: {
			money: String | Number,
			weight: {
				type: Boolean,
				default: false
			},
			size: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>
</style>
