<template>
	<view style="height: 100%; background: #eeeeee; overflow: hidden;">
		<view class="d-block flex-column px-2 bg-white mt-2">
			<text class="line-h-big font-md">发票类型</text>
			<view class="py-1 line-h-0 main-text-color mt-2 text-center mb-2" style="width: 190rpx;; background: #fce0d5; border: 1px solid #FD6801;">电子发票</view>
			<text class="line-h-lg text-light-muted d-flex mb-2">电子发票与纸质发票具有相同的法律效力，可作为报销，售后，维权凭证，推荐使用电子发票，不怕丢失，更方便，环保</text>
		</view>
		<view class="d-block flex-column bg-white mt-2">
			<text class="line-h-big font-md px-2">发票类型</text>
			<radioGroupList :currList="typeList" v-model="typeIndex" itemWidth="240rpx"/>
		</view>
		<view class="bg-white mt-2">
			<view class="p-2 border-bottom border-light-secondary d-flex a-center bg-white">
				<view>个人姓名</view>
				<input class="ml-1 font-md flex-1 text-muted" type="text"/>
			</view>
			<view class="p-2 border-bottom border-light-secondary d-flex a-center bg-white">
				<view>发票内容</view>
				<input class="ml-1 font-md flex-1 text-muted" type="text"/>
			</view>
		</view>
		<view class="d-flex flex-column text-light-muted mt-2 px-2">
			<text>发票须知:</text>
			<text>1.发票为实际支付金额，不包括优惠卷等</text>
			<text>2.电子发票可再订单完成后，在订单详情中查看</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList: [
					{
						name: "个人"
					},
					{
						name: "单位"
					}
				],
				typeIndex: 0
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
