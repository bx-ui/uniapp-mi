<template>
	<view class="card">
		<!-- <text class="font-md line-h-big px-2 d-block" :class="{'border-bottom': hasBorder, 'font-weight': boldTitle}">{{ title }}</text> -->
		<view :class="{'border-bottom': hasBorder}" class="d-flex j-sb a-center px-2">
			<text class="line-h-big d-block" :class="[
				boldTitle ? 'font-weight' : '',
				titleSize
			]">{{ title }}</text>
			<slot name="titleSlot"></slot>
		</view>
		<image :src="url" mode="" style="height: 240rpx;" v-if="url"></image>
		<view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			url: String,
			hasBorder: {
				type: Boolean,
				default: false
			},
			boldTitle: {
				type: Boolean,
				default: true
			},
			titleSize: {
				type: String,
				default: 'font-md'
			}
		}
	}
</script>

<style>
</style>
