<template>
	<view>
		<swiperImage :resdata="swipers" height="700"/>
		<!-- 基础信息 -->
		<baseInfo />
		<!-- 滚动商品特性 w170 h110 -->
		<scroll-view scroll-x="true" class="scroll-row" style="margin-top: 20upx">
			<view class="scroll-row-item text-center" style="width: 170upx; height: 110upx;" v-for="(item, index) in charList" :key="index">
				<view class="icom iconfont line-h-sm" style="font-size: 44upx;">&#xe6b0;</view>
				<view class="line-h-sm font-md">{{ item.name }}</view>
				<view class="line-h-sm text-light-muted font-sm">{{ item.desc }}</view>
			</view>
		</scroll-view>
		<!-- 属性选择 -->
		<view class="px-2 b-box" style="margin-top: 20upx; padding-bottom: 20upx;">
			<view class="b-box" style="border: 4upx solid #f1f1ef; background-color: #f5f5f3; border-radius: 8upx;">
				<view class="d-flex j-sb a-center px-2" style="height: 102upx; border-bottom: 1upx solid #eeeeee;" @tap="show">
					<view class="font-md d-flex">
						<text>已选</text>
						<text class="ml-2 d-block">火焰红 64GB 标配</text>
					</view>
					<view class="icom iconfont" style="font-size: 40upx;">&#xe68c;</view>
				</view>
				<view class="d-flex j-sb a-center px-2" style="height: 102upx; border-bottom: 1upx solid #eeeeee;">
					<view class="font-md d-flex">
						<text>配送</text>
						<text class="ml-2 d-block mr-1">北京 东城区</text>
						<text class="main-text-color">有现货</text>
					</view>
					<view class="icom iconfont" style="font-size: 40upx;">&#xe68c;</view>
				</view>
				<view class="d-flex j-sb a-center px-2" style="height: 102upx" @tap="showExplain">
					<view class="font-md d-flex">
						<view class="d-flex a-center mr-2">
							<view class="icom iconfont text-dark mr-1">&#xe638;</view>
							<view>小米自营</view>
						</view>
						<view class="d-flex a-center mr-2">
							<view class="icom iconfont text-dark mr-1">&#xe638;</view>
							<view>小米发货</view>
						</view>
						<view class="d-flex a-center">
							<view class="icom iconfont text-dark mr-1">&#xe638;</view>
							<view>七天无理由</view>
						</view>
					</view>
					<view class="icom iconfont" style="font-size: 40upx;">&#xe68c;</view>
				</view>
			</view>
		</view>
		<!-- 滚动评论 -->
		<!-- w620upx h380upx 头像70*70 图片h115 -->
		<scrollEvaluate :resData="evaluateList" />
		<!-- 富文本 -->
		<view class="py-4">
			<u-parse className="uparse" :content="context" @preview="preview" @navigate="navigate" ></u-parse>
		</view>
		<!-- 热门推荐 -->
		<cart title="为你推荐">
			<shop-list :shopIndexList="shopIndexList"></shop-list>
		</cart>
		<!-- <u-button>月落</u-button>// -->
		<!-- 底部操作栏 -->
		<bottom-nav></bottom-nav>
		
		<!-- 弹出层 -->
		<attributePop v-model="showIt" />
		<!-- <common-popup :popupClass="popupClass" @hide="hide"></common-popup> -->
		<explainPop v-model="explain" />
	</view>
</template>

<script>
	import swiperImage from "@/component/index/swiper-image.vue"
	import scrollEvaluate from "@/component/detail/scroll-evaluate.vue"
	import uParse from "@/component/uni/uParse/src/wxParse.vue"
	import bottomNav from "@/component/detail/bottom-nav.vue"
	import baseInfo from "@/component/detail/baseInfo.vue"
	import commonPopup from "@/component/common/common-popup.vue"
	import attributePop from "@/component/detail/attribute-pop.vue"
	import explainPop from "@/component/detail/explain-pop.vue"
	var htmlString = `
		<p>
			<img src="https://i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp">
			<img src="https://i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp">
			<img src="https://i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp">
			<img src="https://i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp">
			<img src="https://i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp">
			<img src="https://i8.mifile.cn/v1/a1/97c79915-64b2-808c-53b4-4345652a179f.webp">
			<img src="https://i8.mifile.cn/v1/a1/cd0fbe1e-a1b3-a87a-f4a6-6fb08ec54931.webp">
		</p>
		    `
	
	export default {
		components: { swiperImage, scrollEvaluate, uParse, bottomNav, baseInfo, commonPopup, attributePop, explainPop },
		data() {
			return {
				popupClass: "none",
				showIt: false,
				explain: false,
				context:htmlString,
				swipers: [
					{
						src: "/static/image/demo/list/1.jpg"
					},
					{
						src: "/static/image/demo/list/2.jpg"
					},
					{
						src: "/static/image/demo/list/3.jpg"
					},
					{
						src: "/static/image/demo/list/4.jpg"
					},
					{
						src: "/static/image/demo/list/5.jpg"
					}
				],
				charList: [
					{
						icon: "&#xe6b0;",
						name: "CPU",
						desc: "蛟龙845八核"
					},
					{
						icon: "&#xe6b0;",
						name: "CPU",
						desc: "蛟龙845八核"
					},
					{
						icon: "&#xe6b0;",
						name: "CPU",
						desc: "蛟龙845八核"
					},
					{
						icon: "&#xe6b0;",
						name: "CPU",
						desc: "蛟龙845八核"
					},
					{
						icon: "&#xe6b0;",
						name: "CPU",
						desc: "蛟龙845八核"
					},
					{
						icon: "&#xe6b0;",
						name: "CPU",
						desc: "蛟龙845八核"
					},
					{
						icon: "&#xe6b0;",
						name: "CPU",
						desc: "蛟龙845八核"
					},
					{
						icon: "&#xe6b0;",
						name: "CPU",
						desc: "蛟龙845八核"
					}
				],
				evaluateList: [
					{
						headPortrait: "/static/image/demo/demo6.jpg",
						name: "楚锦",
						createTime: "2019-06-20",
						thumbsNum: "119",
						content: "支持商家，手机收到了，非常的好看，一点都不卡",
						evaluateImg: [
							{
								url: "/static/image/demo/cate_04.png",
							},
							{
								url: "/static/image/demo/cate_05.png",
							},
							{
								url: "/static/image/demo/cate_06.png",
							}
						]
					},
					{
						headPortrait: "/static/image/demo/demo6.jpg",
						name: "楚锦",
						createTime: "2019-06-20",
						thumbsNum: "119",
						content: "支持商家，手机收到了，非常的好看，一点都不卡",
						evaluateImg: [
							{
								url: "/static/image/demo/cate_04.png",
							},
							{
								url: "/static/image/demo/cate_05.png",
							},
							{
								url: "/static/image/demo/cate_06.png",
							}
						]
					},
					{
						headPortrait: "/static/image/demo/demo6.jpg",
						name: "楚锦",
						createTime: "2019-06-20",
						thumbsNum: "119",
						content: "支持商家，手机收到了，非常的好看，一点都不卡",
						evaluateImg: [
							{
								url: "/static/image/demo/cate_04.png",
							},
							{
								url: "/static/image/demo/cate_05.png",
							},
							{
								url: "/static/image/demo/cate_06.png",
							}
						]
					},
					{
						headPortrait: "/static/image/demo/demo6.jpg",
						name: "楚锦",
						createTime: "2019-06-20",
						thumbsNum: "119",
						content: "支持商家，手机收到了，非常的好看，一点都不卡",
						evaluateImg: [
							{
								url: "/static/image/demo/cate_04.png",
							},
							{
								url: "/static/image/demo/cate_05.png",
							},
							{
								url: "/static/image/demo/cate_06.png",
							}
						]
					}
				],
				shopIndexList: [
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					},
					{
						src: "/static/image/demo/list/1.jpg",
						name: "米家空调",
						subname: "1.5匹支流变频",
						fristPrice: "2199",
						endPrice: "2199"
					}
				],
				colorList: {
					currentIndex: 0,
					list: [
						{
							name: "火焰红"
						},
						{
							name: "炭黑"
						},
						{
							name: "冰川蓝"
						}
					]
				},
				capacityList: {
					currentIndex: 0,
					list: [
						{
							name: "64GB"
						},
						{
							name: "128GB"
						}
					]
				},
				mealList: {
					currentIndex: 0,
					list: [
						{
							name: "标准"
						},
						{
							name: "套餐一"
						},
						{
							name: "套餐二"
						}
					]
				}
			}
		},
		methods: {
				preview(src, e) {
					// do something
					console.log("src: " + src);
				},
				navigate(href, e) {
					// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
					console.log("href: " + href);
				},
				show() {
					this.showIt = true
				},
				showExplain() {
					this.explain = true
				},
				hide(){
					this.popupClass = 'hide'
					setTimeout(()=>{
						this.popupClass = 'none'
					}, 200);
				},
		}
	}
</script>

<style>
.uparse .p{ padding: 0!important; }
.uparse view,.uparse uni-view{ line-height: 0!important; }
</style>
