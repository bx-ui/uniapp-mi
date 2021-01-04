<template>
	<view>
		<u-swipe-action :show="item.show" :options="options" @click="click" v-for="(item, index) in addressList" :key="index" @open="open" :index="index">
			<list-item height="200rpx" @itemClick="jumpSettlePage(index)">
				<template v-slot:leftContent>
					<view class="d-flex flex-column py-2 j-sb">
						<view class="font-md d-flex">
							<text class="main-text-color d-block" style="margin-right: 4rpx;">{{ item.name }}</text>
							<text style="margin-right: 4rpx;" class="d-block">{{ item.ipone }}</text>
							<text class="main-text-color" v-if="item.isDefault">[默认]</text>
						</view>
						<view class="text-light-muted">{{ item.area }}</view>
						<view class="text-light-muted">{{ item.address }}</view>
					</view>
				</template>
			</list-item>
		</u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList: [
					{
						name: "邴鑫",
						ipone: "18812096731",
						area: "山东省 青岛市 李沧区",
						address: "青峰路街道",
						isDefault: true,
						show: false
					},
					{
						name: "周星星",
						ipone: "18238081963",
						area: "江苏省 无锡市 锡山区",
						address: "东亭街道",
						isDefault: false,
						show: false
					}
				],
				options: [
					{
						text: '收藏',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			}
		},
		methods: {
			click(index1, index) {
				console.log(111)
			},
			open(index) {
				console.log(index);
				this.addressList[index].show = true;
				this.addressList.map((val, idx) => {
					// console.log(idx)
					if(index != idx) this.addressList[idx].show = false;
				})
			},
			jumpSettlePage(index) {
				// console.log(111)
				uni.$emit("loadAddressInfo", this.addressList[index])
				uni.navigateTo({
					url: "/pages/settlement/settlement"
				})
			}
		},
		onNavigationBarButtonTap(obj) {
			if(obj.index === 0) {
				uni.navigateTo({
					url: "/pages/editAddress/editAddress"
				})
			}
		},
		
	}
</script>

<style>

</style>
