<template>
	<view style="height: 100%; background: #eeeeee;">
		<cart title="账号管理" :boldTitle="false" titleSize="font-cc">
			<list-item height="90rpx" title="个人资料" @itemClick="loadUserInfoPage"></list-item>
			<list-item height="90rpx" title="收货地址" @itemClick="loadAddressPage"></list-item>
		</cart>
		<cart title="关于" :boldTitle="false" titleSize="font-cc">
			<list-item height="90rpx" title="关于商城"></list-item>
			<list-item height="90rpx" title="意见反馈"></list-item>
			<list-item height="90rpx" title="协议规则"></list-item>
			<list-item height="90rpx" title="资质证件"></list-item>
			<list-item height="90rpx" title="用户协议"></list-item>
			<list-item height="90rpx" title="隐私政策"></list-item>
		</cart>
		<view class="w-100 px-3 mt-2">
			<view class="bg-white line-h-big text-center">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			loadUserInfoPage() {
				uni.navigateTo({
					url: "/pages/userInfo/userInfo"
				})
			},
			loadAddressPage() {
				uni.navigateTo({
					url: "/pages/address/address"
				})
			}
		}
	}
</script>

<style>

</style>
