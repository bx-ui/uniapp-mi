<template>
	<view class="row p-2">
		<block v-for="(item, index) in resNav" :key="index">
			<view class="span-4 text-center line-h-big d-flex flex-column a-center my-2">
				<image :src="item.src" mode="" style="width: 54upx; height: 51upx;"></image>
				<text class="text-addone font-sm">{{ item.name }}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			resNav: Array
		}
	}
</script>

<style>
</style>
