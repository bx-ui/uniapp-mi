<template>
	<view style="background: #F5F5F5; height: 100%; animated fadeIn faster">
		<loading-plus v-if="loadingShow"></loading-plus>
		<uni-nav-bar color="#000000" background-color="#ffffff" :status-bar="true" title="购物车" :fixed="true" :right-text="isEdit ? '完成':'管理'" @clickRight="isEdit = !isEdit"/>
		<block v-if="list.length">
			<view class="py-3 pl-2 pr-2 d-flex border-bottom border-light-secondary bg-white" v-for="(item, index) in list" :key="index">
				<view class="flex-1 d-flex a-center">
					 <label class="radio" @tap="selectItem(index)"><radio value="1" color="#FD6801" :checked="item.checked" /></label>
				</view>
				<view class="d-flex" style="flex: 8">
					<view class="border border-light-secondary p-2" style="width: 260rpx; height: 200rpx;">
						<image :src="item.cover" style="height: 160rpx;"></image>
					</view>
					<view class="ml-2" style="width: 100%;">
						<view class="font-md text-addone">{{ item.title }}</view>
						<view class="font-sm line-h-big d-flex a-center" 
						style="color: rgba(0,0,0,0.6); margin-top: 10rpx;" 
						:class="isEdit ? 'bg-light-secondary px-2' : 'px-0'"
						@tap="openDescPop(item, index)">
						{{ item.attrs[0].list[item.attrs[0].selected].name }} {{ item.attrs[1].list[item.attrs[1].selected].name }} {{ item.attrs[2].list[item.attrs[2].selected].name }}
						<view class="icon iconfont ml-auto" v-if="isEdit">&#xe733;</view>
						</view>
						<view style="height: 80upx; width: 100%;" class="d-flex a-stretch j-sb mt-2">
							<price :money="item.pprice" />
							<u-number-box v-model="item.num" input-height="60" input-width="60" :disabled-input="true" :index="index"></u-number-box>
						</view>
					</view>
				</view>
			</view>
		</block>
		<!-- 为空时 -->
		<view class="py-5 d-flex j-center a-center bg-white" v-else>
			<text>没有更多了</text>
			<view class="px-3 py-1 bg-light-secondary ml-2">去逛逛</view>
		</view>
		<!-- 底部操作栏 -->
		<view class="" style="height: 110rpx;"></view>
		<!-- 正常状态 -->
		<view class="d-flex w-100 bg-white position-fixed bottom-0 left-0 right-0" style="height: 110rpx;" v-if="!isEdit">
			<view class="flex-1 d-flex a-center j-center">
				<label class="radio" @tap="doSelectAll"><radio color="#FD6801" :checked="checkedAll" :disabled="disabledSelectAll" /></label>
			</view>
			<view class="d-flex a-center j-center" style="flex: 2.5">
				<view class="mr-2">合计</view>
				<price :money="totalPrice" />
			</view>
			<view class="main-bg-color text-white text-center font-md" style="flex: 2.5; line-height: 110rpx;" @tap="jumpSettlementPage">
				结 算
			</view>
		</view>
		<!-- 编辑状态 -->
		<view class="d-flex w-100 bg-white position-fixed bottom-0 left-0 right-0" style="height: 110rpx;" v-else>	
			<view class="flex-1 d-flex a-center j-center">
				<label class="radio" @tap="doSelectAll"><radio color="#FD6801" :checked="checkedAll" :disabled="disabledSelectAll" /></label>
			</view>
			<view class="d-flex a-center j-center main-bg-color text-white" style="flex: 2.5">
				移入收藏
			</view>
			<view class="bg-danger text-white text-center font-md" style="flex: 2.5; line-height: 110rpx;" @tap="delItem">
				删 除
			</view>
		</view>
		
		<attribute-pop v-model="attriPop" :colorIndex="colorIndex" :capacityIndex="capacityIndex" :mealIndex="mealIndex" @loadVuexData="loadVuexData" />
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import uniNavBar from "@/component/uni/uni-nav-bar/uni-nav-bar.vue"
	import attributePop from "../../component/detail/attribute-pop.vue"
	import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
	import loading from "@/mixin/loading.js"
	export default {
		components: { uniNavBar, attributePop },
		mixins: [loading],
		data() {
			return {
				isEdit: false,  // true 编辑状态   false 普通状态
				qqq: 1,
				checked: false,
				attriPop: false,
				colorIndex: 0,
				capacityIndex: 0,
				mealIndex: 0,
				index: 0
			}
		},
		computed: {
			...mapState({
				list: state => state.cart.list,
				selectedList: state => state.cart.selectedList
			}),
			...mapGetters([
				'checkedAll',
				'totalPrice',
				'disabledSelectAll'
			]),
		},
		methods: {
			...mapActions(['doSelectAll']),
			...mapMutations(['selectItem', 'changeAttrs']),
			openDescPop(item, index) {
				if(this.isEdit) {
					this.colorIndex = item.attrs[0].selected;
					this.capacityIndex = item.attrs[1].selected;
					this.mealIndex = item.attrs[2].selected;
					this.index = index
					this.attriPop = true;
				}
				
			},
			loadVuexData({ colorIndex, capacityIndex, mealIndex }) {
				this.changeAttrs({ colorIndex, capacityIndex, mealIndex, index: this.index });
			},
			delItem() {
				if(!this.selectedList.length){
					return this.$refs.uToast.show({
						title: '请选择商品',
						type: 'warning',
					})
				}
				
			},
			jumpSettlementPage() {
				if(!this.selectedList.length) {
					return this.$refs.uToast.show({
						title: '请选择商品',
						type: 'warning',
					})
				}
				uni.navigateTo({
					url: "/pages/settlement/settlement"
				})
			}
		}	
	}
</script>

<style>

</style>
