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

    //雷达图 index 5
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
    }



]


module.exports = template;