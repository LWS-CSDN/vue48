<template>
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="main" style="width: 600px;height: 400px;"></div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: '',
        data() {
            return {
                charts: '',
            /*  opinion: ["1", "3", "3", "4", "5"],*/
                opinionData: ["0.5", "1.5", "1", "2", "2.5"]
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
                        data: ['近七日收益']
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
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>