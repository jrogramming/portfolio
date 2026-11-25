document.addEventListener("DOMContentLoaded", () => {

const data = {

isam:{
    title:"ISAM Project",
    usage:"ISAM research paper and presentation",
    abilities:["R","Presentation software"],
    skills:["Research","Data analysis","Presentation development"],
    equip:"Jennifer Truong and Jordan Phan",
    description:
    "Presents an ISAM research project through a written report and companion slides. The materials pair R-based analysis with a concise visual presentation.",
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
    "An applied statistics capstone report presenting a research question, analysis, and findings. Open the PDF for the full methods and results.",
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
    "A presentation of a statistics project, organized to communicate its analysis and findings. Open the slides for the full project and supporting visuals.",
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
    "Uses real datasets to examine how waste distribution relates to colonial structures. Data cleaning, statistical analysis, and visual storytelling connect the findings to their social context.",
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
    "An interactive Shiny app for exploring penguin data. Switch variables and compare species to see how measurements and distributions differ.",
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
    "A deliberately ineffective plot created for a visualization contest. It highlights how design choices can obscure data and make a chart harder to interpret.",
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
    "A visual walkthrough of a plot redesign, showing how iterative changes improve clarity, readability, and communication of the data.",
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



const requestedProject = new URLSearchParams(window.location.search).get("project");
const initialItem = [...menuEls].find((item) => item.dataset.key === requestedProject);
if (initialItem) {
    menuEls.forEach((item) => item.classList.remove("selected"));
    initialItem.classList.add("selected");
    updatePanel(requestedProject);
} else {
    updatePanel("isam");
}


});
