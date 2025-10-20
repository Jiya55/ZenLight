var state = {
    candle_type:1,
    cnd_color:0,
    pattern:0,
}
function set_shape(id) {
    var candle = document.getElementById("candle");
    var flame = document.getElementById("flame");
    if(id==1){
        candle.setAttribute("class", "shape_1");
        flame.setAttribute("class", "light_1");
        state.candle_type=1;
    }
    if(id==2){
        candle.setAttribute("class", "shape_2");
        flame.setAttribute("class", "light_2");
        state.candle_type=2;
    }
}
function set_color(id) {
    var color = document.getElementById("color_cnd");
    if (state.candle_type===1){
        if (id==1){
            color.setAttribute("class", "color_cnd_1");
            state.cnd_color = 1;
        }
        if (id==2){
            color.setAttribute("class", "color_cnd_2");
            state.cnd_color = 2;
        }
        if (id==3){
            color.setAttribute("class", "color_cnd_3");
            state.cnd_color = 3;
        }
        if (id==4){
            color.setAttribute("class", "color_cnd_4");
            state.cnd_color = 4;
        }
        if (id==5){
            color.setAttribute("class", "color_cnd_5");
            state.cnd_color = 5;
        }
        if (id==6){
            color.setAttribute("class", "color_cnd_6");
            state.cnd_color = 6;
        }
    }
    if (state.candle_type===2){
        if (id==1){
            color.setAttribute("class", "shp_2_color_cnd_1");
            state.cnd_color = 1;
        }
        if (id==2){
            color.setAttribute("class", "shp_2_color_cnd_2");
            state.cnd_color = 2;
        }
        if (id==3){
            color.setAttribute("class", "shp_2_color_cnd_3");
            state.cnd_color = 3;
        }
        if (id==4){
            color.setAttribute("class", "shp_2_color_cnd_4");
            state.cnd_color = 4;
        }
        if (id==5){
            color.setAttribute("class", "shp_2_color_cnd_5");
            state.cnd_color = 5;
        }
        if (id==6){
            color.setAttribute("class", "shp_2_color_cnd_6");
            state.cnd_color = 6;
        }
    }
}
function set_pattern(id) {
    var ptn = document.getElementById("ptn_cnd");
    if (state.candle_type===1) {
        if (id==1){
        ptn.setAttribute("class", "ptn_cnd_1");
        state.pattern = 1;
        }
        if (id==2){
            ptn.setAttribute("class", "ptn_cnd_2");
            state.pattern = 2;
        }
        if (id==3){
            ptn.setAttribute("class", "ptn_cnd_3");
            state.pattern = 3;
        }
    }
    if (state.candle_type===2) {
        if (id==1){
        ptn.setAttribute("class", "shp_2_ptn_cnd_1");
        state.pattern = 1;
        }
        if (id==2){
            ptn.setAttribute("class", "shp_2_ptn_cnd_2");
            state.pattern = 2;
        }
        if (id==3){
            ptn.setAttribute("class", "shp_2_ptn_cnd_3");
            state.pattern = 3;
        }
    }
}
