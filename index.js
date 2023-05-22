const header = document.querySelector("header");
const search_button = document.getElementById("search_img");
const select_block = document.querySelector(".select_block");
const back_home_buton_container = document.querySelector(".back_home_buton_container");
const select = document.querySelectorAll("select");
const valid_search = document.getElementById("valid_search")
let search_id = "";
let search_year = "";
let search_month = "";
let all_valid_id = ['Août2022', 'Septembre2022', 'Octobre2022', 'Novembre2022', 'Decembre2022', 'Janvier2023', 'Fevrier2023', 'Mars2023', 'Avril2023', 'Mai2023']

// __________________________________________________________

// const test = getElementById("n2")
// test.click()
// __________________________________________________________


// _____________________________________________________
// FIX HEADER DURING SCROLL_____________________

window.addEventListener("scroll", () =>{
    if (window.scrollY > (header.offsetHeight + 300)){
        header.style.position = "fixed";
        header.style.top = "0px";
        header.style.width = "100%";
        header.style.boxShadow = "0 2px 3px rgb(13, 13, 13, 0.2)";
    }
    else if (window.scrollY > header.offsetHeight + 50){
        header.style.top = "-300px";
        header.style.width = "100%";
    }
    else if (window.scrollY > header.offsetHeight + 150){
        header.style.position = "fixed";
        header.style.top = "-300px";
        header.style.width = "100%";
    }
    else{
        header.style.position = "relative";
        header.style.boxShadow = "none";
        header.style.top = "0px";
    }
})

// _____________________________________________________
// CLICK TO HIDE OR NOT SELECT BLOCK_________________

search_button.addEventListener("click", () =>{ 
    if (select_block.style.right >= "70px"){
        select_block.style.right = "-700px";
        }
    else{
        select_block.style.right = "70px";
        }
    })


// _____________________________________________________
// TAKE USER SEARCH PARAMETERS (MONTH AND YEAR)_________

select.forEach((selct)=>{
    selct.addEventListener("input", (e) =>{
        let check = Number(e.target.value);
        if (isNaN(check)){
            search_month = e.target.value;
        }
        else{
            search_year = e.target.value;
        }
    })
})


// ___________________________________________________
// VALID SEARCH PARAMETER___________________

valid_search.addEventListener("click", () =>{
    search_id = search_month + search_year
    if (all_valid_id.includes(search_id, 0)){
        location.href = "#" + search_id;
    }
    else{
        alert("Désolé, cette facture n'est pas dans le régistre.")
    }
    search_id = ""
})
