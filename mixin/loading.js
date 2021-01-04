export default {
	data() {
		return {
			loadingShow: true,
		}
	},
	onReady() {
		this.$nextTick(() => {
			setTimeout(()=> {
				this.loadingShow = false;
			}, 500) 
		})
	}
}