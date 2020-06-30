

var imgData ;
var job_counts=0;
var school_counts=0;
var ken_counts=0;
var hobs_counts=0;
var pic=false;
//var colorTheme=(194,229,243);




var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days



function setCookie(name, value)
{
  document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

$( document ).ready(function() {
   
function getCookie(name)
{
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}


  if(field1 = getCookie("field1"))  document.getElementById("value1").value= field1;
  if(field2 = getCookie("field2")) document.getElementById("value2").value= field2;
  if(field3 = getCookie("field3"))  document.getElementById("value3").value = field3;
  if(field4 = getCookie("field4"))  document.getElementById("value33").value = field4;
  if(field5 = getCookie("field5"))  document.getElementById("value4").value = field5;
  if(field6 = getCookie("field6"))  document.getElementById("value5").value = field6;
  if(field7 = getCookie("field7"))  document.getElementById("value6").value = field7;
  if(field8 = getCookie("field8"))  document.getElementById("value7").value = field8;
  if(field9 = getCookie("field9"))  document.getElementById("value8").value = field9;
  if(field10 = getCookie("field10"))  document.getElementById("value9").value = field10;

  if(field11 = getCookie("field11"))  document.getElementById("job0").value = field10;
  if(field12 = getCookie("field12"))  document.getElementById("from0").value = field10;
  if(field13 = getCookie("field13"))  document.getElementById("to0").value = field10;
  if(field14 = getCookie("field14"))  document.getElementById("action0").value = field10;

  if(field15 = getCookie("field15"))  document.getElementById("job1").value = field10;
  if(field16 = getCookie("field16"))  document.getElementById("from1").value = field10;
  if(field17 = getCookie("field17"))  document.getElementById("to1").value = field10;
  if(field18 = getCookie("field18"))  document.getElementById("action1").value = field10;

  if(field19 = getCookie("field19"))  document.getElementById("job2").value = field10;
  if(field20 = getCookie("field20"))  document.getElementById("from2").value = field10;
  if(field21 = getCookie("field21"))  document.getElementById("to2").value = field10;
  if(field22 = getCookie("field22"))  document.getElementById("action2").value = field10;


  if(field23 = getCookie("field23"))  document.getElementById("school0").value = field10;
  if(field24 = getCookie("field24"))  document.getElementById("froms0").value = field10;
  if(field25 = getCookie("field25"))  document.getElementById("tos0").value = field10;
  if(field26 = getCookie("field26"))  document.getElementById("actions0").value = field10;

  if(field27 = getCookie("field27"))  document.getElementById("school1").value = field10;
  if(field28 = getCookie("field28"))  document.getElementById("froms1").value = field10;
  if(field29 = getCookie("field29"))  document.getElementById("tos1").value = field10;
  if(field30 = getCookie("field30"))  document.getElementById("actions1").value = field10;


  if(field31 = getCookie("field31"))  document.getElementById("ken0").value = field10;
  if(field32 = getCookie("field32"))  document.getElementById("ken1").value = field10;
  if(field33 = getCookie("field33"))  document.getElementById("actionk0").value = field10;
  if(field34 = getCookie("field34"))  document.getElementById("actionk1").value = field10;


  if(field35 = getCookie("field35"))  document.getElementById("hob0").value = field10;
  if(field36 = getCookie("field36"))  document.getElementById("hob1").value = field10;
  if(field37 = getCookie("field37"))  document.getElementById("actionh0").value = field10;
  if(field38 = getCookie("field38"))  document.getElementById("actionh1").value = field10;


});

function storeValues()  
{
  setCookie("field1", document.getElementById("value1").value);
  setCookie("field2", document.getElementById("value2").value);
  setCookie("field3", document.getElementById("value3").value);
  setCookie("field4", document.getElementById("value33").value);
  setCookie("field5", document.getElementById("value4").value);
  setCookie("field6", document.getElementById("value5").value);
  setCookie("field7", document.getElementById("value6").value);
  setCookie("field8", document.getElementById("value7").value);
  setCookie("field9", document.getElementById("value8").value);
  setCookie("field10", document.getElementById("value9").value);

  setCookie("field11", document.getElementById("job0").value);
  setCookie("field12", document.getElementById("from0").value);
  setCookie("field13", document.getElementById("to0").value);
  setCookie("field14", document.getElementById("action0").value);

  setCookie("field15", document.getElementById("job1").value);
  setCookie("field16", document.getElementById("from1").value);
  setCookie("field17", document.getElementById("to1").value);
  setCookie("field18", document.getElementById("action1").value);

  setCookie("field19", document.getElementById("job2").value);
  setCookie("field20", document.getElementById("from2").value);
  setCookie("field21", document.getElementById("to2").value);
  setCookie("field22", document.getElementById("action2").value);


  setCookie("field23", document.getElementById("school0").value);
  setCookie("field24", document.getElementById("froms0").value);
  setCookie("field25", document.getElementById("tos0").value);
  setCookie("field26", document.getElementById("actions0").value);

  setCookie("field27", document.getElementById("school1").value);
  setCookie("field28", document.getElementById("froms1").value);
  setCookie("field29", document.getElementById("tos1").value);
  setCookie("field30", document.getElementById("actions1").value);


  setCookie("field31", document.getElementById("ken0").value);
  setCookie("field32", document.getElementById("actionk0").value);

  setCookie("field33", document.getElementById("ken1").value);
  setCookie("field34", document.getElementById("actionk1").value);  



  setCookie("field35", document.getElementById("hob0").value);
  setCookie("field36", document.getElementById("actionh0").value);

  setCookie("field37", document.getElementById("hob1").value);
  setCookie("field38", document.getElementById("actionh1").value);  
  return true;
}
var imgWidth;
var imgHeight;

function loadFile(event){
    pic=true;
     imgData = $('#imgload').prop('files')[0];
     var file = event.target.files[0];
     var reader = new FileReader();
     reader.onload = function() {
        imgData = 'data:image/jpeg;base64,'+btoa(reader.result);
        //alert(reader.result.width+","+reader);
        var image = new Image();
        image.src = imgData;
        image.onload = function() {
           
           imgWidth=this.width;
           imgHeight=this.height;
        };
        
    };

    reader.readAsBinaryString(file);

}
function addJob(){
    if(job_counts>=3){
        $("#addjob").prop("disabled",true);
    }
    var divjobs= document.createElement("div");
    //divjobs.id="divjobs";
    $("#jobs").append(divjobs);

    var br = document.createElement("br");
    var span = document.createElement("span");
    var inputFeld = document.createElement("input");
    inputFeld.id="job"+job_counts;
    span.textContent="Beruf: ";
    divjobs.append(br, span, inputFeld);



    var br1 = document.createElement("br");
    var span1 = document.createElement("span");
    var inputFeld1 = document.createElement("input");
    span1.textContent="Von: ";
    inputFeld1.id="from"+job_counts;
    inputFeld1.setAttribute("maxlength","5");
    var span2 = document.createElement("span");
    var inputFeld2 = document.createElement("input");
    span2.textContent="  Bis: ";
    inputFeld2.id="to"+job_counts;
    inputFeld2.setAttribute("maxlength","5");
    divjobs.append(br1, span1, inputFeld1, span2, inputFeld2);
    
    var br3 = document.createElement("br");
    var span3 = document.createElement("span");
    var inputFeld3 = document.createElement("input");
    span3.textContent="Tätigkeit: ";
    inputFeld3.id="action"+job_counts;
    //DUMMY
    /*
    inputFeld.value="Maschinen und Anlagenführer";
    inputFeld1.value="01/18";
    inputFeld2.value="02/19";
    inputFeld3.value="Viel gearbeitet";
*/

    divjobs.append(br3, span3, inputFeld3);


    document.getElementById("job"+job_counts).placeholder="Firma";
    document.getElementById("from"+job_counts).placeholder="MM/JJ";
    document.getElementById("to"+job_counts).placeholder="MM/JJ";
    document.getElementById("action"+job_counts).placeholder="Tätigkeit";

    job_counts++;
}


function getDate(){


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    
    today = dd + '.' + mm + '.' + yyyy;

    return today

}


function addSchool(){
    if(school_counts>=3){
        $("#addschool").prop("disabled",true);
    }
    var schools= document.createElement("div");
  
    $("#school").append(schools);

    var brs = document.createElement("br");
    var spans = document.createElement("span");
    var inputFelds = document.createElement("input");
    
    inputFelds.id="school"+school_counts;
    
    spans.textContent="Schule: ";
    schools.append(brs, spans, inputFelds);
    
    var br1s = document.createElement("br");
    var span1s = document.createElement("span");
    var inputFeld1s = document.createElement("input");
    span1s.textContent="Von: ";
    inputFeld1s.id="froms"+school_counts;
    var span2s = document.createElement("span");
    var inputFeld2s = document.createElement("input");
    span2s.textContent="  Bis: ";
    inputFeld2s.id="tos"+school_counts;
    schools.append(br1s, span1s, inputFeld1s, span2s, inputFeld2s);
    
    inputFeld1s.setAttribute("maxlength","5");inputFeld2s.setAttribute("maxlength","5");

    var br3s = document.createElement("br");
    var span3s = document.createElement("span");
    var inputFeld3s = document.createElement("input");
    span3s.textContent="  ";
    inputFeld3s.id="actions"+school_counts;

    
    //DUMMY
    /*
    inputFelds.value="HS SCHULE";
    inputFeld1s.value="01/18";
    inputFeld2s.value="02/19";
    inputFeld3s.value="Hauptschule abschluss";
    */
    
    schools.append(br3s, span3s, inputFeld3s);
    
    document.getElementById("school"+school_counts).placeholder="Schule";
    document.getElementById("froms"+school_counts).placeholder="MM/JJ";
    document.getElementById("tos"+school_counts).placeholder="MM/JJ";
    document.getElementById("actions"+school_counts).placeholder="z.B. Abschluss";
    
    school_counts++;
}


function addKen(){
    if(ken_counts>=3){
        $("#kenbutton").prop("disabled",true);
    }
    var kenntnisse= document.createElement("div");
  
    $("#ken").append(kenntnisse);

    var brk = document.createElement("br");
    var spank = document.createElement("span");
    var inputFeldk = document.createElement("input");
    
    inputFeldk.id="ken"+ken_counts;
    spank.textContent="Kenntnisse: ";
    kenntnisse.append(brk, spank, inputFeldk);
    
    
    var br1k = document.createElement("br");
    var span1k = document.createElement("span");
    var inputFeld1k = document.createElement("input");
    span1k.textContent="  ";
    inputFeld1k.id="actionk"+ken_counts;

    
    //DUMMY
    /*
    inputFeldk.value="English";
    inputFeld1k.value="B1";
    */
    
    kenntnisse.append(br1k, span1k, inputFeld1k);
    
    document.getElementById("ken"+ken_counts).placeholder="z.B. Fremdsprache";
    document.getElementById("actionk"+ken_counts).placeholder="Niveau der Sprache";
    
    ken_counts++;
}



function addHobbys(){
    if(hobs_counts>=3){
        $("#addhob").prop("disabled",true);
    }
    var hobbys= document.createElement("div");
  
    $("#hobbys").append(hobbys);

    var brh = document.createElement("br");
    var spanh = document.createElement("span");
    var inputFeldh = document.createElement("input");
    
    inputFeldh.id="hob"+hobs_counts;
    spanh.textContent="Kenntnisse: ";
    hobbys.append(brh, spanh, inputFeldh);
    
    
    var br1h = document.createElement("br");
    var span1h = document.createElement("span");
    var inputFeld1h = document.createElement("input");
    span1h.textContent="  ";
    inputFeld1h.id="actionh"+hobs_counts;

    
    //DUMMY
    /*
    inputFeldh.value="Schwimmen";
    inputFeld1h.value="im wasser";
    */
    
    hobbys.append(br1h, span1h, inputFeld1h);
    
    document.getElementById("hob"+hobs_counts).placeholder="Hobbys";
    document.getElementById("actionh"+hobs_counts).placeholder="Was genau?";
    
    hobs_counts++;
}





    
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function themechange(){
    colorTheme=(hexToRgb($("#color").val()).r,hexToRgb($("#color").val()).g,hexToRgb($("#color").val()).b);
    

}

  
function funct(){



  
    var doc = new jsPDF();
    var offset=70;
    var big_font=19;
    var off_objc=8;
   
    var fs_norm=12;
    var web_off=0;
    var _offset_two=20;
    doc.setFontType("default");
    doc.setDrawColor(0);
    doc.setFillColor(194,229,243);
    doc.rect(10, 22.5, 190, 10, 'F'); // filled blue square
    //Header
    doc.setFontSize(big_font);
    doc.text(20, 30, 'Lebenslauf');

    doc.setFontSize(big_font);
    doc.text(offset, 30, $('#value1').val());
    //BG
    doc.setDrawColor(0);
    doc.setFillColor(195,195,195);
    doc.rect(10, 34, 190, 60, 'F');
  
    //Kontakt
    doc.setFontSize(fs_norm);
    doc.text(20, 40, 'Kontakt:');

    doc.setFontSize(fs_norm);
    doc.text(offset, 40, $('#value2').val());
    
    doc.setFontSize(fs_norm);
    doc.text(offset, 40+off_objc, $('#value3').val()+" "+$('#value33').val());
    //TELEFON
    doc.setFontSize(fs_norm);
    doc.text(20, 40+off_objc*2, 'Telefon:');

    doc.setFontSize(fs_norm);
    doc.text(offset, 40+off_objc*2, $('#value4').val());

    //EMAIL
    doc.setFontSize(fs_norm);
    doc.text(20, 40+off_objc*3, 'E-Mail:');

    doc.setFontSize(fs_norm);
    doc.text(offset, 40+off_objc*3, $('#value5').val());
    //WEB
    if($('#cb').is(':checked')){

        web_off=8;
        doc.setFontSize(fs_norm);
        doc.text(20, 40+off_objc*4, 'Web:');
    
        doc.setFontSize(fs_norm);
        doc.text(offset, 40+off_objc*4, $('#value6').val());
    }
    //Geburtsort und Datum
    doc.setFontSize(fs_norm);
    doc.text(20, 40+off_objc*4+web_off, 'Geburtstag/-ort:');

    doc.setFontSize(fs_norm);
    doc.text(offset, 40+off_objc*4+web_off, $('#value8').val()+'/'+$('#value7').val());

    //Familienstand
    doc.setFontSize(fs_norm);
    doc.text(20, 40+off_objc*5+web_off, 'Familienstand:');

    doc.setFontSize(fs_norm);
    doc.text(offset, 40+off_objc*5+web_off, $('#value9').val());

    //Bewerbungsbild
    if(pic){
    doc.addImage(imgData, 'JPEG', 145 , 34, 55, 60);
    }
    //Beruflicher Werdegang

    doc.setFontSize(big_font);
    doc.text(20, 40+off_objc*6+web_off+_offset_two, 'Beruflicher Werdegang');
    //Unterstrich

    doc.setDrawColor(0);
    doc.setFillColor(194,229,243);
    doc.rect(20, 42+off_objc*6+web_off+_offset_two, 180, 1, 'F');


    //Jobs
    var distance = 40+off_objc*6+web_off+_offset_two;
    var distance_beetween_elements=0;
    var distance_new_elem=17;
    for(var i=0;i<3;i++){
        doc.setFontType("default");
        doc.setFontSize(fs_norm);
        doc.text(20, distance+10+(distance_beetween_elements*distance_new_elem), $("#from"+i).val());
    
        doc.setFontSize(fs_norm);
        doc.text(39, distance+10+(distance_beetween_elements*distance_new_elem), "-");

        doc.setFontSize(fs_norm);
        doc.text(50, distance+10+(distance_beetween_elements*distance_new_elem), $("#to"+i).val());

        doc.setFontType("bold");
        doc.setFontSize(fs_norm);
        doc.text(75, distance+10+(distance_beetween_elements*distance_new_elem), $("#job"+i).val());
        doc.setFontType("default");
        doc.setFontSize(fs_norm);
        doc.text(75, distance+10+off_objc+(distance_beetween_elements*distance_new_elem), $("#action"+i).val());
        if((i+1)%8==0){
            doc.addPage();
            distance=1;
            distance_beetween_elements=0;
        }
        distance_beetween_elements++;
    }

    var new_distance=distance+10+off_objc+(distance_beetween_elements*distance_new_elem)-5;

    //Schulische Ausbildung

    doc.setFontSize(big_font);
    doc.text(20, new_distance, 'Schulische Ausbildung');
    //Unterstrich


//Schule
var distance2 = new_distance;
var distance_beetween_elements2=0;
var distance_new_elem=17;
for(var i=0;i<2;i++){
    doc.setFontType("default");
    doc.setFontSize(fs_norm);
    doc.text(20, distance2+10+(distance_beetween_elements2*distance_new_elem), $("#froms"+i).val());

    doc.setFontSize(fs_norm);
    doc.text(39, distance2+10+(distance_beetween_elements2*distance_new_elem), "-");

    doc.setFontSize(fs_norm);
    doc.text(50, distance2+10+(distance_beetween_elements2*distance_new_elem), $("#tos"+i).val());

    doc.setFontType("bold");
    doc.setFontSize(fs_norm);
    doc.text(75, distance2+10+(distance_beetween_elements2*distance_new_elem), $("#school"+i).val());
    doc.setFontType("default");
    doc.setFontSize(fs_norm);
    doc.text(75, distance2+10+off_objc+(distance_beetween_elements2*distance_new_elem), $("#actions"+i).val());
    if((i+1)%8==0){
        doc.addPage();
        distance=1;
        distance_beetween_elements2=0;
    }
    distance_beetween_elements2++;
}

    
    doc.setDrawColor(0);
    doc.setFillColor(194,229,243);
    doc.rect(20, new_distance+2, 180, 1, 'F');
    

    //NEUE SEITE
    doc.addPage();
  

    //Besondere Kenntnisse
    
    doc.setFontSize(big_font);
    doc.text(20, 30, 'Besondere Kenntnisse');
    doc.setDrawColor(0);
    doc.setFillColor(194,229,243);
    doc.rect(20, 32, 180, 1, 'F');
    

    //Kentnisse
var distance3 = 30;
var distance_beetween_elements2=0;
var distance_new_elem=17;
for(var i=0;i<2;i++){
    doc.setFontType("default");
    doc.setFontSize(fs_norm);
    
    doc.setFontType("bold");
    doc.setFontSize(fs_norm);
    doc.text(75, distance3+10+(distance_beetween_elements2*distance_new_elem), $("#ken"+i).val());
    doc.setFontType("default");
    doc.setFontSize(fs_norm);
    doc.text(75, distance3+off_objc+10+(distance_beetween_elements2*distance_new_elem), $("#actionk"+i).val());
    if((i+1)%8==0){
        doc.addPage();
        distance=1;
        distance_beetween_elements2=0;
    }
    distance_beetween_elements2++;
}


var new_distance=distance3+off_objc+10+(distance_beetween_elements2*distance_new_elem);

    //Hobbys 
    
    doc.setFontSize(big_font);
    doc.text(20, new_distance, 'Hobbys und Interessen');
    doc.setDrawColor(0);
    doc.setFillColor(194,229,243);
    doc.rect(20, new_distance+2, 180, 1, 'F');
    
    //Hobbys
    var distance3 = 2+new_distance;
    var distance_beetween_elements2=0;
    var distance_new_elem=17;
    for(var i=0;i<2;i++){
        doc.setFontType("default");
        doc.setFontSize(fs_norm);
        
        doc.setFontType("bold");
        doc.setFontSize(fs_norm);
        doc.text(75, distance3+10+(distance_beetween_elements2*distance_new_elem), $("#hob"+i).val());
        doc.setFontType("default");
        doc.setFontSize(fs_norm);
        doc.text(75, distance3+off_objc+10+(distance_beetween_elements2*distance_new_elem), $("#actionh"+i).val());
        if((i+1)%8==0){
            doc.addPage();
            distance=1;
            distance_beetween_elements2=0;
        }
        distance_beetween_elements2++;
    }



    doc.setFontSize(12);
    doc.text(20, 250, $('#value33').val()+", den "+ getDate());

    doc.text(150, 250, $('#value1').val());
    storeValues();
    doc.save('Lebenslauf.pdf');

    


    // Output as Data URI
    //doc.output('datauri');
}