var score = parseInt(0);
var formNum = parseInt(0);
var ansBlock;
var correctAns = [1,3,1,0,0,1,2,0,3,3];
var ans = [];
var ques = [];

function start(){
    document.getElementById("msg").style.display="none";
    document.getElementById("startBtn").style.display="none";
    document.getElementById("headImg").src="img/que.gif";
    document.getElementById("question0").style.display="block";
}

function check(btnId){
    ques=btnId;
    for(var i=0; i<4; i++){
        if(document.forms[btnId].elements[i].checked){
            ans[btnId]=i;
        }
    }
    ansBlock="ansBlock"+btnId;
    if(ans[btnId]==correctAns[btnId]){
        score++;
        document.getElementById("headImg").src="img/tick.gif";
        document.getElementById(ansBlock).style.visibility="visible";
        document.getElementById(ansBlock).innerHTML="Correct...";      // original text can be changed using the innerHTML command
    }
    else{
        document.getElementById("headImg").src="img/cross.gif";
        document.getElementById(ansBlock).style.visibility="visible";
        document.getElementById(ansBlock).innerHTML="Wrong!!!";
    }
    document.getElementById(btnId).value="Next";
    document.getElementById(btnId).setAttribute("onclick","next()");
}

function next(){
    document.getElementById("headImg").src="img/que.gif";
    var oldQues="question"+ques;
    document.getElementById(ansBlock).style.visibility="hidden";
    if(ques==9)                                                     // id of last question
    {
        document.getElementById(oldQues).style.display="none";
        document.getElementById("headImg").src="img/star.gif";
        finalScore();
    }
    else{
        document.getElementById(oldQues).style.display="none";
        ques++;
        var newQues="question"+ques;
        document.getElementById(newQues).style.display="block";
    }
}

function finalScore(){
    document.getElementById("msg").style.display="block";
    document.getElementById("msg").innerHTML="You scored "+score+"/10";      // don't forget to mention the total number of questions
}
