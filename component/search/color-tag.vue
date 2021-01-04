<template>
	<view class="px-2 py-1 d-inline-block line-h-sm mr-2 mb-2" :style="getStyle">{{ text }}</view>
</template>

<script>
	export default {
		props: {
			text: String,
			bgcolor: String,
			color: {
				type: String,
				default: '#000000'
			}
		},
		computed: {
			getStyle() {
				if(this.bgcolor) {
					return `border: 0; background: ${this.bgcolor}; color: ${color}`
				}
				let color = {
					borderColor: ['#EEA6AA', '#DD6A4B', '#98D5D8', '#9DBE93', '#BCCD99'],
					background: ['#F8EAE9', '#FFBEC6', '#E8F6F6', '#E4F5E2', '#F2F6E8']
				}
				let index = Math.floor(Math.random() * color.borderColor.length)
				let borderColor = color.borderColor[index];
				let background = color.background[index];
				return `background: ${background}; border: 1px solid ${borderColor}; color: ${color}`
			}
		}
	}
</script>

<style>
</style>
