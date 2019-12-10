const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const {render_e} = require('./echarts_generator');
const {render_h} = require('./highcharts_generator');

app.post("/echarts",bodyParser.json(),async function(req,res){
    //console.log(req);
    /* let options ={
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };  */
    //console.log(req);
    let options = req.body.options;
    let width = req.body.width;
    let height = req.body.height;
    //console.log(options);
    let base = await render_e(options,width,height);
    res.send(base);
})

app.post("/highcharts",bodyParser.json(),async function(req,res){

    /* var options = {
        chart: {
            type: 'bar'                          //指定图表的类型，默认是折线图（line）
        },
        title: {
            text: '我的第一个图表'                 // 标题
        },
        xAxis: {
            categories: ['苹果', '香蕉', '橙子']   // x 轴分类
        },
        yAxis: {
            title: {
                text: '吃水果个数'                // y 轴标题
            }
        },
        series: [{                              // 数据列
            name: '小明',                        // 数据列名
            data: [1, 0, 4]                     // 数据
        }, {
            name: '小红',
            data: [5, 7, 3]
        }]
    }; */
    let options = req.body.options;
    let width = req.body.width;
    let height = req.body.height;
    let base = await render_h(options);
    res.send(base);
})

app.listen(3000);