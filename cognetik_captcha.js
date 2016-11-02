// This type script that will generate a kind of captcha script
// The basic number object
var randomeNumbers = (function () {
    // The main Constructor
    function randomeNumbers(max, min, css, ans) {
        this.css = css;
        this.ans = ans;
        this.x = Math.random() * (max - min) + min; // generate a random number for x
        this.y = Math.random() * (max - min) + min; // generate a randome number for y
        this.r = this.x + this.y;
    }
    // rteurn the html reprentation of the object
    randomeNumbers.prototype.toHtml = function () {
        return "<div class='row'><div class='md-col-6'></div>" + this.x + "+" + this.y + "<div class='md-col-6'><span class='" + this.css + "'>" + this.ans + "</span></div></div>";
    };
    return randomeNumbers;
}());
var cognetik_captcha = (function () {
    // This constructor will take the number of selections to be displayed
    // total_selections : The total options to select from
    // wrongccsclass : The wrong css class 
    // wrongccsclass : The right css class
    // dividtarg: The div target that will host the controllers
    // The minmum range
    // The maximum range
    function cognetik_captcha(total_selections, wrongccsclass, rightcssclass, dividtarg, // The aprent div tag to ebbed 
        min, // The min number to generate for the randome number
        max // The max number to generate for the randome number
        ) {
        // TODO Add code to sore the dfault seetings and initalise the engine
        if (total_selections === void 0) { total_selections = 3; }
        if (wrongccsclass === void 0) { wrongccsclass = "wronganswer"; }
        if (rightcssclass === void 0) { rightcssclass = "rightanswer"; }
        if (dividtarg === void 0) { dividtarg = "cognetik-captcha"; }
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 3; }
        this.divtag = dividtarg; // Assign the 
        var css = "wrong-message";
        var ans = "you are a robot";
        this.randomeNumbers = new randomeNumbers[total_selections];
        for (var i = 1; i < total_selections; i++)
            this.randomeNumbers[i] = new randomeNumbers(min, max, css, ans);
    }
    ;
    // This function will Render the full 
    cognetik_captcha.prototype.Render = function () {
        for (var i = 1; i < this.randomeNumbers.length; i++) {
            this.html += this.randomeNumbers[i].toHtml();
        }
        document.getElementById(this.divtag).innerHTML = this.html;
    };
    return cognetik_captcha;
}());
//# sourceMappingURL=cognetik_captcha.js.map