document.addEventListener("DOMContentLoaded", function() {
    let resultField = document.querySelector("#result");
    
    function solve() {
        let value = resultField.value;
        value = eval(value);
        resultField.value = value;
    }

    document.addEventListener("keydown", function(e) {
        const key = e.key;
        const shiftKey = e.shiftKey;
        const ctrlKey = e.ctrlKey;
        
        if(key!=="Enter" && key!=="Backspace" && key!=="Shift" && key!=="Control") {
            resultField.value += key;
        }
        else if(key==="Backspace") {
            resultField.value = resultField.value.slice(0, -1);
        }
        else if(shiftKey && key==="5") {
            resultField.value += '%';
        }
        else if(ctrlKey && key==="Enter") {
            resultField.value = "";
        }
        else if(key==="Enter") {
            solve();
        }
    });

    for(let i=0; i<20; i++) {
        document.querySelectorAll(".btn")[i].addEventListener("click", function(e) {
            const val = e.target.value;
            if(val!=='C' && val!=='←' && val!=='=') {
                resultField.value += val;
            }
            else if(val==='C') {
                resultField.value = "";
            }
            else if(val==='←') {
                resultField.value = resultField.value.slice(0, -1);
            }
            else if(val==='=') {
                solve();
            }
        });
    }
});