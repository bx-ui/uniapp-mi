<template>
	<view>
		<swiper indicator-dots :interval="3000" :duration="1000" circular :style="comHeight">
			<block v-for="(item,index) in resdata" :key="index">
				<swiper-item @tap="priviewSwiper(index)">
					<view class="swiper-item">
						<image :src="item.src" 
						lazy-load
						:style="comHeight"></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			resdata:Array,
			height: {
				type: String,
				default: "350"
			}
		},
		computed: {
			comHeight() {
				return `height: ${this.height}upx`
			},
			urlList() {
				return this.resdata.map(v => v.src)
			}
		},
		methods:{
			priviewSwiper(index) {
				console.log(this.urlList);
				uni.previewImage({
					urls: this.urlList,
					indicator: "default",
					current: index
				})
			}
		}
	}
</script>

<style>
</style>
