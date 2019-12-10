# chart-server
## introduction
由于项目要用到服务器生成图片的功能，但是由于后台图表的依赖库所能渲染的样式有限，故选择了业界最广泛使用的Echarts与HighCharts作为服务端渲染图片的库。使用了puppeteer作为headless浏览器来渲染图片，返回生成图片的 base64码。该功能需要使用nodejs来运行express服务，服务成功运行之后，可在java端或其他后台中通过本地（localhost）或者网络请求的方式，通过服务来得到base64码。
## 运行
```
yarn install
node server.js
```
## 接口

### echarts
- request
```
POST (application/json)

{
	"width":700,
	"height":600,
	"options":{
        "title": {
            "text": "ECharts 入门示例"
        },
        "tooltip": {},
        "legend": {
            "data":["销量"]
        },
        "xAxis": {
            "data": ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        "yAxis": {},
        "series": [{
            "name": "销量",
            "type": "bar",
            "data": [5, 20, 36, 10, 10, 20]
        }]
    }
}
```

- response
```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAJYCAYAAACAbzXXAAAgAElEQVR4Xu3dDZhkV10n/nOqeyYZJC8iCCIoTIILAZLputUZAhLjoiCKgGA0oiK......太长省略了
```


### HighCharts
- request
```
POST (application/json)

{
	"width":700,
	"height":600,
	"options":{
        "chart": {
            "type": "bar"                       
        },
        "title": {
            "text": "我的第一个图表"                 
        },
        "xAxis": {
            "categories": ["苹果", "香蕉", "橙子"]   
        },
        "yAxis": {
            "title": {
                "text": "吃水果个数"                
            }
        },
        "series": [{                              
            "name": "小明",                       
            "data": [1, 0, 4]                     
        }, {
            "name": "小红",
            "data": [5, 7, 3]
        }]
    }
}
```

- response
```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAgAElEQVR4Xu2dCbxN5frHn2OKiFMRUkjmMt/...........
```