$(function(){
  $(".alert").hide();

  $("#submitBtn").click(function(){
    var sendFlag = true;

    if(!$("#name").val()){
      $("dd:nth-of-type(1) .alert").show();
      sendFlag = false;
    }else{
      $("dd:nth-of-type(1) .alert").hide();
    }

    if(!$("#email").val()){
      $("dd:nth-of-type(2) .alert").show();
      sendFlag = false;
    }else{
      $("dd:nth-of-type(2) .alert").hide();
    }

    if(!$("textarea").val()){
      $("dd:nth-of-type(3) .alert").show();
      sendFlag = false;
    }else{
      $("dd:nth-of-type(3) .alert").hide();
    }

    if(sendFlag == false){
      return false;
    }
  });
});
