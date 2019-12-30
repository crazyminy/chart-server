const puppeteer = require('puppeteer');
var template = require('./template');

const render = async function(data_series = {},width,height,index){
    let options = template[6];
    
    switch(index){
        case 0:
             
            break;
        case 1:
            //安全文明柱状图
            options.title.text = data_series.title;
            options.subtitle.text = data_series.subtitle;
            options.xAxis.categories = data_series.categories;
            options.series = data_series.series;
            break;
        case 2:
            //饼图
            options.title.text = data_series.title;
            options.series[0].data = data_series.data;
            break;
        case 3:
            //风险柱状图
            options.title.text = data_series.title;
            options.series = data_series.series;
            break;
        case 4:
            //管理行为评估柱状图
            options.title.text = data_series.title;
            options.xAxis.categories = data_series.categories;
            options.series = data_series.series;
            break;
        case 6:
            //实测实量
            options.title.text = data_series.title;
            options.xAxis.categories = data_series.categories;
            options.series = data_series.series;
            break;
        case 7:
            //质量风险
            options.title.text = data_series.title;
            options.subtitle.text = data_series.subtitle;
            options.xAxis.categories = data_series.categories;
            options.series = data_series.series;
            break;
        case 8:
            //综合评估
            options.title.text = data_series.title;
            options.xAxis.categories = data_series.categories;
            options.series = data_series.series;
            break;
    }
    /**/
    
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    // await page.goto('https://www.baidu.com');
    // await page.screenshot({path:'example.png'});

    await page.setContent(
        `<div id="container" style="width:${width}px;height:${height}px" ></div><canvas id="canvas" width="${width}px" height="${height}px"></canvas>`
    );

    //传递options对象到evaluate函数中，挂载到window对象的全局属性中
    await page.evaluate((options)=>{
        window.chart={
            options
        }
    },options);

    await page.addScriptTag({url:'https://code.highcharts.com.cn/highcharts/highcharts.js'});
    await page.addScriptTag({url:'https://code.highcharts.com.cn/highcharts-plugins/highcharts-zh_CN.js'});
    await page.addScriptTag({url:'https://cdn.bootcss.com/canvg/1.5/canvg.min.js'});
    await page.addScriptTag({url:'https://code.highcharts.com.cn/jquery/jquery-1.8.3.min.js'});
    await page.addScriptTag({url:'https://code.highcharts.com/modules/exporting.js'});
    //await page.addScriptTag({url:'http://cdn.hcharts.cn/highcharts/highcharts-3d.js'});

    await page.addScriptTag({
        content:`
        (function (window) {
            let option =window.chart.options; //浏览器环境下获取window对象中chart的配置项进行初始化
            window.myChart = Highcharts.chart('container', option);
            // 图表初始化函数
            
        })(this);
        
        `
    });
    let base64 = await page.evaluate(()=>{
        let svg = window.myChart.getSVG();
        let canvas = document.getElementById("canvas");
        canvg(canvas,svg);
        let base64 = canvas.toDataURL()
        return base64;
    });
    //console.log(base64);
    //await page.screenshot({path:'example.png'});
    //browser.close()
    return base64;
    
};

render();


exports.render_h = render;