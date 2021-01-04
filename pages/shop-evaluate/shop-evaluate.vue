<template>
	<view>
		<view class="px-2 pt-4">
			<view class="border-bottom border-light-secondary d-flex j-sb a-center">
				<view class="font-md line-h-big">用户评价(123)</view>
				<view class="font-md">
					<text class="main-text-color">98.5%</text>
					<text>满意</text>
				</view>
			</view>
		</view>
		<view class="mt-2 mb-4">
			<radioGroupList :currList="evalList.list" v-model="evalList.currentIndex" />
		</view>
		<divider />
		<view class="px-2">
			<view class="py-2 border-bottom border-light-secondary" v-for="a in 6" :key="a">
				<view class="d-flex a-center">
					<image src="/static/image/demo/demo6.jpg" mode="" style="width: 120rpx; height: 120rpx; " class="rounded"></image>
					<view class="d-flex flex-column ml-2" style="margin-right: auto;">
						<text class="text-primary">昵称</text>
						<text class="text-light-muted font-sm">130533199704154417</text>
					</view>
					<view class="main-text-color">
						超好
					</view>
				</view>
				<view class="one-hidden text-addone font-md py-2 px-2">
					相当的好用，手感很好，打王者荣耀一点都不卡，建议搭建赶快入手，原价5000多，现在只需要2000多
				</view>
				<view class="row">
					<view class="span24-7 mr-2" v-for="item in 6" :key="item">
						<image src="../../static/image/demo/cate_01.png" mode="widthFix" style="height: 130rpx;" class="border"></image>
					</view>
				</view>
				<view class="d-flex j-end px-4">
					<view class="">2019-8-20</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				evalList: {
					currentIndex: null,
					list: [
						{
							name: "全部"
						},
						{
							name: "有图"
						},
						{
							name: "非常喜欢"
						},
						{
							name: "拍照好"
						},
						{
							name: "手感很棒"
						},
						{
							name: "效果好"
						},
						{
							name: "性能很棒"
						}
					]
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
