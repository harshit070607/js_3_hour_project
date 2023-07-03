var exp_amt = document.getElementById("input1");
var exp_res = document.getElementById("input2");
var dropbutton = document.getElementById("dropdownMenuButton");
var showItems = document.getElementById('detal');


//it is used to set the name of dropdown button when we click on elements present in drop-down menu
var selectitem = document.querySelectorAll(".dropdown-item");
selectitem.forEach(function(items){
    items.addEventListener('click',function(){
          dropbutton.textContent = items.textContent;
    })
})


// when we submit then it will used to show the output on screen
document.getElementById("submittext").addEventListener('click',function(e){
    e.preventDefault();

    var li2 = document.createElement('li');
    li2.className="items";
    li2.appendChild(document.createTextNode(`${exp_amt.value} - ${exp_res.value} - ${dropbutton.textContent}`));
    showItems.appendChild(li2);

    exp_amt.value = "";
    exp_res.value = "";
    dropbutton.textContent="Expense Category";


    var dltbtn = document.createElement('button');
    dltbtn.className='btn btn-danger btn-sm mx-2 my-2';
    var texbtn = document.createTextNode("Delete");
    dltbtn.appendChild(texbtn);
    li2.appendChild(dltbtn);

    var editbtn = document.createElement('button');
    editbtn.className='btn btn-primary btn-sm mx-2 my-2';
    var textonbtn = document.createTextNode("Edit");
    editbtn.appendChild(textonbtn);
    li2.appendChild(editbtn);

    dltbtn.onclick=(e)=>
    {
        var rem = e.target.parentElement;
        detal.removeChild(rem);
        alert("Deleted Successfully");
        
    }

    editbtn.onclick=(e)=>
    {
        if(exp_amt.value=="" && exp_res.value=="" && dropbutton.textContent=="Expense Category" )
        {
        e.preventDefault();
        console.log(e.target.parentElement.firstChild.textContent);

        var listItem = e.target.parentElement;
    var listItemText = listItem.firstChild.textContent.split(' - ');

    // Set the values of input1, input2, and dropdownMenuButton based on the clicked list item
    exp_amt.value = listItemText[0].trim();
    exp_res.value = listItemText[1].trim();
    dropbutton.textContent = listItemText[2].trim();

    detal.removeChild(e.target.parentElement);
        }
        else
        {
            alert("Firstly clear all inputs");
        }

    }
    
});