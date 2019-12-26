const puppeteer = require('puppeteer');
var template = require('./template');

const render = async function(data_series = {},width,height,index){
    let options = template[index];
    switch(index){
        case 0:
            options.series[0].data = data_series;
            break;
        case 1:
        case 2:
        case 3:
            let subtitle = data_series.subtitle;
            let categories = data_series.categories;
            let series = data_series.series;
            options.subtitle.text = subtitle;
            options.xAxis.categories = categories;
            options.series = series;
            break;
        case 4:
            options.series = data_series;

    }
    const browser = await puppeteer.launch();
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

    await page.addScriptTag({url:'http://cdn.highcharts.com.cn/highcharts/highcharts.js'});
    await page.addScriptTag({url:'https://cdn.bootcss.com/canvg/1.5/canvg.min.js'});
    await page.addScriptTag({url:'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'});
    await page.addScriptTag({url:'https://code.highcharts.com/modules/exporting.js'});
    await page.addScriptTag({url:'http://cdn.hcharts.cn/highcharts/highcharts-3d.js'});

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
    browser.close()
    return base64;
    
};



exports.render_h = render;