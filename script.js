 function aztikla(incomId,incomNot){
        document.getElementById(incomNot).style.color='#aa1212'
        document.getElementById(incomId).value=document.getElementById(incomId).value-1;
        document.getElementById(incomNot).innerText=document.getElementById(incomId).value;
    }

function coktikla(incomId,incomNot){
    document.getElementById(incomNot).style.color='#008000'
    document.getElementById(incomId).value=document.getElementById(incomId).value+1;
    document.getElementById(incomNot).innerText=document.getElementById(incomId).value;
}
const colorPicker1 = document.getElementById('renk1');
const customMeter1 = document.getElementById('bulent');
        
    colorPicker1.addEventListener('input', function() 
    {
        const selectedColor1 = colorPicker1.value;
        customMeter1.style.background = selectedColor1;
        customMeter1.style.setProperty('--webkit-meter-bar-background', selectedColor1);
    })

const colorPicker2 = document.getElementById('renk2');
const customMeter2 = document.getElementById('umit');
        
    colorPicker2.addEventListener('input', function() 
    {
        const selectedColor2 = colorPicker2.value;
        customMeter2.style.background = selectedColor2;
        customMeter2.style.setProperty('--webkit-meter-bar-background', selectedColor2);
    });
const colorPicker3 = document.getElementById('renk3');
const customMeter3 = document.getElementById('fatih');
        
    colorPicker3.addEventListener('input', function() 
    {
        const selectedColor3 = colorPicker3.value;
        customMeter3.style.background = selectedColor3;
        customMeter3.style.setProperty('--webkit-meter-bar-background', selectedColor3);
    })
const colorPicker4 = document.getElementById('renk4');
const customMeter4 = document.getElementById('selcuk');
        
    colorPicker4.addEventListener('input', function() 
    {
        const selectedColor4 = colorPicker4.value;
        customMeter4.style.background = selectedColor4;
        customMeter4.style.setProperty('--webkit-meter-bar-background', selectedColor4);
    })
  