<template>
	<view style="height: 100%; background: #eeeeee">
		<view class="p-2 border-bottom border-light-secondary d-flex a-center bg-white">
			<view>收货人</view>
			<input class="ml-1 font-md flex-1 text-muted" type="text"/>
		</view>
		<view class="p-2 border-bottom border-light-secondary d-flex a-center bg-white">
			<view>手机号码</view>
			<input class="ml-1 font-md flex-1 text-muted" type="numbers"/>
		</view>
		<view style="height: 20rpx;"></view>
		<view class="p-2 border-bottom border-light-secondary d-flex a-center bg-white">
			<view>所在地区</view>
			<input class="ml-1 font-md flex-1 text-muted" @tap="changeAddress" type="text" :disabled="true"/>
		</view>
		<view class="p-2 border-bottom border-light-secondary d-flex a-center bg-white">
			<view>详细地址</view>
			<input class="ml-1 font-md flex-1 text-muted" type="text"/>
		</view>
		<view style="height: 20rpx;"></view>
		<view class="px-2 py-3 border-bottom border-light-secondary d-flex j-sb a-center bg-white">
			<view>设为默认地址</view>
			<switch checked color="#FD6801" />
		</view>
		<view style="height: 30rpx;"></view>
		<view class="px-2">
			<view class="main-bg-color text-white py-2 text-center" hover-class="main-bg-hover-color">保存</view>
		</view>
		<u-picker mode="region" v-model="addressShow" :area-code='["37", "3702", "370213"]' @confirm="confirmAddress"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressShow: false
			}
		},
		methods: {
			confirmAddress(arr) {
				console.log(arr)
			},
			changeAddress() {
				this.addressShow = true;
			}
		}
	}
</script>

<style>

</style>
