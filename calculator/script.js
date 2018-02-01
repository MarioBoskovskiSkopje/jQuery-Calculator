function calculator() {
    // mnogu polesno ova ke napravas so jQuery
    // var buttons = document.getElementsByTagName("button");
    var buttons = $("button");
    var result = $(".screenText");
    var clear = $(".clear");
    var btnVal = this.innerHTML;

    // ova ke ti zakomplicira mnogu raboti taka da ne bi ti preporacuval ova da go pravas 
    // for (var i = 0; i < buttons.length; i++) {

    //     if (buttons[i].innerHTML === '=') {
    //         buttons[i].addEventListener("click", calculate(i));
    //     } else {
    //         buttons[i].addEventListener("click",function(event){
    //             addValue(i, event)
    //         });
    //     }

    // };

    buttons.click(function(e){
        var clickedButton = e.target;
        var resultPreviusValue = result.text();
        if($(clickedButton).hasClass("keys")){ // mnogu poubava sintaksa i razbirliva
            result.text(resultPreviusValue + $(clickedButton).text());
        }
        else if($(clickedButton).hasClass("operator")){

            var clickedButtonValue =  $(clickedButton).text();

            if(lastCharOperator(clickedButtonValue)){
                result.text(resultPreviusValue + $(clickedButton).text());  
            }

        }
        else if($(clickedButton).hasClass("evaluate")){
            var calculated = eval(result.text());
            result.text(calculated);
        }
    })

    // function addValue(i, e) {
    //     var valueOfClickedButton = e.target.textContent;
    //     return function () { // i ova ke ti komplicira mnogu raboti, so ova ne mozes da pristapis do samoto kopce sto e stisnato 
    //         if(lastCharOperator(valueOfClickedButton)){
    //             if (valueOfClickedButton == "÷") {
    //                 result.innerHTML += '/';
    //             } else if (valueOfClickedButton == "x") {
    //                 result.innerHTML += '*';
    //             } else {
    //                 result.innerHTML += valueOfClickedButton;
    //             }
    //         }
            
    //     };
    // }

    // function calculate(i) {
    //     return function () {
    //         result.innerHTML = eval(result.innerHTML);
    //     };
    // }

    // istata funkcija vo jQuery
    // clear.onclick = function () {
    //     result.innerHTML = '';
    // };

    clear.click(function(){
        result.html("");
    })

    function lastCharOperator(val){
        var sizeOfInput = $(result).text().length;
        var lastChar = $(result).text()[sizeOfInput - 1];

        if(lastChar == '÷' || lastChar == '/' || lastChar ==  '*'|| lastChar ==  '+' || lastChar ==  '-' ||lastChar == undefined ){
            return false;
        }
        return true;
    }
}
calculator();