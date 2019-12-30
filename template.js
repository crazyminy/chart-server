var template = [

    //树状图 index 0
    {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                animation: false,
                data: [],

                top: '1%',
                left: '12%',
                bottom: '1%',
                right: '15%',

                symbolSize: 9,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 15
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    },

    // 安全文明柱状图 index1 h
    {
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 0,
                depth: 100,
                viewDistance: 25
            }
        },
        title: {
            text: '安全实体评估结果'
        },
        subtitle:{
            text:'安全文明得分:68.09'
        },
        xAxis: {
            categories: ['施工用电','习惯性违章','高处作业','文明施工','基坑工程']
        },
        yAxis: {
            title:{
                text:'数量'
            },
            tickInterval:10,
            opposite: false//反转
        },
        legend:{
            enabled:true,
        },
        plotOptions: {
            column: {
                depth: 100,
                pointPadding:0.8,
                pointWidth:30,
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            name:'不符合项数量',
            color:'rgb(75,67,232)',
            data: [7,4,5,6,4],		  
        },{
            name:'3级以上风险数量',
            color:'red',
            data:[1,1,3,0,2],
        },
                 {
                     name:'分项得分',
                     color:'#00CD00',
                     data:[76.67,55,55,48.33,77.78],
                 },
                ]
    },

    // 饼图 index2 h
    {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: '项目安全风险分布饼图'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend:true,
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'+':'+'{point.percentage:.2f}'+'%'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '浏览器占比',
            data: [
                {
                    name: '提醒',
                    y: 244,
                    sliced: true,
                    color:'rgb(46,232,65)'
                },
                {
                    name: '特征值1',
                    y: 2439,
                    sliced: true,
                    color:'rgb(49,95,232)'
                },
                {
                    name: '特征值2',
                    y: 4126,
                    sliced: true,
                    color:'rgb(232,232,49)'
                },
                {
                    name: '特征值3',
                    y: 2683,
                    sliced: true,
                    color:'rgb(240,117,60)'
                },
                {
                    name: '特征值4',
                    y: 488,
                    sliced: true,
                    color:'rgb(232,36,18)'
                }
            ]
        }]
    },

    // 风险柱状图 index3 h
    {
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 4,
                beta: 14,
                depth: 100,
                viewDistance: 25
            }
        },
        title: {
            text: '项目安全风险分布直方图'
        },
        xAxis: {
            categories: ['']
        },
        yAxis: {
            title:{
                text:'数量'
            },
            tickInterval:2,
            opposite: false//反转
        },
        legend:{
            enabled:true,
        },
        plotOptions: {
            column: {
                depth: 100,
                pointPadding:0.8,
                pointWidth:50,
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            name:'提醒',
            color:'rgb(46,232,65)',
            data: [1],		  
        },{
            name:'特征值1',
            color:'rgb(49,95,232)',
            data:[10],
        },
                 {
                     name:'特征值2',
                     color:'rgb(232,232,49)',
                     data:[17],
                 },
                 {
                     name:'特征值3',
                     color:'rgb(240,117,60)',
                     data:[11],
                 },
                 {
                     name:'特征值4',
                     color:'rgb(232,36,18)',
                     data: [2],
                 },
                ]
    },

    //管理行为评估柱状图 index 4 h
    {
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 0,
                depth: 100,
                viewDistance: 25
            }
        },
        title: {
            text: '管理行为评估结果'
        },
        xAxis: {
            categories: ['施工总承包','指挥部']
        },
        yAxis: {
            tickInterval:10,
            opposite: false//反转
        },
        legend:{
            enabled:true,
        },
        plotOptions: {
            column: {
                depth: 100,
                pointPadding:0.8,
                pointWidth:30,
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            name:'不符合项数量',
            color:'rgb(75,67,232)',
            data: [7,4,5,6,4],		  
        },{
            name:'3级以上风险数量',
            color:'red',
            data:[1,1,3,0,2],
        },
                 {
                     name:'分项得分',
                     color:'#00CD00',
                     data:[76.67,55,55,48.33,77.78],
                 },	]
    },

    //雷达图 index 5 e
    {
        tooltip: {
            trigger: 'axis'
        },
        radar: [
            {
                name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#696969',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
                axisLabel:
                    {
                        showMaxLabel:true,
                        showMinLabel:true
                        
                    },
                indicator: [
                    {text: '安全', max: 1.0,axisLabel:{show:true,showMaxLabel:true,color:'#171230',showMinLabel:true}},
                    {text: '轻微风险', max: 1.0},
                    {text: '较大风险', max: 1.0},
                    {text: '重大风险', max: 1.0},
                    {text: '特别重大风险', max: 1.0},
                ],
            },
        ],
        series: [
            {
                animation:false,
                type: 'radar',
                data: [
                    {
                        value: "",
                        symbolSize:8,
                        lineStyle:{
                            color:'#4a32c8',
                            width:5
                        },
                        label:{
                                show:true,
                                position:'bottom',
                                fontSize:15,
                                formatter:()=>{
                                    return value;
                                },
                        }
                    }
                ],
                itemStyle:{
                            normal:{
                                color:'black',
                                borderColor:'#000',
                                borderWidth:0
                            }
                        },
                        silent:true,
                                z:1,
            },
            {
                animation:false,
                type: 'radar',
                name:"",
                data: [
                    {
                        value: "",
                        symbolSize:8,
                    }
                ],
                lineStyle:{
                            color:'#4a32c8',
                            width:0,
                            labelLine:{
                                show:false
                            }
                        },
                itemStyle:{
                            normal:{
                                color:'black',
                                borderColor:'green',
                                borderWidth:8
                            }
                        },
                        silent:true,
                                z:2,
            },
            {
                animation:false,
                type: 'radar',
                name:"",
                data: [
                    {
                        value: "",
                        symbolSize:8,
                    }
                ],
                lineStyle:{
                            color:'#4a32c8',
                            width:0,
                            labelLine:{
                                show:false
                            }
                        },
                itemStyle:{
                            normal:{
                                color:'black',
                                borderColor:'blue',
                                borderWidth:8
                            }
                        },
                        silent:true,
                                z:3,
            },
            {
                animation:false,
                type: 'radar',
                name:"",
                data: [
                    {
                        value: "",
                        symbolSize:8,
                    }
                ],
                lineStyle:{
                            color:'#4a32c8',
                            width:0,
                            labelLine:{
                                show:false
                            }
                        },
                itemStyle:{
                            normal:{
                                color:'black',
                                borderColor:'yellow',
                                borderWidth:8
                            }
                        },
                        silent:true,
                                z:4,
            },
            {
                animation:false,
                type: 'radar',
                name:"",
                data: [
                    {
                        value: "",
                        symbolSize:8,
                    }
                ],
                lineStyle:{
                            color:'#4a32c8',
                            width:0,
                            labelLine:{
                                show:false
                            }
                        },
                itemStyle:{
                            normal:{
                                color:'black',
                                borderColor:'orange',
                                borderWidth:8
                            }
                        },
                        silent:true,
                                z:5,
            },
            {
                animation:false,
                type: 'radar',
                name:"",
                data: [
                    {
                        value: "",
                        symbolSize:8,
                    }
                ],
                lineStyle:{
                            color:'#4a32c8',
                            width:0,
                            labelLine:{
                                show:false
                            }
                        },
                itemStyle:{
                            normal:{
                                color:'black',
                                borderColor:'red',
                                borderWidth:8
                            }
                        },
                        silent:true,
                                z:6,
            },
            {
                animation:false,
                type: 'radar',
                name:"",
                data: [
                    {
                        value: "",
                        symbolSize:8,
                    }
                ],
                lineStyle:{
                            color:'#4a32c8',
                            width:0,
                            labelLine:{
                                show:false
                            }
                        },
                itemStyle:{
                            normal:{
                                color:'black',
                                borderColor:'#D3D3D3',
                                borderWidth:8
                            }
                        },
                        silent:true,
                                z:7,
            },
        ]
    },

    //实测实量合格率 index 6 h
    {
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 4,
                beta: 14,
                depth: 100,
                viewDistance: 25
            }
        },
        title: {
            text: '实测实量合格率直方图'
        },
        xAxis: {
            categories: ['现浇墙截面尺寸','防水反坎','外门窗洞口尺寸']
        },
        yAxis: {
            labels: {
                formatter: function () {
                    console.log(this.value)
                    return (this.value > 0 ? "" : '') + this.value + '%';
                }
            },
            title:{
                text:'合格率（%）'
            },
            tickInterval:20,
            opposite: false//反转
        },
        legend:{
            enabled:false,
        },
        plotOptions: {
            column: {
                depth: 100,
                pointPadding:0.8,
                pointWidth:50,
                dataLabels:{
                    enabled:true,
                    formatter: function (index) {
                        console.log(this.y)
                        return  this.y + '%';
                    }
                }
            }
        },
        series: [{
            name:'合格率',
            color:'rgb(49,95,232)',
            data:[{y:95},{y:90},{y:100}]
        },	 
                ]
    },

    //质量风险柱状图 index 7 h
    {
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 0,
                depth: 100,
                viewDistance: 25
            }
        },
        title: {
            text: '质量风险评估结果'
        },
        subtitle:{
            text:'质量风险得分:68.09'
        },
        xAxis: {
            categories: ['施工用电','习惯性违章','高处作业','文明施工','基坑工程']
        },
        yAxis: {
            title:{
                text:'数量'
            },
            tickInterval:10,
            opposite: false//反转
        },
        legend:{
            enabled:true,
        },
        plotOptions: {
            column: {
                depth: 100,
                pointPadding:0.8,
                pointWidth:30,
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            name:'不符合项数量',
            color:'rgb(75,67,232)',
            data: [7,4,5,6,4],		  
        },{
            name:'3级以上风险数量',
            color:'red',
            data:[1,1,3,0,2],
        },
                 {
                     name:'分项得分',
                     color:'#00CD00',
                     data:[76.67,55,55,48.33,77.78],
                 },
                ]
    },

    //综合评估柱状图 index 8 h
    {
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 0,
                depth: 100,
                viewDistance: 25
            }
        },
        title: {
            text: '综合评估结果'
        },
        xAxis: {
            categories: ['施工总承包','指挥部']
        },
        yAxis: {
            tickInterval:10,
            opposite: false//反转
        },
        legend:{
            enabled:true,
        },
        plotOptions: {
            column: {
                depth: 100,
                pointPadding:0.8,
                pointWidth:30,
                dataLabels:{
                    enabled:true
                }
            }
        },
        series: [{
            name:'综合评分',
            color:'rgb(190,190,190)',
            data: [72.05,73.3],		  
        },{
            name:'管理行为(权重30%)',
            color:'rgb(232,137,31)',
            data:[81.3,85.45],
        },
                 {
                     name:'安全文明(权重70%)',
                     color:'rgb(75,67,232)',
                     data:[68.09,68.09],
                 },
                ]
    }

]


module.exports = template;