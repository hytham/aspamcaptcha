// This type script that will generate a kind of captcha script
// The basic number object
var randomeNumbers = (function () {
    // The main Constructor
    function randomeNumbers(x, max, min, state) {
        this.state = state;
        if (state == "false")
            this.x = Math.floor(Math.random() * (max - min) + min);
        else
            this.x = x;
    }
    // rteurn the html reprentation of the object
    randomeNumbers.prototype.toHtml = function () {
        var re = "";
        if (this.state) {
            re = "required";
        }
        var html = "<div class='row' data-isplayresult='" + this.state + "' ><input class='w-radio-input' id='radio' type='radio' name='radio' value='Radio' data-name='Radio' " + re + " />";
        html += "<label class='w-form-label' for='radio'>    " + this.x + "  </label></div>";
        return html;
    };
    return randomeNumbers;
}());
var aspamcaptcha = (function () {
    // This constructor will take the number of selections to be displayed
    // total_selections : The total options to select from
    // wrongccsclass : The wrong css class 
    // wrongccsclass : The right css class
    // dividtarg: The div target that will host the controllers
    // The minmum range
    // The maximum range
    function aspamcaptcha(total_selections, wrongccsclass, rightcssclass, dividtarg, // The aprent div tag to ebbed 
        min, // The min number to generate for the randome number
        max // The max number to generate for the randome number
        ) {
        // TODO Add code to sore the dfault seetings and initalise the engine
        if (total_selections === void 0) { total_selections = 3; }
        if (wrongccsclass === void 0) { wrongccsclass = "wronganswer"; }
        if (rightcssclass === void 0) { rightcssclass = "rightanswer"; }
        if (dividtarg === void 0) { dividtarg = "cognetik-captcha"; }
        if (min === void 0) { min = 10; }
        if (max === void 0) { max = 100; }
        this.divtag = dividtarg; // Assign the 
        this.x = Math.floor(Math.random() * (max - min) + min);
        this.y = Math.floor(Math.random() * (max - min) + min);
        var r = this.x + this.y;
        var corans = Math.floor(Math.random() * ((total_selections - 1) + 1));
        this.randomeNumbers = [];
        for (var i = 0; i < total_selections; i++) {
            var nr = Math.floor(Math.random() * (max - min) + min);
            if (i != corans)
                this.randomeNumbers.push(new randomeNumbers(nr, max, min, false));
            else
                this.randomeNumbers.push(new randomeNumbers(r, max, min, true));
        }
    }
    ;
    // This function will Render the full 
    aspamcaptcha.prototype.Render = function () {
        var html = "<div>";
        html = "<label class='humano'> Are you human? Please check " + this.x + " + " + this.y + " ?</label>";
        for (var i = 0; i < this.randomeNumbers.length; i++) {
            html += "<div class='w-radio radio' >";
            html += this.randomeNumbers[i].toHtml();
            html += "</div>";
        }
        html += "</div>";
        var child = document.createElement("div");
        child.innerHTML = html;
        var p = document.getElementById(this.divtag);
        if (typeof (p) == "undefined" || p == null) {
        }
        else {
            p.appendChild(child);
            // this will response a clidk when a radio button is clicked
            var items = document.getElementsByClassName("w-radio-input");
            for (var x = 0; x < items.length; x++) {
                items[x].addEventListener("click", function (event) {
                    // Removeing all span nodes
                    var paras = document.getElementsByClassName('captchmsg');
                    while (paras[0]) {
                        paras[0].parentNode.removeChild(paras[0]);
                    }
                    // Get parrent node
                    var n = event.target.parentNode;
                    var param = n.getAttribute('data-isplayresult');
                    var ch = document.createElement("span");
                    ch.setAttribute("class", "captchmsg");
                    if (param == "false") {
                        event.target.checked = false;
                        ch.setAttribute("style", "color:red");
                        ch.innerText = "    wrong answer    ";
                    }
                    else {
                        ch.setAttribute("style", "color:green");
                        ch.innerText = "    correct answer   ";
                    }
                    n.appendChild(ch);
                });
            }
        }
    };
    return aspamcaptcha;
}());
(function () {
    new aspamcaptcha().Render();
})();
//# sourceMappingURL=aspamcaptcha.js.map