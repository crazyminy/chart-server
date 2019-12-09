const puppeteer = require('puppeteer');

const render = async function(options,width,height){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    // await page.goto('https://www.baidu.com');
    // await page.screenshot({path:'example.png'});

    await page.setContent(
        `<div id="container" style="width:${width}px;height:${height}px" ></div>`
    );

    //传递options对象到evaluate函数中，挂载到window对象的全局属性中
    await page.evaluate((options)=>{
        window.chart={
            options
        }
    },options);

    await page.addScriptTag({url:'https://cdn.bootcss.com/echarts/4.4.0-rc.1/echarts-en.common.min.js'});

    await page.addScriptTag({
        content:`
        (function (window) {
            let option =window.chart.options; //浏览器环境下获取window对象中chart的配置项进行初始化
            window.myChart = window.echarts.init(document.getElementById('container'), null, {
                renderer: 'canvas'
            });
            window.myChart.setOption(option);
            
        })(this);
        
        `
    });
    let base64 = await page.evaluate(()=>{
        return myChart.getDataURL();
    });
    console.log(base64);
    //await page.screenshot({path:'example.png'});
    return base64;
    browser.close();
};

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
}; */
//render(options);



/* 
Echars 导出图片




(opts: {
    // 导出的格式，可选 png, jpeg
    type?: string,
    // 导出的图片分辨率比例，默认为 1。
    pixelRatio?: number,
    // 导出的图片背景色，默认使用 option 里的 backgroundColor
    backgroundColor?: string,
    // 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox']
    excludeComponents?: Array.<string>
}) => string
导出图表图片，返回一个 base64 的 URL，可以设置为Image的src。

示例：

var img = new Image();
img.src = myChart.getDataURL({
    pixelRatio: 2,
    backgroundColor: '#fff'
});
*/

exports.render_e = render;