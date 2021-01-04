<template>
	<view style="height: 100%; background: #eeeeee;">
		<view class="" style="height: 20rpx;"></view>
		<list-item height="160rpx" title="头像" :rightIcon="false" @itemClick="avatarChange">
			<template v-slot:rightContent>
				<image src="/static/image/demo/demo6.jpg" mode="" style="width: 120rpx; height: 120rpx;" class="rounded-circle"></image>
			</template>
		</list-item>
		<list-item height="90rpx" title="姓名">
			<template v-slot:rightContent>
				<text>楚子航</text>
			</template>
		</list-item>
		<list-item height="90rpx" title="性别" @itemClick="changeSex">
			<template v-slot:rightContent>
				<text>{{ sexContent }}</text>
			</template>
		</list-item>
		<list-item height="90rpx" title="生日">
			<template v-slot:rightContent>
				<text>1997-04-15</text>
			</template>
		</list-item>
		<view class="" style="height: 30rpx;"></view>
		<list-item height="90rpx" title="修改密保"></list-item>
		<list-item height="90rpx" title="修改手机"></list-item>
		<!-- 选择器 -->
		<u-picker mode="selector" v-model="sex"  :default-selector="[0]" :range="selector" range-key="sexName" @confirm="confirmSex"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexContent: '男',
				sex: false,
				selector: [
					{
						sexName: '男',
						id: 1
					},
					{
						sexName: '女',
						id: 2
					}
				],
			}
		},
		methods: {
			avatarChange() {
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album', 'camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			},
			changeSex() {
				this.sex = true;
			},
			confirmSex(arr) {
				var index = arr[0];
				this.sexContent = this.selector[index].sexName;
			}
		}
	}
</script>

<style>

</style>
