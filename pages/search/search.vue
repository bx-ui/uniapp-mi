<template>
	<view>
		<cart title="每日精选" url="/static/image/demo/demo4.jpg" />
		<view class="my-2 px-2">
			<color-tag v-for="(item, index) in tagList" :key="index" :text="item.text"/>
		</view>
		<cart title="常用分类">
			<view class="px-2">
				<color-tag v-for="(item, index) in comCategory" :key="index" :text="item.text" bgcolor="#f5f5f5" color="#a9a9a9"/>
			</view>
		</cart>
		<divider />
		<cart title="搜索记录" :hasBorder="true">
			<view class="line-h-big border-bottom px-2">
				京东
			</view>
			<view class="line-h-big border-bottom px-2">
				京东商城
			</view>
			<view class="line-h-big border-bottom px-2">
				彩电
			</view>
			<view class="line-h-big border-bottom px-2">
				京东
			</view>
			<view class="line-h-big border-bottom px-2">
				京东商城
			</view>
			<view class="line-h-big border-bottom px-2">
				彩电
			</view>
		</cart>
	</view>
</template>

<script>
	import colorTag from "../../component/search/color-tag.vue"
	import uniListItem from "../../component/uni/uni-list-item.vue"
	export default {
		data() {
			return {
				tagList: [
					{
						text: "领券中心"
					},
					{
						text: "Redmi K20"
					},
					{
						text: "RedmiBook 14"
					},
					{
						text: "智能积木 越野四驱车"
					},
					{
						text: "手环 腕带"
					}
				],
				comCategory: [
					{
						text: "耳机"
					},
					{
						text: "手机"
					},
					{
						text: "音响"
					},
					{
						text: "手表"
					},
					{
						text: "配件"
					},
					{
						text: "玩具"
					},
					{
						text: "网关/传感器"
					},
					{
						text: "健康"
					},
					{
						text: "库玩"
					},
				]
			}
		},
		components: { colorTag, uniListItem },
		methods: {
			
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if(e.index === 0) {
				uni.navigateTo({
					url: "/pages/search-list/search-list"
				})
			}
		}
	}
</script>

<style>

</style>
