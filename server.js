const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const {render_e} = require('./echarts_generator');
const {render_h} = require('./highcharts_generator');
var template = require('./template');

app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

app.post("/echarts",async function(req,res){
    console.log(req);
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
    console.log(req.body);
    let dataSet = req.body.dataSet;
    //let dataSet = JSON.parse(req.body.dataSet);
    let width = req.body.width;
    let height = req.body.height;
    let index = parseInt(req.body.index);
    //console.log(options);
    let base = await render_e(dataSet,width,height,index);
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
    //let dataSet = req.body.dataSet;
    let width = req.body.width;
    let height = req.body.height;
    let index = req.body.index;
    let base = await render_h({},width,height,index);
    res.send(base);
})

app.post("/test",function(req,res){
    console.log(template[0]);
    res.send("2333333");
})

app.listen(3000);