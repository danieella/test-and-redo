// Variables
// 1. input
// 2. calculation

// For Calculating your tip!
function CalculateTip() {
    // Get array from tip buttons, then for each button run function(button)
    var input2 = Array.from(document.getElementsByClassName('tip-button')).forEach(function(button) {
        // for every button that's clicked run through a function where you have two variables the input (the amount), then the calculation which would be converting the button strings to numbers and multiplying by the input
        button.addEventListener('click', function() {
            var input = document.getElementById('amount').value;
            var calculation =  input * (Number(button.value) / 100);
            console.log(calculation); // make sure to log it!

            // tip outputs onto the page!
            const tip = document.getElementById('tip_amount');
            tip.textContent = 'tip: ' + '$' + calculation;
            
            // total amount outputs onto the page!
            const total = document.getElementById('total_amount');
            // make sure to convert the amount to a number
            total.textContent = 'total: ' + '$' + (calculation + Number(document.getElementById('amount').value));
            return calculation;
        });
    });
    
    //custom input
            // same idea except for the custom button using custom_tip variable 
            const custom_btn = document.getElementById('custom_tip').addEventListener('click', function() {
                var input = document.getElementById('amount').value;
                var custom_cal = input * (Number(document.getElementById('custom_amount').value) / 100);
                console.log(custom_cal);

                // to output the total and the tip
                const total = document.getElementById('total_amount');
                total.textContent = 'total: ' + '$' + (custom_cal + Number(document.getElementById('amount').value));
                const tip = document.getElementById('tip_amount');
                tip.textContent = 'tip: ' + '$' + custom_cal;
                return custom_cal;
            });
};

// make sure to add console.log(CalculateTip()) so that it runs!
console.log(CalculateTip());

