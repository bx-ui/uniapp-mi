<template>
	<view style="height: 100%; overflow: hidden;">
		<view class="d-flex a-center px-2 border-top border-bottom" style="height: 90rpx">
			<view class="flex-1 d-flex j-center font-weight" v-for="(item, index) in screen.list" :key="index" @click="changeStatus(index)">
				<text :class="screen.currentIndex == index ? 'main-text-color' : 'text-light-muted'">{{ item.name }}</text>
				<view class="d-flex flex-column j-center">
					<view class="icom iconfont" style="line-height: 8px;" 
					:class="item.status == 1 ? 'main-text-color' : 'text-light-muted'">
					&#xe734;</view>
					<view class="icom iconfont" style="line-height: 8px;" 
					:class="item.status == 2 ? 'main-text-color' : 'text-light-muted'">
					&#xe733;</view>
				</view>
			</view>
			<view class="flex-1 d-flex j-center main-text-color font-weight" @tap="showRightDrawer">
				筛选
			</view>
		</view>
		<scroll-view scroll-y="true" style="height: calc(100% - 90rpx);">
			<view class="w-100 py-3 px-2 d-flex border-bottom" style="height: 320rpx; box-sizing: border-box;" v-for="item in 6" :key="item">
				<image src="../../static/image/demo/demo10.jpg" mode="" style="width: 300rpx;"></image>
				<view style="width: calc(100% - 300rpx);" class="px-2 b-box d-flex flex-column">
					<text class="font-md font-weight line-h-lg">真无线蓝牙耳机</text>
					<text class="font-sm" style="line-height: 34rpx;">雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作</text>
					<view class="mt-2 mb-2">
						<price money="800" />
					</view>
					<text class="text-light-muted">1348条评价 98%满意</text>
				</view>
			</view>
		</scroll-view>
		<uni-drawer ref="showRight" mode="right" :mask-click="true" :width="350">
			<view class="d-flex position-fixed left-0 bottom-0 w-100">
				<view class="flex-1 d-flex j-center a-center bg-light-secondary text-addone font-md" style="height: 90rpx;" hover-class="main-bg-hover-color" @tap="reset">重置</view>
				<view class="flex-1 d-flex j-center a-center main-bg-color text-white" style="height: 90rpx;" hover-class="main-bg-hover-color" @tap="submit">确定</view>
			</view>
			<cart title="服务" :boldTitle="false">
				<radioGroupList :currList="serverList.list" v-model="serverList.currentIndex" />
			</cart>
			<cart title="分类" :boldTitle="false">
				<radioGroupList :currList="categoryList.list" v-model="categoryList.currentIndex" />
			</cart>
		</uni-drawer>
	</view>
</template>

<script>
	import uniDrawer from "@/component/uni/uni-drawer.vue"
	import price from "@/component/common/price.vue"
	export default {
		components: { uniDrawer, price },
		data() {
			return {
				screen: {
					currentIndex: 0,
					list: [
						{
							name: "综合",
							status: 1,  // 0 没有选中 1 上箭头  2 下箭头
						},
						{
							name: "销量",
							status: 0,  // 0 没有选中 1 上箭头  2 下箭头
						},
						{
							name: "价格",
							status: 0,  // 0 没有选中 1 上箭头  2 下箭头
						},
					],
				},
				serverList: {
					currentIndex: null,
					list: [
						{
							name: "促销"
						},
						{
							name: "分期"
						},
						{
							name: "仅看有货"
						},
					]
				},
				categoryList: {
					currentIndex: null,
					list: [
						{
							name: "耳机"
						},
						{
							name: "户外"
						},
						{
							name: "配件"
						},
					]
				},
				scrollHeight: ""
			}
		},
		methods: {
			changeStatus(index) {
				let oldIndex = this.screen.currentIndex;
				let oldItem = this.screen.list[oldIndex];
				if(oldIndex == index) {
					return oldItem.status = oldItem.status == 1 ? 2 : 1;
				}
				let newItem = this.screen.list[index];
				this.screen.currentIndex = index;
				oldItem.status = 0;
				newItem.status = 1;
			},
			showRightDrawer() {
				this.$refs["showRight"].open()
			},
			changeIndex(currentName, index) {
				if(this[currentName].currentIndex !== index)
				this[currentName].currentIndex = index;
			},
			reset() {
				this.serverList.currentIndex = this.categoryList.currentIndex = null;
			},
			submit() {
				this.$refs["showRight"].close()
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.scrollHeight = res.windowHeight - uni.upx2px(196)
				}
			})
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
