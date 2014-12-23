/**
 * Created by Gezii on 2014/12/22.
 */

var today =
    [
        {"name":"北京", "scanTimes":6759, "proportion":"5.28%", "uv":3552, "ipNum":2109, "newUV":3384, "visitTimes":3852, "perPages":1.9 , "avgDepth":1.75, "avgTime":"50.28秒", "leaveRate": "54.75%"},
        {"name":"上海", "scanTimes":5212, "proportion":"4.07%", "uv":3376, "ipNum":912 , "newUV":3264, "visitTimes":3544, "perPages":1.54, "avgDepth":1.47, "avgTime":"1分1秒  ", "leaveRate":"73.7%"},
        {"name":"广东", "scanTimes":5083, "proportion":"3.97%", "uv":3410, "ipNum":992 , "newUV":3321, "visitTimes":3552, "perPages":1.49, "avgDepth":1.43, "avgTime":"39.09秒", "leaveRate": "74.55%"},
        {"name":"江苏", "scanTimes":2404, "proportion":"1.88%", "uv":482 , "ipNum":280 , "newUV":383 , "visitTimes":981 , "perPages":4.99, "avgDepth":2.45, "avgTime":"5分23秒 ", "leaveRate":"54.23%"},
        {"name":"浙江", "scanTimes":2238, "proportion":"1.75%", "uv":939 , "ipNum":688 , "newUV":921 , "visitTimes":1036, "perPages":2.38, "avgDepth":2.16, "avgTime":"36.13秒", "leaveRate": "30.02%"},
        {"name":"湖北", "scanTimes":2192, "proportion":"1.71%", "uv":1571, "ipNum":359 , "newUV":1516, "visitTimes":1623, "perPages":1.4 , "avgDepth":1.35, "avgTime":"52.12秒", "leaveRate": "79.98%"},
        {"name":"福建", "scanTimes":2128, "proportion":"1.66%", "uv":1486, "ipNum":324 , "newUV":1442, "visitTimes":1531, "perPages":1.43, "avgDepth":1.39, "avgTime":"32.58秒", "leaveRate": "78.45%"},
        {"name":"重庆", "scanTimes":1864, "proportion":"1.46%", "uv":1353, "ipNum":266 , "newUV":1320, "visitTimes":1393, "perPages":1.38, "avgDepth":1.34, "avgTime":"28.38秒", "leaveRate": "79.25%"},
        {"name":"江西", "scanTimes":1693, "proportion":"1.32%", "uv":1359, "ipNum":255 , "newUV":1327, "visitTimes":1381, "perPages":1.25, "avgDepth":1.23, "avgTime":"30.62秒", "leaveRate": "85.66%"},
        {"name":"湖南", "scanTimes":1630, "proportion":"1.27%", "uv":1277, "ipNum":232 , "newUV":1225, "visitTimes":1314, "perPages":1.28, "avgDepth":1.24, "avgTime":"28.95秒", "leaveRate": "85.16%"},
        {"name":"山东", "scanTimes":1501, "proportion":"1.17%", "uv":1184, "ipNum":166 , "newUV":1155, "visitTimes":1210, "perPages":1.27, "avgDepth":1.24, "avgTime":"32.29秒", "leaveRate": "85.7%"},
        {"name":"辽宁", "scanTimes":1446, "proportion":"1.13%", "uv":1266, "ipNum":104 , "newUV":1222, "visitTimes":1277, "perPages":1.14, "avgDepth":1.13, "avgTime":"36.44秒", "leaveRate": "92.64%"},
        {"name":"广西", "scanTimes":1436, "proportion":"1.12%", "uv":1101, "ipNum":165 , "newUV":1074, "visitTimes":1132, "perPages":1.3 , "avgDepth":1.27, "avgTime":"30.59秒", "leaveRate": "83.48%"},
        {"name":"河南", "scanTimes":1415, "proportion":"1.11%", "uv":625 , "ipNum":478 , "newUV":603 , "visitTimes":679 , "perPages":2.26, "avgDepth":2.08, "avgTime":"37.67秒", "leaveRate": "34.76%"},
        {"name":"陕西", "scanTimes":1348, "proportion":"1.05%", "uv":1100, "ipNum":143 , "newUV":1069, "visitTimes":1120, "perPages":1.23, "avgDepth":1.2 , "avgTime":"31.25秒", "leaveRate": "88.39%"},
        {"name":"山西", "scanTimes":1300, "proportion":"1.02%", "uv":1205, "ipNum":59  , "newUV":1164, "visitTimes":1216, "perPages":1.08, "avgDepth":1.07, "avgTime":"38.5秒 ", "leaveRate": "96.05%"},
        {"name":"安徽", "scanTimes":1276, "proportion":"1%   ", "uv":1198, "ipNum":65  , "newUV":1169, "visitTimes":1203, "perPages":1.07, "avgDepth":1.06, "avgTime":"27.76秒", "leaveRate": "95.93%"},
        {"name":"内蒙古", "scanTimes":1070, "proportion":"0.84%", "uv":1065, "ipNum":16  , "newUV":1029, "visitTimes":1065, "perPages":1   , "avgDepth":1   , "avgTime":"29秒   ", "leaveRate": "99.62%"},
        {"name":"吉林", "scanTimes":974 , "proportion":"0.76%", "uv":913 , "ipNum":38  , "newUV":883 , "visitTimes":922 , "perPages":1.07, "avgDepth":1.06, "avgTime":"29.1秒 ", "leaveRate": "96.64%"},
        {"name":"云南", "scanTimes":295 , "proportion":"0.23%", "uv":122 , "ipNum":91  , "newUV":121 , "visitTimes":139 , "perPages":2.42, "avgDepth":2.12, "avgTime":"31.09秒", "leaveRate": "28.06%"},
        {"name":"河北", "scanTimes":835 , "proportion":"0.65%", "uv":358 , "ipNum":248 , "newUV":351 , "visitTimes":378 , "perPages":2.33, "avgDepth":2.21, "avgTime":"28.71秒", "leaveRate": "23.54%"},
        {"name":"新疆", "scanTimes":40  , "proportion":"0.03%", "uv":22  , "ipNum":19  , "newUV":21  , "visitTimes":22  , "perPages":1.82, "avgDepth":1.82, "avgTime":"20.14秒", "leaveRate": "36.36%"},
        {"name":"西藏", "scanTimes":12  , "proportion":"0.01%", "uv":4   , "ipNum":4   , "newUV":4   , "visitTimes":5   , "perPages":3   , "avgDepth":2.4 , "avgTime":"25.8秒 ", "leaveRate": "0%"},
        {"name":"黑龙江", "scanTimes":165 , "proportion":"0.13%", "uv":71  , "ipNum":65  , "newUV":71  , "visitTimes":75  , "perPages":2.32, "avgDepth":2.2 , "avgTime":"28.15秒", "leaveRate": "26.67%"},
        {"name":"山东", "scanTimes":730 , "proportion":"0.57%", "uv":320 , "ipNum":211 , "newUV":315 , "visitTimes":354 , "perPages":2.28, "avgDepth":2.06, "avgTime":"55.97秒", "leaveRate": "44.92%"},
        {"name":"海南", "scanTimes":173 , "proportion":"0.14%", "uv":64  , "ipNum":47  , "newUV":64  , "visitTimes":75  , "perPages":2.7 , "avgDepth":2.31, "avgTime":"33.37秒", "leaveRate": "20%"},
        {"name":"四川", "scanTimes":963 , "proportion":"0.75%", "uv":427 , "ipNum":328 , "newUV":401 , "visitTimes":460 , "perPages":2.26, "avgDepth":2.09, "avgTime":"31.05秒", "leaveRate": "35.65%"},
        {"name":"贵州", "scanTimes":285 , "proportion":"0.22%", "uv":109 , "ipNum":91  , "newUV":99  , "visitTimes":126 , "perPages":2.61, "avgDepth":2.26, "avgTime":"1分27秒 ", "leaveRate":"36.51%"},
        {"name":"陕西", "scanTimes":1300, "proportion":"1.02%", "uv":1205, "ipNum":59  , "newUV":1164, "visitTimes":1216, "perPages":1.08, "avgDepth":1.07, "avgTime":"38.5秒 ", "leaveRate": "96.05%"},
        {"name":"甘肃", "scanTimes":124 , "proportion":"0.1% ", "uv":51  , "ipNum":47  , "newUV":51  , "visitTimes":56  , "perPages":2.43, "avgDepth":2.21, "avgTime":"3分18秒 ", "leaveRate":"32.14%"},
        {"name":"青海", "scanTimes":69  , "proportion":"0.05%", "uv":34  , "ipNum":27  , "newUV":34  , "visitTimes":35  , "perPages":2.03, "avgDepth":1.97, "avgTime":"26.7秒 ", "leaveRate": "34.29%"},
        {"name":"宁夏", "scanTimes":57  , "proportion":"0.04%", "uv":20  , "ipNum":15  , "newUV":19  , "visitTimes":21  , "perPages":2.85, "avgDepth":2.71, "avgTime":"4分23秒 ", "leaveRate":"33.33%"},
        {"name":"天津",	"scanTimes":729	, "proportion":"0.57%",	"uv":287 , "ipNum":204 , "newUV":266 , "visitTimes":330	, "perPages":2.54, "avgDepth":2.21,	"avgTime":"37.14秒"	, "leaveRate":"30.61%"}
    ];

//drawMap(today, "scanTimes");


//---------------------高级定时器begin-----------------------------------------
//重复的定时器
var left = 0;
var div = document.getElementById("move");
setTimeout(function(){
    left = parseInt(div.style.marginLeft) + 1;
    div.style.marginLeft = left + "px";

    if(left < 1194){
        setTimeout(arguments.callee, 5);
    }
}, 5);


var chunkData = [12,123,233,342,355,2342,677,6874,3345,9776,67568,4353,45,53,34534,4664,2353,
    12,123,233,342,355,2342,677,6874,3345,9776,67568,4353,45,53,34534,4664,2353];

chunk(chunkData.concat(), function(item){
    var div = document.getElementById("chunkDiv");
    div.innerHTML += item + " ";
});

//数组分块模式
function chunk(array, process, context){
    setTimeout(function(){
        var item = array.shift();
        process.call(context, item);

        if (array.length > 0) {
            setTimeout(arguments.callee, 200);
        }
    }, 200)
}

//---------------------高级定时器  end-----------------------------------------



//---------------------函数节流begin-------------------------------------------
//函数节流
var processor = {
    timoutId : null,

    //实际进行处理的方法
    performProcessing : function(str){
        console.log(str);
    },

    //初始处理调用的方法
    process : function(str){
        clearTimeout(this.timeoutId);

        var that = this;
        this.timeoutId = setTimeout(function(){
            that.performProcessing(str);
        }, 100);
    }
}
for (var i = 100000 - 1; i >= 0; i--) {
    processor.process("aa");
    // processor.performProcessing("bb");
};

//函数节流 防止某些代码在没有间断的情况连续执行
function throttle(method, context){
    clearTimeout(method.tId);
    method.tId = setTimeout(function(){
        method.call(context);
    }, 100);
}

//---------------------函数节流  end-------------------------------------------


//---------------------自定义事件begin-----------------------------------------
function EventTarget(){
    this.handlers = {};
}
EventTarget.prototype = {
    constructor : EventTarget,
    addHandler : function(type, handler){
        if (typeof this.handlers[type] == "undefined") {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    },

    fire : function(event){
        if (!event.target) {
            event.target = this;
        }
        if (this.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                handlers[i](event);
            }
        }
    },

    removeHandler : function(type, handler){
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i=0, len=handlers.length; i < len; i++){
                if (handlers[i] === handler) {
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }
}

//---------------------自定义事件  end-----------------------------------------

//---------------------拖放begin-----------------------------------------------
var DragDrop = function(){

    var dragdrop = new EventTarget(),
        dragging = null,
        diffX = 0,
        diffY = 0;

    function handlEvent(event){
        var target = event.target;
        switch(event.type){
            case "mousedown":
                if (target.className.indexOf("draggable") > -1) {
                    dragging = target;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                    dragdrop.fire({type:"dragstart", target:dragging, x:event.clientX, y:event.clientY});
                };
                break;

            case "mousemove":
                if (dragging !== null) {
                    dragging.style.left = (event.clientX-diffX) + "px";
                    dragging.style.top = (event.clientY-diffY) + "px";
                    dragdrop.fire({type:"drag", target:dragging, x:event.clientX, y:event.clientY});
                };
                break;

            case "mouseup":
                dragdrop.fire({type:"dragend", target:dragging, x:event.clientX, y:event.clientY});
                dragging = null;
                break;
        }
    };


    dragdrop.enable = function(){
        $(document).on("mousedown", handlEvent);
        $(document).on("mousemove", handlEvent);
        $(document).on("mouseup", handlEvent);
    };
    dragdrop.disable = function(){
        $(document).off("mousedown", handlEvent);
        $(document).off("mousemove", handlEvent);
        $(document).off("mouseup", handlEvent);
    };

    return dragdrop;
}();

DragDrop.enable();
DragDrop.addHandler("dragstart", function(event){
    $("#status").html("(" + event.x + "," + event.y + ")");
});

DragDrop.addHandler("drag", function(event){
    $("#status").html("(" + event.x + "," + event.y + ")");
});
DragDrop.addHandler("drag", function(event){
    $("#status").html("(" + event.x + "," + event.y + ")");
});

//---------------------拖放  end-----------------------------------------------

//---------------------地理位置begin-------------------------------------------

var watchId = navigator.geolocation.watchPosition(function(position){
    $("#geo").html("<span>latitude:"+ position.coords.latitude +", longitude:"+ position.coords.longitude +"</span>");
}, function(error){
    console.log("Error code:" + error.code);
    console.log("Error message:" + error.message);
});
//clearWatch(watchId);





//---------------------地理位置  end-------------------------------------------




//---------------------echarts map begin---------------------------------------
function drawMap(data, type){
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'horizontal',
            selectedMode: false,
            x:'left',
            data: [type]
        },
        dataRange: {
            min: 0,
            max: 10000,
            x: 'left',
            y: 'bottom',
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true
        },
        series: [        {
            name: type,
            type: 'map',
            mapType: 'china',
            showLegendSymbol : false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[]
        }]
    };

    for(var i=0; i<data.length; i++){
        var obj = {name:data[i].name, value:data[i][type]};
        option.series[0].data.push(obj);
    }


    var chart = echarts.init(document.getElementById("map"));
    chart.clear();
    chart.setOption(option, true);
}
//---------------------echarts map   end---------------------------------------