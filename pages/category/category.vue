<template>
	<view class="content d-flex border-top animated fadeIn faster">
		<loading-plus v-if="loadingShow"></loading-plus>
		<scroll-view style="height: 100%; flex: 1" scroll-y class="border-right" id="leftScroll" :scroll-top="leftScrollTop">
			<view class=" border-bottom border-light-secondary left-scroll-item" v-for="(item, index) in cate" :key="index" @tap="changeCategory(index)">
				<view class="line-h-big text-center" :class="activeIndex == index ? 'active' : 'text-addone'">
					{{ item.name }}
				</view>
			</view>
		</scroll-view>
		<scroll-view style="heights: 100%; flex: 3.5" scroll-y :scroll-top="rightScrollTop" :scroll-with-animation="true" @scroll="rightDomScroll">
			<view class="p-2 row right-scroll-item" v-for="(item, index) in list" :key="index" >
				<view class="d-flex flex-column a-center span24-8 " v-for="(item1, index1) in item.list" :key="index1">
					<image :src="item1.src" mode="" style="width: 140upx; height: 140upx;"></image>
					<text class="d-block">{{ item1.name }}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import loading from "@/mixin/loading.js"
	export default {
		mixins: [loading],
		data() {
			return {
				activeIndex: 0,
				cate: [],
				list: [],
				leftDomTops: [],
				rightDomTops: [],
				rightScrollTop: null,
				leftScrollTop: null,
				cateItemHeight: 0,
			}
		},
		watch: {
			activeIndex(newIndex, oldIndex) {
				console.log(newIndex);
				// 两种情况需要进行滚动
				// 在下面  在上面
				// 获取scroll-view高度 获取scrollTop信息
				const query = uni.createSelectorQuery().in(this);
				query.select('#leftScroll').fields({
					size: true,
					scrollOffset: true
				},data => {
				  let H = data.height;  // scroll-view的高度
				  let ST = data.scrollTop;
				  // this.leftDomTops[newIndex] + this.cateItemHeight  // 当前top值加上每一个item的高度
				  if((this.leftDomTops[newIndex] + this.cateItemHeight) > (H + ST)) {
					  // 处于下面
					  this.leftScrollTop = this.leftDomTops[newIndex] + this.cateItemHeight - H;
				  }
				  if(ST > this.cateItemHeight) {
					  this.leftScrollTop = this.leftDomTops[newIndex]
				  }
				}).exec();
			}
		},
		methods: {
			changeCategory(index) {
				if(this.activeIndex === index) {
					return;
				}
				this.activeIndex = index;
				// 右侧滚动到固定区块
				this.rightScrollTop = this.rightDomTops[index];
			},
			getData() {
				for(var i = 0; i < 20; i ++) {
					this.cate.push({ name: `分类${i}` });
					
					this.list.push({
						list: []
					})
				}
				for(var i = 0; i < this.list.length; i ++) {
					for(var j = 0; j < 20; j ++) {
						this.list[i].list.push({
							src: "/static/image/demo/cate_03.png",
							name: `分类${i}-商品${j}`
						})
					}
				}
			},
			rightDomScroll(e) {
				this.rightDomTops.forEach((item, index) => {
					if(item < e.detail.scrollTop + 3) {
						this.activeIndex = index;
						return false;
					}
				})
			}
		},
		onLoad() {
			this.getData()
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.selectAll('.left-scroll-item').fields({
				size: true,
				rect: true
			},data => {
			  this.leftDomTops = data.map(v => {
				  this.cateItemHeight = v.height;
				  return v.top
			  })
			}).exec();
			query.selectAll('.right-scroll-item').boundingClientRect(data => {
			  this.rightDomTops = data.map(v => v.top)
			  console.log(this.rightDomTops)
			}).exec();
		}
	}
</script>

<style>
.active {
	border-left: 6rpx solid #FD6801; 
	color: #FD6801;
	background: #fce0d5;
}
</style>
