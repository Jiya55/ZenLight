var state = {
    i:0,
    j:0,
    k:0,
}

function nextcolor(){
    var color = document.getElementById("color_cnd");
    if(state.i===0){
        color.setAttribute("class", "color_cnd_1");
        state.i++;
    }else if(state.i===1){
        color.setAttribute("class", "color_cnd_2");
        state.i++;
    }else if(state.i===2){
        color.setAttribute("class", "color_cnd_3");
        state.i++;
    }
}
function nextcnd(){
    var candle = document.getElementById("candle");
    var flame = document.getElementById("flame");
    if(state.j===0){
        candle.setAttribute("class", "shape_1");
        flame.setAttribute("class", "light_1");
        state.j++;
    }else if(state.j===1){
        candle.setAttribute("class", "shape_2");
        flame.setAttribute("class", "light_2");
        state.j++;
    }
}
function nextptn(){
    var ptn = document.getElementById("ptn_cnd");
    if(state.k===0){
        ptn.setAttribute("class", "ptn_cnd_1");
        state.k++;
    }else if(state.k===1){
        color.setAttribute("class", "ptn_cnd_2");
        state.k++;
    }else if(state.k===2){
        color.setAttribute("class", "ptn_cnd_3");
        state.k++;
    }
}