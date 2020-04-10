<template>
	
	 
		<div class="flex-item"> 
			<div class="box1">
				<div class="logo">
					<div class="logo_1">
						<div class="box10">
							<img src="../assets/logo.png" alt="">
						</div>
						<div class="box11">
							<div class="box11_1">Dashboard</div>
							<div class="box11_2">Services</div>
							<div class="box11_3">History</div>
							<div class="box11_4">Actions</div>
						</div>
						<div class="box12">
							<input type="text" class="box12_1">
							<div class="box12_2">
								<img src="../assets/logo.png" alt="">
							</div>
						</div>
					</div>
					<div class="logo_2">
						<div class="box13">
							<div>Cards</div>
							<div>View all cards</div>
						</div>
						<div class="box14">
							<div  v-for="(item,index) in items" :key="item" :class="[index==1?'red':'box14_1']">
								<div class="box14_1_1">{{item.name}}</div>
								<div class="box14_1_2">${{item.money}}</div>
								<div class="box14_1_3">
									{{item.name_1}}
								</div>
								<div class="box14_1_4">{{item.money_1}}</div>
								
							</div>
			
						</div>
					</div>
					<div class="logo_3">
						<div class="box15">
							<div class="box15_1">
								Main Services 
								View all
							</div>
							<div class="box15_2">
								
							</div>
						</div>
						<div class="box16">
							<div id="main" style="width:100%;height: 100%;"></div>
						</div>
					</div>
				
					
				</div>
			</div>
			
			<div class="box2"></div>
			
		</div>
		
	
		
	
</template>

<script>
	import echarts from 'echarts'
	export default{
		 name: '',
		 data(){
			return{
				charts: '',
				/*  opinion: ["1", "3", "3", "4", "5"],*/
				    opinionData: ["0.5", "1.5", "1", "2", "2.5"],
				
				//左侧菜单数据
				items:[
					{
						name:'Available balance',
						money:'2,200',
						name_1:'**** **** **34',
						money_1:'Monzo',
						// info:
					},
					{
						name:'Available balance',
						money:'2,200',
						name_1:'**** **** **34',
						money_1:'Monzo',
						// info:
					},
					{
						name:'Available balance',
						money:'2,200',
						name_1:'**** **** **34',
						money_1:'Monzo',
						// info:
					}

				]
				
		}
		},
	
	 methods: {
	     drawLine(id) {
	         this.charts = echarts.init(document.getElementById(id))
	         this.charts.setOption({
	             tooltip: {
	                 trigger: 'axis'
	             },
	             legend: {
	                 data: ['']
	             },
	             grid: {
	                 left: '3%',
	                 right: '4%',
	                 bottom: '3%',
	                 containLabel: true
	             },
	 
	             toolbox: {
	                 feature: {
	                     saveAsImage: {}
	                 }
	             },
	             xAxis: {
	                 type: 'category',
	                 boundaryGap: false,
	             data: ["","$10","$20","$30","$40","$50"]
	             
	             },
	             yAxis: {
	                 type: 'value'
	             },
	 
	             series: [{
	 				smooth:true,
	                 name: '近七日收益',
	                 type: 'line',
	                 stack: '总量',
	                 data: this.opinionData
	             }]
	         })
	     }
	 },
	 //调用
	 mounted() {
	     this.$nextTick(function() {
	         this.drawLine('main')
	     })
	 }
	}
	
	

</script>

<style scoped>
	
	.red{
		width:200px;
		height: 120px;
		
		border-radius: 16px;
		background-color: royalblue;
	}
	/* .flex-container {
		display:flex;
		width:100%;
		height:100%;
		
	} */
	 .flex-item {
		
		
		background:#fff;
		
		border: 10px solid #FBACAF;
		border-radius: 50px;
		display: flex;
		flex-direction:row;
	} 
	
	.box1{
		width: 100%;
		height: 100%;	
		border-top-left-radius:41px;
		border-bottom-left-radius:41px;
		margin-right: 43px;
		
	}
	.box2{
		width: 300px;
		
		background-color: green;
		border-radius: 41px;
	}
	.logo{
		width: 92%;
		
		
		margin-left: 50px;
		margin-top: 50px;
		display: flex;
		flex-direction:column;
	}
	.logo_1{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		
	}
	.box10{
		width: 50px;
		height: 50px;
		
	}
	.box10 img{
		width: 100%;
		height: 100%;
	}
	.box11{
		width: 216px;
		height: 50px;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		font-size: 11px;
	}
	.box11_1{
		width: 100px;
		height: 100%;
		text-align: center;
		
		line-height: 50px;
		margin-right: 10px;
		
	}
	.box11_4{
		width: 100px;
		height: 100%;
		text-align: center;
		
		line-height: 50px;
	}
	.box11_2{
		width: 100px;
		height: 100%;
		text-align: center;
		
		line-height: 50px;
		margin-right: 10px;
	}
	.box11_3{
		width: 100px;
		height: 100%;
		text-align: center;
		
		line-height: 50px;
		margin-right: 10px;
	}
	.box12{
		width: 200px;
		height: 50px;
		background-color:#42B983;
		border-radius: 50px;
		display: flex;
		flex-direction:row;
	}
	.box12_1{
		width: 150px;
		height: 100%;
		border-radius: 50px;
		border: none;
	}
	.box12_2{
		width: 28px;
		height: 100%;
		background-color: #fff;
	}
	.box12_2 img{
		width: 100%;
		height: 100%;
	}
	
	.logo_2{
		width: 100%;
		height: 200px;
	
		display: flex;
		flex-direction:column;	
	}
	.box13{
		width: 100%;
		height: 30px;
		
		display: flex;
		justify-content: space-between;
	}
	.box14{
		width: 100%;
		height: 144px;
		
		display: flex;
		justify-content: space-between;
	}
	.box14_1{
		width:200px;
		height: 120px;
		background-color: red;
		border-radius: 16px;
	}
	.box14_1_1{
		font-size: 10px;
		
		height: 10px;
		margin-left: 10px;
		
	}
	.box14_1_2{
		width: 100%;
		height: 12px;
		margin-top: 2px;
		color:#fff;
		font-size: 15px;
		margin-left: 10px;
		
	}
	.box14_1_3{
		margin-top: 20px;
		font-size: 19px;
		width: 100%;
		height:15px;
		margin-left: 10px;
		
	}
	.box14_1_4{
		margin-top: 10px;
		width: 100%;
		height: 20px;
		margin-left: 10px;
		display: flex;
		flex-direction: row;
		color:#fff;
	}
	.box14_2{
		width:160px;
		height: 100px;
		background-color: red;
		border-radius: 16px;
	}
	.box14_3{
		width:160px;
		height: 100px;
		background-color: red;
		border-radius: 16px;
	}
	
	.logo_3{
		width: 100%;
		height: 200px;
		
		display: flex;
		justify-content:space-between;
		
	}
	.box15{
		width: 180px;
		height: 100%;
		background-color: blue;
	}
	.box15_1{
		width: 100%;
		height: 20px;
		background-color: deeppink;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
	}
	.box15_2{
		
	}
	.box16{
		width: 446px;
		height: 100%;
		
	}
	
</style>
