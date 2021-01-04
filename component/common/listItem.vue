<template>
	<view class="d-flex a-center border-bottom border-light-secondary px-2 bg-white" :style="{'height': height}" @tap="$emit('itemClick')">
		<!-- <view class="icon iconfont text-danger" :class="[iconSize]" v-if="icon">{{ icon }}</view> -->
		<block v-if="title">
			<slot></slot>
			<view class="ml-1" :class="textColor">{{ title }}</view>
		</block>
		<block v-else>
			<slot name="leftContent"></slot>
		</block>
		<view class="ml-auto d-flex a-center">
			<slot name="rightContent"></slot>
			<view class="icon iconfont font-lg  text-secondary ml-1" v-if="rightIcon">&#xe68c;</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			height: {
				type: String,
				default: '120rpx'
			},
			icon: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			bg: {
				type: String,
				default: 'bg-white'
			},
			rightIcon: {
				type: Boolean,
				default: true
			},
			textColor: {
				type: String,
				default: "text-addone"
			}
		},
	}
</script>

<style>
</style>
