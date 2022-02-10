var i_d = function introduce_down(){
    // introduce_down到浏览器网页文档顶部的距离(offsetTop指元素顶端到父元素顶端之间的距离)
    var introduce_down = document.getElementById('introduce_down').offsetTop 
    // document.body.scrollTop指文档下滑后卷起来的高度
    var hidden_height = document.body.scrollTop
    //浏览器工作区域的高度
    var window_height = document.documentElement.clientHeight
    var top_introduce_down = introduce_down - hidden_height - window_height
    if(top_introduce_down <= 0){
        for(var i = 0; i < document.getElementsByClassName('down_box').length; i++){
            document.getElementsByClassName('down_box')[i].style.left = "0%"
        }
    }
}
window.onload = i_d

