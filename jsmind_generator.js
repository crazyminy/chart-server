const puppeteer = require('puppeteer');

var template = require('./template');


const render = async function(dataSet,index){

    // let options = template[index];
    // switch(index){
    // }
    
    const options = {
        container:'container',
        editable:false,
        theme:'info'
    };

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    // await page.goto('https://www.baidu.com');
    // await page.screenshot({path:'example.png'});

    await page.setContent(
        `<div id="container"></div>
        <img id="myimg">`
    );

    //传递options对象到evaluate函数中，挂载到window对象的全局属性中
    await page.evaluate((options)=>{
        window.chart={
            options
        }
    },options);

    await page.addStyleTag({url:"http://47.102.106.48:8080/examples/files/style/jsmind.css"});
    await page.addScriptTag({url:'http://47.102.106.48:8080/examples/files/js/jsmind.js'});
    await page.addScriptTag({url:'http://47.102.106.48:8080/examples/files/js/jsmind.screenshot.js'});

    await page.addScriptTag({
        content:`
        (function (window) {
            var mind = {
                /* 元数据，定义思维导图的名称、作者、版本等信息 */
                "meta":{
                    "name":"jsMind-demo-tree",
                    "author":"hizzgdev@163.com",
                    "version":"0.2"
                },
                /* 数据格式声明 */
                "format":"node_tree",
                /* 数据内容 */
                "data":{
                    "id":"edd",
                    "topic":"不符合项问题",
                    "children":[
                        {   "id":"x",
                            "topic":"安全文明",
                            "direction":"left",
                            "children":[{"id":"fdasf","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"y","topic":"施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦<br/>风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求<br/>阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3"},
                            {"id":"z","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"c","topic":"施工现场存在个别工作人员未按照要求"}]
                        },
                        {"id":"v","topic":"高处作业",
                            "children":[{"id":"b","topic":"施工现场存在个别工作人员未按照要求"}]
                        },
                        {"id":"n","topic":"高处作业",
                            "children":[{"id":"m","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"yfdas","topic":"施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3"},
                            {"id":"zgf","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"chgf","topic":"施工现场存在个别工作人员未按照要求"}]
                        },
                        {"id":"r","topic":"高处作业",
                            "children":[{"id":"t","topic":"施工现场存在个别工作人员未按照要求"}]
                        },
                        {"id":"fffff","topic":"高处作业",
                            "children":[{"id":"t","topic":"施工现场存在个别工作人员未按照要求"}]
                        },
                        {"id":"ffffffff","topic":"高处作业",
                            "children":[{"id":"t","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"y345","topic":"施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3"},
                            {"id":"z7654","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"c432","topic":"施工现场存在个别工作人员未按照要求"}]
                        },
                        {"id":"fffffffff","topic":"高处作业",
                            "children":[{"id":"t","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"yfdasg","topic":"施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3"},
                            {"id":"zfdsgg","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"cgdfg","topic":"施工现场存在个别工作人员未按照要求"}]
                        },
                        {"id":"ffffffffffff","topic":"高处作业",
                            "children":[{"id":"t","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"yjkuyt","topic":"施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3施工现场存在个别工作人员未按照要求阿斯顿萨达撒大苏打实打实大苏打撒旦  风险等级：3"},
                            {"id":"ttsdz","topic":"施工现场存在个别工作人员未按照要求"},
                            {"id":"cuytj","topic":"施工现场存在个别工作人员未按照要求"}]
                        }
                    ]
                }



            }
            let option =window.chart.options; //浏览器环境下获取window对象中chart的配置项进行初始化
            var jm = new jsMind(option);
            window.ss = new jsMind.screenshot(jm);
            jm.show(mind);
            jm.expand_all();
            
        })(this);
        
        `
    });
    let base64 = await page.evaluate(()=>{
        return new Promise(function(resolve,reject){
            try {
                window.ss.shootAsDataURL(data=>resolve(data));    
            } catch (error) {
                reject(error);
            }
        });
    });
    console.log(base64);
    page.evaluate((base64)=>{
        document.getElementById("myimg").setAttribute("src",base64);
    },base64);
    
    
    
    browser.close();
    return base64;
    
};

//render();

exports.render_m = render;