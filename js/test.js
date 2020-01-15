function sale_vegetable() {
    var aStr = document.getElementById("event_1").value;
    var bStr = document.getElementById("event_2").value;
    alert(aStr + " " + bStr);

}

function send_data(){
    var tenSP="abc";
    var SoLuong=5;

    $.ajax({
        url:"data.php",
        type:"post",
        data:{
            tenSP:tenSP,
            SoLuong:SoLuong
        },
        success:function reponse(data){
            
        }
    })
}