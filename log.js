const myLog = {
    info : function(info){
        console.log("INFO:"+info)
    },
    warning:function(info){
console.log("Warning:"+info)
    },
    error:function(info){
    console.log("Error:"+info)
    }
}


module.exports = myLog