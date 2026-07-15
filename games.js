document.addEventListener("DOMContentLoaded", () => {

    const data = {

        twilight: {

            title: "Twilight Tower",

            usage: "Classic adventure puzzle-combat experience",

            abilities: [
                "Unity",
                "C# scripting",
                "Combat design",
                "Character art",
                "Background art"
            ],

            equip:
            "Credits: Mira Khan (Puzzle Room, Puzzle, Visual Novel & SFX, Game Progression); Jennifer Truong (Combat Room, Story, Character Art, Background Art); Samantha Verdi (Combat & SFX, Character Sprites & Animations, Music); Saniyah Smith (Combat)",


            id:
            "Playable in browser (link on portfolio)",


            description:
            "Twilight Tower is a hybrid adventure and fairy-tale-style game where you solve puzzles and fight through a tower to achieve narrative goals. I was responsible for combat rooms, the story, and creating character and environment artwork. The game supports both PC and mobile browsers, with controls optimized for mouse play. It blends narrative exploration with strategic encounters in a cohesive experience.",


            link:
            "https://m1ra-k.github.io/twilight-tower/",


            embed:
            "https://m1ra-k.github.io/twilight-tower/",


            embedRatio:100

        },




        fatal: {

            title:"Fatal Flower",


            usage:
            "2D narrative mystery RPG",


            abilities:[
                "Unity",
                "Collaborative game development"
            ],


            equip:
            "Team — programming/design, story, art, and music roles",


            id:
            "itch.io play link (on portfolio)",


            description:
            "Fatal Flower is a narrative-driven murder mystery set in ancient Asia, following two protagonists as they untangle interconnected cases. The project features multiple gameplay modes, original music, and a large dialogue corpus. I contributed as part of the team that brought this world and its mechanics to life in Unity.",


            link:
            "https://kanmiii.itch.io/fatal-flower",


            embed:"",


            embedRatio:56.25,


            gallery:[
                "assets/ff1.png",
                "assets/ff2.png",
                "assets/ffmap.png"
            ]

        },





        office: {


            title:"Office Escape",


            usage:
            "PICO-8 puzzle challenge",


            abilities:[
                "PICO-8",
                "Sprite art",
                "Music composition",
                "Game logic"
            ],


            equip:
            "Sole creator",


            id:
            "Playable browser game",


            description:
            "Office Escape is a retro-inspired puzzle game developed entirely in PICO-8, where the player navigates office spaces and solves puzzles to escape.",


            link:
            "./assets/officeescape.html",


            embed:
            "./assets/officeescape.html",


            embedRatio:75

        }


    };







    const menu =
    Array.from(document.querySelectorAll("#game-menu li"));



    const panel = {


        title:
        document.getElementById("game-title"),


        usage:
        document.getElementById("game-usage"),


        abilities:
        document.getElementById("game-abilities"),


        equip:
        document.getElementById("game-equip"),


        id:
        document.getElementById("game-id"),


        desc:
        document.getElementById("game-desc"),


        gallery:
        document.getElementById("game-gallery"),


        link:
        document.getElementById("game-link"),


        extra:
        document.getElementById("game-extra"),


        embedToggle:
        document.getElementById("game-embed-toggle"),


        embedArea:
        document.getElementById("game-embed"),


        iframe:
        document.getElementById("game-iframe")

    };






    let current = 0;








    function select(index){


        if(index < 0)
            index = 0;


        if(index >= menu.length)
            index = menu.length - 1;



        menu.forEach((item,i)=>{

            item.classList.toggle(
                "selected",
                i === index
            );

        });



        current=index;


        update(
            menu[index].dataset.key
        );

    }








    function update(key){


        const item=data[key];



        panel.title.textContent=item.title;


        panel.usage.textContent=item.usage;


        panel.abilities.textContent =
        item.abilities.join(" • ");




        if(item.equip.startsWith("Credits:")){

            panel.equip.innerHTML =
            item.equip.replace(
                /;\s*/g,
                "<br><br>"
            );

        }

        else{

            panel.equip.textContent =
            item.equip;

        }




        panel.id.textContent=item.id;


        panel.desc.textContent=item.description;




        panel.link.href =
        item.link || "#";



        if(item.link.includes("itch.io")){

            panel.link.textContent =
            "Play on itch.io";

        }

        else if(item.link.endsWith(".html")){

            panel.link.textContent =
            "Open Game";

        }

        else{

            panel.link.textContent =
            "Open";

        }





        panel.extra.innerHTML="";






        if(item.gallery){


            panel.gallery.hidden=false;


            panel.gallery.innerHTML =
            item.gallery.map(src=>`

                <img 
                src="${src}"
                alt="${item.title} screenshot">

            `).join("");

        }


        else{


            panel.gallery.hidden=true;


            panel.gallery.innerHTML="";

        }







        if(item.embed){


            panel.embedToggle.style.display =
            "inline-block";


            panel.embedToggle.dataset.embed =
            item.embed;


            panel.embedToggle.dataset.ratio =
            item.embedRatio || 56.25;


        }


        else{


            panel.embedToggle.style.display =
            "none";


            panel.embedArea.hidden=true;


            panel.iframe.src="";

        }






        panel.embedArea.hidden=true;


        panel.iframe.src="";


        panel.embedToggle.textContent =
        "View Embed";


    }









    function toggleEmbed(){


        const url =
        panel.embedToggle.dataset.embed;



        if(!url)
            return;





        const wrap =
        panel.embedArea.querySelector(
            ".frame-wrap"
        );





        if(!panel.embedArea.hidden){


            panel.embedArea.hidden=true;


            panel.iframe.src="";


            panel.embedToggle.textContent =
            "View Embed";


        }


        else{


            const ratio =
            panel.embedToggle.dataset.ratio || 56.25;



            if(wrap){

                wrap.style.paddingTop =
                ratio + "%";

            }



            panel.iframe.src=url;



            panel.embedArea.hidden=false;



            panel.embedToggle.textContent =
            "Hide Embed";


        }


    }









    menu.forEach((item,index)=>{


        item.addEventListener(
            "click",
            ()=>select(index)
        );


    });







    document.addEventListener(
        "keydown",
        (event)=>{


            if(
                ["ArrowUp","ArrowDown","Enter"]
                .includes(event.key)
            ){

                event.preventDefault();

            }



            if(event.key==="ArrowUp"){

                select(current-1);

            }


            if(event.key==="ArrowDown"){

                select(current+1);

            }


            if(event.key==="Enter"){

                toggleEmbed();

            }


        }

    );







    panel.embedToggle.addEventListener(
        "click",
        toggleEmbed
    );






    select(0);



});