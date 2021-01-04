<template>
	<view class="px-2 row">
		<view 
		class="py-1 mb-2 b-box d-flex a-center j-center"
		:style="'width:'+itemWidth"
		v-for="(item, index) in currList" :key="index"
		:class="[value == index ? 'show-server' : 'bg-light-secondary', margin]"
		@tap="changeIndex(index)"
		>
		{{ item.name }}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			currList: Array,
			value: {
				type: Number | null,
				default: null
			},
			margin: {
				type: String,
				default: "mr-2"
			},
			itemWidth: {
				type: String,
				default: '120rpx'
			}
		},
		methods: {
			changeIndex(index) {
				this.$emit("input", index);
				this.$emit("change", index)
			}
		}
	}
</script>

<style>
	.show-server {
		border: 1px solid #FD6801;
		background: #fce0d5;
		color: #FD6801;
	}
</style>
