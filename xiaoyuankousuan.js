const num = 1000 //题数
function Hookr2B(){
    Java.perform(function(){
    const JString= Java.use("java.lang.String")
        let r2 = Java.use("com.fenbi.android.leo.utils.r2")
        r2.b.overload("[B").implementation = function (data) {
            data = JSON.parse(String.fromCharCode(...new Uint8Array(data)))
            data.costTime = 1
            for(let i=0;i<num;i++){
            	data.questions.push({"answers":[">"],"content":"5\\circle3","costTime":319,"errorState":0,"examId":0,"id":1,"keypointId":0,"ruleType":0,"script":"[[{\"x\":388.6875,\"y\":1198.2977},{\"x\":431.756,\"y\":1198.2083},{\"x\":474.76447,\"y\":1202.074},{\"x\":515.89124,\"y\":1211.7893},{\"x\":565.727,\"y\":1224.9923},{\"x\":618.53485,\"y\":1237.8978},{\"x\":666.50287,\"y\":1247.9371},{\"x\":709.3284,\"y\":1258.8792},{\"x\":722.86755,\"y\":1271.5013},{\"x\":712.543,\"y\":1301.1832},{\"x\":672.1436,\"y\":1350.3722},{\"x\":616.1422,\"y\":1401.6215},{\"x\":552.83264,\"y\":1445.8134},{\"x\":486.4492,\"y\":1477.8749},{\"x\":436.92188,\"y\":1499.6764}]]","status":1,"userAnswer":">","wrongScript":"[]"})
            }
            data = JString.$new(JSON.stringify(data)).getBytes()
            
            return this["b"](data)
        }
    })
}
setImmediate(Hookr2B)