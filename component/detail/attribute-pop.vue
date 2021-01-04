<template>
	<u-popup v-model="value" mode="bottom" border-radius="20" height="80%" @close="close" class="position-relative" @open="open">
		<view class="p-2">
			<view class="d-flex a-center">
					<image src="/static/image/demo/cate_03.png" mode="widthFix" style="width: 180rpx; height: 180rpx;" class="border rounded"></image>
					<view class="ml-2">
						<price money="2366" />
						<text space="ensp" class="line-h-lg">{{ colorList.selectedName }} {{ capacityList.selectedName }} {{ mealList.selectedName }}</text>
					</view>
			</view>
			<cart title="颜色" :boldTitle="false">
				<radioGroupList :currList="colorList.list" v-model="colorList.currentIndex" margin="mr-5" @change="(index) => changeItem(index, 'colorList')"/>
			</cart>
			<cart title="容量" :boldTitle="false">
				<radioGroupList :currList="capacityList.list" v-model="capacityList.currentIndex" margin="mr-5" @change="(index) => changeItem(index, 'capacityList')" />
			</cart>
			<cart title="套餐" :boldTitle="false">
				<radioGroupList :currList="mealList.list" v-model="mealList.currentIndex" margin="mr-5" @change="(index) => changeItem(index, 'mealList')" />
			</cart>
			<view class="mt-2 mb-4 border-top border-light-secondary"></view>
			<view class="d-flex j-sb a-center">
				<text class="text-addone">购买数量</text>
				<view class="">
					<u-number-box v-model="buyNum" bg-color="#f8f8f8" input-height="60" input-width	="60"></u-number-box>
				</view>
			</view>
			<view class="position-absolute bottom-0 left-0 right-0 w-100 main-bg-color text-white font-md text-center" style="height: 100rpx; line-height: 100rpx;" @tap="submit">加入购物车</view>
		</view>
	</u-popup>
</template>

<script>
	export default {
		props: {
			value: {
				type: Boolean,
				default: false
			},
			colorIndex: {
				type: Number,
				default: 0
			},
			capacityIndex: {
				type: Number,
				default: 0
			},
			mealIndex: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				colorList: {
					currentIndex: 0,
					selectedName: "火焰红",
					list: [
						{
							name: "火焰红"
						},
						{
							name: "炭黑"
						},
						{
							name: "冰川蓝"
						}
					]
				},
				capacityList: {
					currentIndex: 0,
					selectedName: "64GB",
					list: [
						{
							name: "64GB"
						},
						{
							name: "128GB"
						}
					]
				},
				mealList: {
					currentIndex: 0,
					selectedName: "标准",
					list: [
						{
							name: "标准"
						},
						{
							name: "套餐一"
						},
						{
							name: "套餐二"
						}
					]
				},
				buyNum: 10
			}
		},
		methods: {
			changeItem(index, type) {
				// console.log(type)
				if(this[type].selectedName !== this[type].list[index].name)
				this[type].selectedName = this[type].list[index].name
			},
			close() {
				this.$emit("input", false)
			},
			open() {
				console.log(this.mealIndex)
				this.colorList.currentIndex = this.colorIndex;
				this.capacityList.currentIndex = this.capacityIndex;
				this.mealList.currentIndex = this.mealIndex;
			},
			submit() {
				this.$emit('loadVuexData', {
					colorIndex: this.colorList.currentIndex,
					capacityIndex: this.capacityList.currentIndex,
					mealIndex: this.mealList.currentIndex
				})
				this.close();
			}
		}
	}
</script>

<style lang="scss">
</style>
