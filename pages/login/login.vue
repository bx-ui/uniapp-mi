<template>
	<view>
		<uni-status-bar></uni-status-bar>
		<view class="d-flex px-2 j-sb py-2 a-center">
			<view class="icon iconfont text-light-muted font-lg">&#xe61e;</view>
			<view class="text-light-muted">忘记密码</view>
		</view>
		<view class="mt-5 mb-5 px-5 py-3">
			<view class="font-big font-weight mb-4">密码登录</view>
			<input type="text" v-model="username" placeholder="请输入手机号/邮箱/小米账号" class="border-bottom uni-input mb-3" @blur="blur('name')" @focus="focus('name')" :class="inputFocusBorder.name ? 'active-border' : 'border-light-secondary'"/>
			<input type="text" v-model="password" placeholder="请输入密码" class="border-bottom uni-input"  @blur="blur('pass')" @focus="focus('pass')" :class="inputFocusBorder.pass ? 'active-border' : 'border-light-secondary'" />
			<view class="mt-5">
				<text class="icon iconfont font-cc text-light-muted">用手机短信登录&#xe68c;</text>
			</view>
		</view>
		<view class="px-5 mb-2">
			<view class="main-bg-color text-white line-h-big text-center" @tap="submit">登录</view>
		</view>
		<view class="px-5">
			<label>
				<checkbox :value="checkItem" color="#FD6801" style="transform:scale(0.7)" />
				<text class="font-sm text-light-muted">已阅读并同意小米协议,隐私政策和小米商城用户协议</text>
			</label>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "@/component/uni/uni-status-bar/uni-status-bar.vue"
	export default {
		components: { uniStatusBar },
		data() {
			return {
				checkItem: false,
				inputFocusBorder: {
					name: false,
					pass: false
				},
				username: "",
				password: ""
			}
		},
		methods: {
			// 失去焦点
			blur(text) {
				this.inputFocusBorder[text] = false
			},
			// 获得焦点
			focus(text) {
				this.inputFocusBorder[text] = true
			},
			submit() {
				if(this.username === "bingxin" && this.password === "123456") {
					uni.switchTab({
						url: "/pages/index/index"
					})
				}
			}
		}
	}
</script>

<style>
.active-border {
	border-color: #FD6801;
}
</style>
