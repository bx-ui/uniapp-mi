<template>
	<view class="px-2">
		<scroll-view scroll-x="true" class="scroll-row">
			<view style="width: 620rpx; height: 380rpx; background: #f5f5f3;" class="rounded mr-2 scroll-row-item" v-for="(item, index) in resData" :key="index">
				<view class="px-2 py-2 d-flex a-center">
					<image :src="item.headPortrait" mode="" style="width: 70rpx; height: 70rpx;" class="rounded-circle"></image>
					<view class="d-flex flex-column j-center ml-3">
						<text class="line-h-sm">{{ item.name }}</text>
						<text class="text-light-muted">{{ item.createTime }}</text>
					</view>
					<view class="d-flex ml-auto a-center">
						<view class="icon iconfont font-lg text-light-muted">&#xe60a;</view>
						<text class="text-light-muted">{{ item.thumbsNum }}</text>
					</view>
				</view>
				<view class="text-addone font-md one-hidden px-2">{{ item.content }}</view>
				<view class="d-flex mt-2 px-2">
					<block v-for="(a, b) in item.evaluateImg" :key="b">
						<image :src="a.url" mode="" style="height: 180rpx;" class="flex-1 d-block" :class="item.evaluateImg.length != index + 1 ? 'mr-2' : ''"></image>
					</block>
				</view>
			</view>
		</scroll-view>
		<view class="line-h-lg py-2 text-primary d-flex a-center j-center" hover-class="background: #F1F1F1" @tap="jumpEvaluate">
			<text>更多评论</text>
			<text class="icon iconfont font-lg">&#xe68c;</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			resData: Array
		},
		methods: {
			jumpEvaluate() {
				uni.navigateTo({
					url: "/pages/shop-evaluate/shop-evaluate"
				})
			}
		}
	}
</script>

<style>
</style>
