let currentinput = " ";
let result=0;

function append(value) {

    currentinput += value;
    document.getElementById("inputarea").value = currentinput;
}

function clearall()
 {
    currentinput = "";
    document.getElementById("inputarea").value= "";
}


function esit()
{
    try
    {
        result=eval(currentinput);
        document.getElementById("inputarea").value=result;
        currentinput=result.toString();

    }
    catch(error)
    {
        document.getElementById("inputarea").value="Hata"
    }

}

