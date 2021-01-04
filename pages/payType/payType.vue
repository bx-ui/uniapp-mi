<template>
	<view class="h-100">
		<view class="d-flex flex-column a-center j-center" style="height: 400rpx;">
			<text class="text-light-secondary">支付金额</text>
			<text class="main-text-color font-md line-h-big">￥38.00</text>
		</view>
		<view style="padding: 0rpx 70rpx;">
			<view class="d-flex a-center" @tap="payChange('aliPay', 'wchatPay')">
				<view class="icon iconfont text-primary mr-2" style="font-size: 70rpx;">&#xe607;</view>
				<view class="d-flex flex-column j-center">
					<text>支付宝支付</text>
					<text class="line-h-md font-sm text-light-muted">推荐使用支付宝支付</text>
				</view>
				<view class="ml-auto">
					<label class="radio">
						<radio value="支付宝" :checked="aliPay" color="#FD6801" /><text></text>
					</label>
				</view>
			</view>
			<view class="d-flex a-center mt-3" @tap="payChange('wchatPay', 'aliPay')">
				<view class="icon iconfont text-primary mr-2" style="font-size: 70rpx;">&#xe689;</view>
				<view class="d-flex flex-column j-center">
					<text>微信支付</text>
				</view>
				<view class="ml-auto">
					<label class="radio">
						<radio value="微信" :checked="wchatPay" color="#FD6801" /><text></text>
					</label>
				</view>
			</view>
			<view class="line-h-big main-bg-color text-white text-center mt-5" @tap="payMethod">确认支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aliPay: true,
				wchatPay: false
			}
		},
		methods: {
			payChange(type, otherType) {
				if(this[type]) return;
				this[type] = true;
				this[otherType] = false;
			},
			payMethod() {
				
			}
		}
	}
</script>

<style>

</style>
