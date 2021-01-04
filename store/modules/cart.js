export default {
	state:{
		list:[
			{
				checked:false,
				id:11,
				title:"商品标题111",
				cover:"/static/image/demo/list/1.jpg",
				// 选中商品属性
				attrs:[
					{
						title:"颜色",
						selected:0,
						list: [
							{ name:'火焰红', },
							{ name:'炭黑', },
							{ name:'冰川兰', }
						]
					},
					{
						title:"容量",
						selected:1,
						list: [
							{ name:'64GB', },
							{ name:'128GB', },
						]
					},
					{
						title:"套餐",
						selected:2,
						list: [
							{ name:'标配', },
							{ name:'套餐一', },
							{ name:'套餐二', }
						]
					},
				],
				pprice:336,
				num:1,
				minnum:1,
				maxnum:10, // 该商品最大商品数，跟库存有关
			},
			{
				checked:false,
				id:12,
				title:"商品标题111",
				cover:"/static/image/demo/list/1.jpg",
				// 选中商品属性
				attrs:[
					{
						title:"颜色",
						selected:0,
						list: [
							{ name:'火焰红', },
							{ name:'炭黑', },
							{ name:'冰川兰', }
						]
					},
					{
						title:"容量",
						selected:0,
						list: [
							{ name:'64GB', },
							{ name:'128GB', },
						]
					},
					{
						title:"套餐",
						selected:0,
						list: [
							{ name:'标配', },
							{ name:'套餐一', },
							{ name:'套餐二', }
						]
					},
				],
				pprice:336,
				num:1,
				minnum:1,
				maxnum:10, // 该商品最大商品数，跟库存有关
			},
			{
				checked:false,
				id:13,
				title:"商品标题111",
				cover:"/static/image/demo/list/1.jpg",
				// 选中商品属性
				attrs:[
					{
						title:"颜色",
						selected:0,
						list: [
							{ name:'火焰红', },
							{ name:'炭黑', },
							{ name:'冰川兰', }
						]
					},
					{
						title:"容量",
						selected:0,
						list: [
							{ name:'64GB', },
							{ name:'128GB', },
						]
					},
					{
						title:"套餐",
						selected:0,
						list: [
							{ name:'标配', },
							{ name:'套餐一', },
							{ name:'套餐二', }
						]
					},
				],
				pprice:336,
				num:1,
				minnum:1,
				maxnum:10, // 该商品最大商品数，跟库存有关
			},
		],
		// 选中列表（存放选中的id）
		selectedList:[]
	},
	getters:{
		checkedAll:(state) => {
			return state.list.length === state.selectedList.length;
		},
		totalPrice:(state) => {
			var price = 0;
			state.list.forEach(item => {
				if(state.selectedList.indexOf(item.id) > -1) {
					price += item.num * item.pprice;
				}
			})
			return price;
		},
		disabledSelectAll: (state) => {
			return state.list.length === 0 ? true : false;
		}
	},
	mutations:{
		// 全选
		selectedAll(state) {
			state.selectedList = state.list.map(v => {
				v.checked = true;
				return v.id
			})
		},
		// 取消全选
		selectedNotAll(state) {
			state.list.forEach(v => {
				v.checked = false;
			})
			state.selectedList = [];
		},
		// 选择单个
		selectItem(state, index) {
			let id = state.list[index].id;
			let i = state.selectedList.indexOf(id);
			// 已经选中了， 取消选中
			if(i > -1) {
				state.list[index].checked = false;
				return state.selectedList.splice(i, 1);
			}
			state.list[index].checked = true;
			state.selectedList.push(id)
		},
		changeAttrs(state, { colorIndex, capacityIndex, mealIndex, index } ) {
			console.log(index, "善变")
			state.list[index].attrs[0].selected = colorIndex;
			state.list[index].attrs[1].selected = capacityIndex;
			state.list[index].attrs[2].selected = mealIndex
		}
	},
	actions:{
		doSelectAll({ commit, getters, state }) {
			getters.checkedAll ? commit('selectedNotAll') : commit('selectedAll')
		}
	}
}