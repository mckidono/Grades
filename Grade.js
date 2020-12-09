$(document).ready(function () {
    
    $("#store").click(store);
    $("#outputb").click(output);

    
    $("#name").click(sortName);

    
    $("#percent").click(sortPercent);

    var students={
        firstname:[],
        lastname:[],
        percents:[],
        grades:[]
    }


function store()
{
    
    var fName= $("#firstName").val();
    var lName= $("#lastName").val();
    var points= $("#pointEarned").val();
    var pointsPoss= $("#pointsPoss").val();
    var percent= (points/pointsPoss)*100;
    var grade;
    
    

    if (percent>=90){
        grade="A";
    }
    else if(percent>=80){
        grade="B";
    }
    else if(percent>=70){
        grade="C";
    }
    else if(percent>=60){
        grade="D";
    }
    else{
        grade="F";
    }
     students.firstname.push(fName);
     students.lastname.push(lName);
     students.percents.push(percent);
     students.grades.push(grade);

}
function sortName(){
    for (var i = 0; i < students.firstname.length; i++) {
    if(students.firstname[i] < students.firstname[i]){
        return -1;
    }else if(students.firstname[i]>students.firstname[i]){
        return 1;
    }else{
        return 0;
    }}
}
function sortPercent(a,b){
    if(a.percents < b.percents){
            return -1;
    }else if(a.percents>b.percents){
        return 1;
    }else{
        return 0;
     }}


function output(){
    $("#output").empty();
    for (var i = 0; i < students.firstname.length; i++) {
        
        
        
        var output = ("Name: "+students.firstname[i]+" "+students.lastname[i]+" Grade: "+ students.grades[i]+" Percent: "+ students.percents[i]+"%"+"<br>");
       
        $("#output").append(output);
        
    }
}

});
