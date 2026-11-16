document.addEventListener("DOMContentLoaded", () => {

const data = {

isam:{
    title:"ISAM Project",
    usage:"ISAM research paper and presentation",
    abilities:["R","Presentation software"],
    skills:["Research","Data analysis","Presentation development"],
    equip:"Jennifer Truong and Jordan Phan",
    description:
    "ISAM project materials including paper and presentation slides.",
    link:"assets/Phan_Truong.pdf",
    embed:"assets/Phan_Truong.pdf",
    extraLinks:[
        {
            href:"assets/presentation.pdf",
            label:"Open Presentation"
        }
    ]
},

capstone:{
    title:"Statistics Capstone Project",
    usage:"Statistics capstone research project",
    abilities:["Statistics","Research"],
    skills:["Statistical analysis","Research communication"],
    equip:"Jennifer Truong",
    description:
    "A statistics capstone project. Open the PDF to read the full project.",
    link:"assets/STATCapstone.pdf",
    embed:"assets/STATCapstone.pdf"
},

catalyst:{
    title:"Catalyst Presentation",
    usage:"Statistics research presentation",
    abilities:["Statistics","Presentation software"],
    skills:["Research communication","Presentation development"],
    equip:"Jennifer Truong",
    description:
    "A statistics presentation. Open the PDF to view the slides.",
    link:"assets/Catalyst_Presentation.pdf",
    embed:"assets/Catalyst_Presentation.pdf"
},

waste:{
    title:"Waste Colonialism RPubs Paper",
    usage:"Applied research storytelling with real data",
    abilities:["R","ggplot2","RPubs"],
    skills:["Data cleaning","Statistical analysis","Data visualization","Research communication"],
    equip:"Jennifer Truong",
    description:
    "This project analyzes patterns of waste distribution in relation to colonial structures using real datasets. I cleaned and organized messy data, created clear visuals, and connected statistical results to social context. The work blends technical analysis with narrative explanation so readers can understand both the numbers and their implications.",
    link:"https://rpubs.com/dszCSadssad/1252371",
    embed:""
},


penguin:{
    title:"Penguin Visualizer",
    usage:"Interactive data exploration tool",
    abilities:["R","Shiny"],
    skills:["Interactive data exploration","Data filtering","Data visualization"],
    equip:"Jennifer Truong (integration and project enhancement)",
    description:
    "This interactive Shiny app lets users explore penguin data dynamically. Viewers can switch variables and compare species in real time.",
    link:"https://serega29rus.shinyapps.io/PengApp/",
    embed:"https://serega29rus.shinyapps.io/PengApp/"
},


worst:{
    title:"Worst Plot Contest Entry",
    usage:"Creative statistical visualization challenge",
    abilities:["R","ggplot2"],
    skills:["Visual experimentation","Design critique","Statistical communication"],
    equip:"Jennifer Truong",
    description:
    "This project intentionally creates a bad plot for a data visualization contest to explore what makes graphics ineffective.",
    link:"assets/ohmylord.pdf",
    embed:"assets/ohmylord.pdf"
},


revision:{
    title:"Plot Revision Process",
    usage:"Step-by-step plot improvement walkthrough",
    abilities:["R","ggplot2"],
    skills:["Iterative design","Critique-based refinement","Visual communication"],
    equip:"Jennifer Truong",
    description:
    "This project documents how a messy initial plot evolves into a clearer one through iterative design changes.",
    link:"assets/bestplot.html",
    embed:"assets/bestplot.html"
},


};



const menuEls=document.querySelectorAll("#menu-list li");


const title=document.getElementById("panel-title");
const usage=document.getElementById("usage");
const abilities=document.getElementById("abilities");
const skills=document.getElementById("skills");
const equip=document.getElementById("equip");
const description=document.getElementById("description");

const primaryLink=document.getElementById("primary-link");
const extraLinks=document.getElementById("extra-links");

const embedToggle=document.getElementById("embed-toggle");
const embedArea=document.getElementById("embed-area");
const embedFrame=document.getElementById("embed-frame");


function updatePanel(key){

    const item=data[key];


    title.textContent=item.title;

    usage.textContent=item.usage;

    abilities.textContent=item.abilities.join(" • ");

    skills.textContent=(item.skills || []).join(" • ");

    equip.textContent=item.equip;

    description.textContent=item.description;



    primaryLink.href=item.link;


    if(item.link.endsWith(".pdf")){
        primaryLink.textContent="Open PDF";
    }
    else if(item.link.includes("shinyapps")){
        primaryLink.textContent="Open App";
    }
    else{
        primaryLink.textContent="Open";
    }



    extraLinks.innerHTML="";


    if(item.extraLinks){

        item.extraLinks.forEach(x=>{

            const a=document.createElement("a");

            a.href=x.href;

            a.target="_blank";

            a.className="rpubs-button small";

            a.textContent=x.label;


            extraLinks.appendChild(a);

        });

    }



    embedToggle.dataset.embed=item.embed || "";


    if(item.embed){

        embedToggle.style.display="inline-block";

    }else{

        embedToggle.style.display="none";

    }


    embedArea.hidden=true;

    embedFrame.src="";

    embedToggle.textContent="View Embed";

}




menuEls.forEach(item=>{

    item.addEventListener("click",()=>{

        menuEls.forEach(x=>x.classList.remove("selected"));

        item.classList.add("selected");

        updatePanel(item.dataset.key);

    });

});



embedToggle.addEventListener("click",()=>{

    const url=embedToggle.dataset.embed;


    if(!url) return;


    if(embedArea.hidden){

        embedFrame.src=url;

        embedArea.hidden=false;

        embedToggle.textContent="Hide Embed";

    }

    else{

        embedArea.hidden=true;

        embedFrame.src="";

        embedToggle.textContent="View Embed";

    }

});



updatePanel("isam");


});
