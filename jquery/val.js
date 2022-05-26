$(function(){

//firtname
let fnameError = true;
$('#fname').keyup(function(){
  validateform1();
});
function validateform1(){
    let fn = $('#fname').val();
    var x = /^[A-Za-z]*$/;
    if (fn == ""){  
      $('#FNAME').html("*Please enter firstname");
      fnameError = false;
    } 
    else if(!x.test(fn)){
        $('#FNAME').html("*Invalid firstname");
        fnameError = false;
      }
      else
      {
        $('#FNAME').html(""); 
      }
}
  
//lastname
let lnameError = true;
$('#lname').keyup(function(){
  validateform2();
});
function validateform2(){
    let ln = $('#lname').val();
    var x = /^[A-Za-z]*$/;
    if (ln == ""){  
      $('#LNAME').html("*Please enter firstname");
      lnameError = false;
    } 
    else if(!x.test(ln)){
        $('#LNAME').html("*Invalid firstname");
        lnameError = false;
      }
      else
      {
        $('#LNAME').html(""); 
      }
}

//address line 1
let s1nameError = true;
$('#street1').keyup(function(){
  validateform3();
});
function validateform3(){ 
    let sadd1 = $('#street1').val();
    var x = /^[a-z," ",0-9]+$/;
    if (sadd1==""){  
      $('#SADD1').html("*Please enter street line 1");
      s1nameError = false;
    }
    else if(!x.test(sadd1)){
      $('#SADD1').html("*Special characters are not allow"); 
      s1nameError = false;
    }
    else{
      $('#SADD1').html(""); 
    }
  }

// //address line 2
let s2nameError = true;
$('#street2').keyup(function(){
  validateform4();
});
function validateform4(){ 
    let sadd2 = $('#street2').val();
    var x = /^[a-z," ",0-9]+$/;
    if (sadd2==""){  
      $('#SADD2').html("*Please enter street line 2");
      s2nameError = false;
    }
    else if(!x.test(sadd2)){
      $('#SADD2').html("*Special characters are not allow"); 
      s2nameError = false;
    }
    else{
      $('#SADD2').html(""); 
    }
  }

  //city
let c_nameError = true;
$('#city').keyup(function(){
  validateform5();
});
function validateform5(){
    let cty = $('#city').val();
    var x = /^[A-Za-z]*$/;
    if (cty == "")
    {  
      $('#CITY').html("*Please enter city");
      c_nameError = false;
    } 
    else if(!x.test(cty))
      {
        $('#CITY').html("*Invalid city");
        c_nameError = false;
      }
      else
      {
        $('#CITY').html(""); 
      }
    }
  

  //state
  let s_nameError = true;
$('#state').keyup(function(){
  validateform6();
});

  function validateform6(){
    let stt = $('#state').val();
    var x = /^[A-Za-z]*$/;
    if (stt == "")
    {  
      $('#STREET').html("*Please enter state");
      s_nameError = false;
    } 
    else if(!x.test(stt))
      {
        $('#STREET').html("*Invalid state");
        s_nameError = false;
      }
      else
      {
        $('#STREET').html(""); 
      }
    }

  //postal
  let p_nameError = true;
$('#postal').keyup(function(){
  validateform7();
});

  function validateform7(){
    let ptl = $('#postal').val();
    if (ptl=="")
    {  
      $('#POSTAL').html("*Please enter postal code");
      p_nameError = false;
    } 
    else if(isNaN(ptl))
      {
        $('#POSTAL').html("*Enter only numbers");
        p_nameError = false; 
      }
      else if(ptl.length!=6)
      {
        $('#POSTAL').html("*Enter only six numbers"); 
        p_nameError = false;
      }
      else
      {
        $('#POSTAL').html(""); 
      }
    }
 
  //phone number
  let phn_nameError = true;
$('#phone').keyup(function(){
  validateform8();
});

  function validateform8(){
    let phn = $('#phone').val();
    var x=/^[6-9]\d{9}$/ ;
    if (phn=="")
    {  
      $('#PHONE').html("*Please enter phone number");
      phn_nameError = false;
    } 
    else if(isNaN(phn))
      {
        $('#PHONE').html("*Enter only numbers");
        phn_nameError = false; 
      }
      else if(!x.test(phn))
      {
        $('#PHONE').html("*Enter only ten digit and must be start from 6 to 9"); 
        phn_nameError = false;
      }
      else
      {
        $('#PHONE').html(""); 
      }
    }
  
    //email
  let mail_nameError = true;
$('#e-mail').keyup(function(){
  validateform9();
});
  function validateform9(){
    let mail = $('#e-mail').val();
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (mail=="")
    {  
      $('#EMAIL').html("*Please enter e-mail");
      mail_nameError = false;
    } 
    else if(!pattern.test(mail))
      {
        $('#EMAIL').html("*Invalid e-mail"); 
        mail_nameError = false;
      }
      else
      {
        $('#EMAIL').html(""); 
      }
    }
  

//select
let select_nameError = true;
$('#how').keyup(function(){
  validateform10();
});
function validateform10(){
    var  select = $('#how').val();
    if (select == 0) 
    {
      $('#SELECT').html("*Select required");
      select_nameError = false;
    }
    else 
    {
      $('#SELECT').html("");
    }}

//feedback
let feedback_nameError = true;
$('#feedback').keyup(function(){
  validateform11();
});
function validateform11(){
    let fdbk = $('#feedback').val();
    if (fdbk=="")
    {  
      $('#FEEDBACK').html("*Please give your feedback");
      feedback_nameError = false;
    }
    else if(!isNaN(fdbk))
      {
        $('#FEEDBACK').html("*Digit not allow"); 
        feedback_nameError = false;
      }
      else if(fdbk.length<=5)
      {
        $('#FEEDBACK').html("*Please give your feedback more than 5 word"); 
        feedback_nameError = false;
      }
      else
      {
        $('#FEEDBACK').html(""); 
      }
    }
  

//suggetion
let suggetion_nameError = true;
$('#suggetion').keyup(function(){
  validateform12();
});

function validateform12(){
    let sugg = $('#suggetion').val();
    if (sugg=="")
    {  
      $('#SUGGETION').html("*Please give your suggetion");
      suggetion_nameError = false;
    }
    else if(!isNaN(sugg))
      {
        $('#SUGGETION').html("*Digit not allow"); 
        suggetion_nameError = false;
      }
      else if(sugg.length<=5)
      {
        $('#SUGGETION').html("*Please give your suggetion more than 5 word"); 
        suggetion_nameError = false;
      }
      else
      {
        $('#SUGGETION').html(""); 
      }
    }

//checkbox
let checkbox_nameError = true;
$('#suggetion').keyup(function(){
  validateform13();
});

function validateform13(){
    if($('#recommend').is(':checked') == false)
    {
      $("#CHECKBOX").html("*Please select the checkbox");
      checkbox_nameError = false;
    }
    else
    {
      $("#CHECKBOX").html("");
    }
  }

//gender
let gender_nameError = true;
$('.male1').keyup(function(){
  validateform14();
});
function validateform14(){

    let ml = $('.male1').val();
    var genValue = false;
      for(var i=0; i<ml.length;i++)
      {
        if(ml[i].checked == true)
        {
          genValue = true;   
          gender_nameError = false; 
        }
      }
      if(!genValue)
      {
          $('#MALE').html("*Please Choose gender");
      }
  }

$('#submit').click(function(){
    validateform1();
    validateform2();
    validateform3();
    validateform4();
    validateform5();
    validateform6();
    validateform7();
    validateform8();
    validateform9();
    validateform10();
    validateform11();
    validateform12();
    validateform13();
    validateform14();
    if((fnameError == true) &&
     (lnameError = true) &&
     (s1nameError = true) &&
     (s2nameError = true) &&
     (c_nameError = true) &&
     (s_nameError = true) &&
     (p_nameError = true) &&
     (phn_nameError = true) &&
     (mail_nameError = true) &&
     (select_nameError = true) &&
     (feedback_nameError = true) &&
     (suggetion_nameError = true) &&
     (checkbox_nameError = true) &&
     (gender_nameError = true)){
      return true;
    }
    else{
      return false;
    }
  })
})
