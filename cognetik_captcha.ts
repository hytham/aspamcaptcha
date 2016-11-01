// This type script that will generate a kind of captcha script
// The basic number object
class randomeNumbers{
    x:number;
    y:number;
    r:number; // The result
    css:string; // The answer css color
    ans:string; // The answer string
    
    // The main Constructor
    constructor(max,min,css,ans){
        this.css=css;
        this.ans=ans;
        this.x=Math.random()*(max-min)+min; // generate a random number for x
        this.y=Math.random()*(max-min)+min; // generate a randome number for y
        this.r=this.x+this.y; 
    }
    // rteurn the html reprentation of the object
    toHtml():string{

        return "<div class='row'><div class='md-col-6'></div>"+this.x +"+"+this.y+"<div class='md-col-6'><span class='"+this.css+"'>"+this.ans+"</span></div></div>";
    }

}
class cognetik_captcha{

    
    x:number; // The left side of the equestion
    y:number; // The right side of the equestion
    r:number; // The result of the equestion
    wcss:string;// The wrong css class
    rcss:string;// The right css class
    randomeNumbers:randomeNumbers[]; // Array of all the wrndome objects
    
    // This constructor will take the number of selections to be displayed
    // total_selections : The total options to select from
    // wrongccsclass : The wrong css class 
    // wrongccsclass : The right css class
    // dividtarg: The div target that will host the controllers
    constructor(
        total_selections:number,
        wrongccsclass:string,
        rightcssclass:string,
        dividtarg:string, // The aprent div tag to ebbed 
        min:number, // The min number to generate for the randome number
        max:number // The max number to generate for the randome number
        ){
        // TODO Add code to sore the dfault seetings and initalise the engine
        let css="wrong-message";
        let ans="you are a robot";
        this.randomeNumbers=new randomeNumbers[total_selections];
        for(var i=1;i<total_selections;i++)
             this.randomeNumbers[i]=new randomeNumbers(min,max,css,ans); 
        
        
    }
    // This function will Render the full 
    Render():void{

    }
}
