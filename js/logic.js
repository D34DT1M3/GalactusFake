var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            var juego = {
                x: canvas.width / 2,
                y: canvas.height / 3,
                niveles: 1,
                primero: true,
                segundo: false,
                velocidad_m: 1,
                velocidad_me: -1,
                llegue_suelo: true,
                llegue_suelo2: true,
                cambiar: false,
                uno: false,       
                dos: true,
                uno2: false,
                dos2: true,
                velocidad: 3,
                derecha: true,
                izquierda: false,
                derecha2: true,
                izquierda2: false,
                nivel: 0,
                nivel_d: 11,
                pX: 100,
                pY: 400,
                pW: 50,
                pH: 50,
                nd: 0,
                suma: 0,
                vidas: 3,
                random: Math.floor(Math.random()* 24 ),
                random_e: Math.floor(Math.random()* 24 ),
                random2: Math.floor(Math.random()* 500),
                random2_e: Math.floor(Math.random()* 500),
                llegue_suelo2: true,
                score: 0,
                disparo: [],
                tecla_espacio: false,
                 pRight: false,
                pLeft: false,
                pRight2: false,
                pLeft2: false,
                rangos: [],
                rangos2: [],
                malla_segundaria: [],
                malla_primaria: [],
                disparo_enemigo: [],
                disparo_enemigo2: [],
                aumento: 0,
                mW: 30,
                mH: 30,
                mMargenT: 35,
                mMargenL: 5,
                mMargenT2: 65,
                mMargenL2: 5,
clearCanvas: function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);},
nave: function () {
                    ctx.beginPath();
                    var img = new Image();
                    img.src = "images/nave1.png";
                    ctx.drawImage(img, juego.pX, juego.pY,juego.pW,juego.pH);
                    ctx.fill();
                    ctx.closePath();},
rangos_primarios: function(){
    for(var i = 0; i < 5; i++) {
            this.rangos[i] = {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0,}}},
disparo_enemigo: function () {
        for(var i = 0; i < 500 ; i = i + 1){
                    this.disparo_enemigo[i] = {
                        x: this.rangos[3].x,
                        y: this.rangos[3].y,
                        w: 10,
                        h: 10,}}},
disparo_enemigo2: function () {
        for(var i = 0; i < 500 ; i = i + 1){
                    this.disparo_enemigo2[i] = {
                        x: this.rangos[4].x,
                        y: this.rangos[4].y,
                        w: 10,
                        h: 10,}}},
// pintar los disparos
pintar_disparos_e: function(){
                    if(juego.primero == true){
                        if(juego.llegue_suelo == true){
                            this.disparo_enemigo[this.random2].x = this.malla_primaria[this.random].x;
                            this.disparo_enemigo[this.random2].y = this.malla_primaria[this.random].y;
                            this.llegue_suelo = false;}
                            if(this.disparo_enemigo[this.random2] == 0){
                                this.random2 = (this. random2 * 0) + Math.floor(Math.random() * 500);
                                this.llegue_suelo = true;}
                            if(this.malla_primaria[this.random] == 0){
                                this.random = (this.random * 0) + (Math.floor(Math.random() * 24)+ this.suma );
                                this.llegue_suelo = true;}
                    var img = new Image();
                    img.src = "images/dis2.png";
                    ctx.beginPath();
                    ctx.drawImage(img, this.disparo_enemigo[this.random2].x+25, this.disparo_enemigo[this.random2].y, 5,20);
                    ctx.restore();
                    ctx.fill();
                    ctx.closePath();
                    this.disparo_enemigo[this.random2].y = this.disparo_enemigo[this.random2].y + this.velocidad;
                    if(this.disparo_enemigo[this.random2].y > this.pY && this.disparo_enemigo[this.random2].y < this.pY + 30){
                    if(this.disparo_enemigo[this.random2].x > this.pX -15 && this.disparo_enemigo[this.random2].x < this.pX + 15){
                        this.disparo_enemigo[this.random2] = 0; this.vidas = this.vidas - 1; this.llegue_suelo = true;}}
if(this.disparo_enemigo[this.random2].y > canvas.height){
                            this.random = (this.random * 0) + (Math.floor(Math.random() * 24) + this.suma);
                            this.random2 = (this.random2 * 0) + Math.floor(Math.random() * 500);
                this.primero = false; this.segundo = true; this.llegue_suelo2 = true; }}
                    if(juego.segundo == true){
                        if(juego.llegue_suelo2 == true){
                            this.disparo_enemigo2[this.random2_e].x = this.malla_segundaria[this.random_e].x;
                            this.disparo_enemigo2[this.random2_e].y = this.malla_segundaria[this.random_e].y;
                            this.llegue_suelo2 = false;}
                            if(this.disparo_enemigo2[this.random2_e] == 0){
                                this.random2_e = (this. random2_e * 0) + Math.floor(Math.random() * 500);
                                this.llegue_suelo2 = true;}
                            if(this.malla_segundaria[this.random_e] == 0){
                                this.random_e = (this.random_e * 0) + (Math.floor(Math.random() * 24)+ this.suma );
                                this.llegue_suelo2 = true;}
                    var img = new Image();
                    img.src = "images/dis2.png";
                    ctx.beginPath();
                    ctx.drawImage(img, this.disparo_enemigo2[this.random2_e].x+25, this.disparo_enemigo2[this.random2_e].y, 5,20);
                    ctx.restore();
                    ctx.fill();
                    ctx.closePath();
                    if(this.disparo_enemigo2[this.random2_e].y > this.pY && this.disparo_enemigo2[this.random2_e].y < this.pY + 30){
                    if(this.disparo_enemigo2[this.random2_e].x > this.pX -15 && this.disparo_enemigo2[this.random2_e].x < this.pX + 15){
                        this.disparo_enemigo2[this.random2_e] = 0;
                        this.vidas = this.vidas - 1; this.llegue_suelo2 = true;}}
                    this.disparo_enemigo2[this.random2_e].y = this.disparo_enemigo2[this.random2_e].y + this.velocidad;
                            if(this.disparo_enemigo2[this.random2_e].y > canvas.height){     
                                this.random_e = (this.random_e * 0) + (Math.floor(Math.random() * 24) + this.suma);
                                this.random2_e = (this.random2_e * 0) + Math.floor(Math.random() * 500);
                this.segundo = false; this.primero = true; this.llegue_suelo = true; }}},
//prueba A
mallaCargar: function () {
                    this.rangos[1].x = this.mMargenL;
                    this.rangos[1].y = this.mMargenT;
                    var inicioTop = this.mMargenT;
                    for (var i = 0; i < 2; i = i + 1) {
                        var inicioLeft = this.mMargenL;
                            while (450 > inicioLeft + this.mW) {   
                                this.malla_primaria[this.malla_primaria.length] = {
                                    x: inicioLeft,
                                    y: inicioTop,
                                    w: this.mW,
                                    h: this.mH,}
                            inicioLeft = inicioLeft + this.mW + this.mMargenL;
                            this.rangos[1].w = inicioLeft;}
                        inicioTop = inicioTop + this.mH + this.mMargenT + 0;
                        this.rangos[1].h = inicioTop;}
                                        this.rangos[0].x = this.mMargenL2;
                    this.rangos[0].y = this.mMargenT2;
                    var inicioTop2 = this.mMargenT2;
                    for (var i = 0; i < 2; i = i + 1) {
                        var inicioLeft2 = this.mMargenL2 + 60;
                            while (canvas.width > inicioLeft2 + this.mW) {
                                this.malla_segundaria[this.malla_segundaria.length] = {
                                    x: inicioLeft2,
                                    y: inicioTop2,
                                    w: this.mW,
                                    h: this.mH,}
                            inicioLeft2 = inicioLeft2 + this.mW + this.mMargenL2;
                            this.rangos[0].w = inicioLeft2;}
                        inicioTop2 = inicioTop2 + this.mH + this.mMargenT2 - 25;
                        this.rangos[0].h = inicioTop2;}}, 
mallaCargar2: function () {
                if(this.cambiar == true){
                    this.rangos[1].x = this.mMargenL;
                    this.rangos[1].y = this.mMargenT;
                    var inicioTop = this.mMargenT;
                    for (var i = 0; i < 2; i = i + 1) {
                        var inicioLeft = this.mMargenL;
                            while (450 > inicioLeft + this.mW) {   
                                this.malla_primaria[this.malla_primaria.length] = {
                                    x: inicioLeft,
                                    y: inicioTop,
                                    w: this.mW,
                                    h: this.mH,}
                            inicioLeft = inicioLeft + this.mW + this.mMargenL;
                            this.rangos[1].w = inicioLeft;}
                        inicioTop = inicioTop + this.mH + this.mMargenT + 0;
                        this.rangos[1].h = inicioTop;}
                    this.rangos[0].x = this.mMargenL2;
                    this.rangos[0].y = this.mMargenT2;
                    var inicioTop2 = this.mMargenT2;
                    for (var i = 0; i < 2; i = i + 1) {
                        var inicioLeft2 = this.mMargenL2 + 60;
                            while (canvas.width > inicioLeft2 + this.mW) {
                                this.malla_segundaria[this.malla_segundaria.length] = {
                                    x: inicioLeft2,
                                    y: inicioTop2,
                                    w: this.mW,
                                    h: this.mH,}
                            inicioLeft2 = inicioLeft2 + this.mW + this.mMargenL2;
                            this.rangos[0].w = inicioLeft2;}
                        inicioTop2 = inicioTop2 + this.mH + this.mMargenT2 - 25;
                        this.rangos[0].h = inicioTop2;}
                    this.score = this.score + 1;
                    this.cambiar = false;}}, 
//pintar
mallaPintar: function () {
                    var otro = 1;
                    if(this.score >= 48  && this.score <= 96){
                                otro = 2;}
                            if(this.score >= 97){
                                otro = 3;}
                    for (var i = 0; i < this.malla_segundaria.length; i++) {
                        if (this.malla_segundaria[i] != false) {
                            ctx.beginPath();
                            var img = new Image();
                            img.src = "images/enemigo"+otro+".png";
                            ctx.drawImage(img, this.malla_segundaria[i].x, this.malla_segundaria[i].y ,this.malla_segundaria[i].w,this.malla_segundaria[i].h);
                            ctx.fill();
                            ctx.closePath();}}},
           //pintar
mallaPintar2: function () {
                    var otro = 1;
                    if(this.score >= 48  && this.score <= 96){
                                otro = 2;}
                            if(this.score >= 97){
                                otro = 3;}
                    for (var i = 0; i < this.malla_primaria.length; i++) {
                        if (this.malla_primaria[i] != false) {
                            ctx.beginPath();
                            var img = new Image();
                            img.src = "images/enemigo"+otro+".png";
                            ctx.drawImage(img, this.malla_primaria[i].x, this.malla_primaria[i].y ,this.malla_primaria[i].w,this.malla_primaria[i].h);
                            ctx.fill();
                            ctx.closePath();}}},
//controles
                keyControl: function () {
                    document.addEventListener("keydown", function (e) {
                        if (e.keyCode == 39) {
                            juego.pRight = true;}
                        else if (e.keyCode == 37) {
                            juego.pLeft = true;}});
                    document.addEventListener("keyup", function (e) {
                        if (e.keyCode == 39) {
                            juego.pRight = false;} 
                        else if (e.keyCode == 37) {
                            juego.pLeft = false;}});},
                    keyControl2: function () {
                    document.addEventListener("keydown", function(e) {
                        if (e.keyCode == 40) {
                            juego.pRight2 = true;} 
                            else if (e.keyCode == 38) {
                            juego.pLeft2 = true;} }); 
                    document.addEventListener("keyup", function(e){
                        if (e.keyCode == 40) {
                            juego.pRight2 = false;} 
                        else if (e.keyCode == 38) {
                            juego.pLeft2 = false;
                        } });}, 
            movernave: function () {
                    if (this.pRight && this.pX < canvas.width - juego.pW) {
                        this.pX = this.pX + 7;}
                    if (this.pLeft && this.pX > 0) {
                        this.pX = this.pX - 7;}
                    if (this.pRight2 && this.pY < canvas.height - juego.pW) {
                        this.pY = this.pY + 7;}
                    if (this.pLeft2 && this.pY > 280) {
                        this.pY = this.pY - 7;}},
            keyControl3: function () {
                    document.addEventListener("keyup", function (e) {
                        if (e.keyCode == 32) {
                        juego.tecla_espacio = true;}});},
                //disparos nave
        disparo: function () {
                    for(var i = 0; i < 300 ; i = i + 1){
                    this.disparo[i] = {
                        x: this.rangos[2].x,
                        y: this.rangos[2].y,
                        w: 10,
                        h: 10,
                    }}},
                    //pintar disparos
                pintardisparos: function(){
     //nd es numero disparo
                    if(juego.tecla_espacio == true){
                        this.disparo[this.nd].x = this.pX;
                        this.disparo[this.nd].y = this.pY;
                            this.nd = this.nd + 1;
                                this.tecla_espacio = false;}
                            var img3 = new Image();
                            img3.src = "images/dis.png";
                for (var e = 0; e < this.nd; e++) {
                    ctx.beginPath();
                    ctx.drawImage(img3, this.disparo[e].x+25, this.disparo[e].y, 5,20);
                    ctx.restore();
                    ctx.fillStyle = "#FF0000";
                    ctx.fill();
                    ctx.closePath();
                    this.disparo[e].y = this.disparo[e].y - 3;       }}, 
                   //colision
                   colision_enemigo: function(){
                    for(var i = 0 ; i < 300 ; i = i + 1){
                        for(var e = 0; e < this.malla_primaria.length; e = e + 1 ){
                if(this.disparo[i].y > this.malla_primaria[e].y &&  this.disparo[i].y < this.malla_primaria[e].y  + 30){
                        if(this.disparo[i].x > this.malla_primaria[e].x - 35 &&  this.disparo[i].x < this.malla_primaria[e].x){   
                                this.malla_primaria[e] = 0; 
                                this.disparo[i] = 0;
                                this.numero = this.numero - 1;
                             this.score = this.score + 1;}}
                else if(this.disparo[i].y > this.malla_segundaria[e].y &&  this.disparo[i].y < this.malla_segundaria[e].y  + 30){
                        if(this.disparo[i].x > this.malla_segundaria[e].x - 35 &&  this.disparo[i].x < this.malla_segundaria[e].x){  
                                this.malla_segundaria[e] = 0; 
                                this.disparo[i] = 0;
                                this.score = this.score + 1;}}}}},
                //mover  a los enemigos
        mover_enemigos: function(){
                        var resp = 0;
                        var mas2 = this.velocidad_m;
                        var menos2 = this.velocidad_me; 
                        var resp2 = 0;
                       if(this.derecha == true){
            if(this.malla_segundaria[this.nivel].x  >= 0){
                                resp2 = resp2 + menos2;
                             for(var e = 0; e < this.malla_segundaria.length ; e ++){
                                this.malla_segundaria[e].x =  this.malla_segundaria[e].x + resp2;}}
                            else{
                                this.derecha = false;
                                this.izquierda = true;}}
                    if(this.izquierda == true){
            if(this.malla_segundaria[this.nivel_d].x  <=  canvas.width - 30){
                                resp2 = resp2 + mas2;
                             for(var e = 0; e < this.malla_segundaria.length ; e ++){
                                this.malla_segundaria[e].x =  this.malla_segundaria[e].x + resp2;}}
                            else{
                                this.derecha = true;
                                this.izquierda = false}}
            if(this.derecha2 == true){
            if(this.malla_primaria[this.nivel_d].x  <=  canvas.width - 30){ 
                                resp = resp + mas2;
                             for(var e = 0; e < this.malla_primaria.length ; e ++){
                                this.malla_primaria[e].x =  this.malla_primaria[e].x + resp;
                            }}
                            else{
                                this.derecha2 = false;
                                this.izquierda2 = true;}}
                    if(this.izquierda2 == true){
            if(this.malla_primaria[this.nivel].x  >= 0){
                                resp = resp + menos2;
                             for(var e = 0; e < this.malla_primaria.length ; e ++){
                                this.malla_primaria[e].x =  this.malla_primaria[e].x + resp;}}
                            else{
                                this.derecha2 = true;
                                this.izquierda2 = false;}}},
                cambio: function(){
                    if(this.score == 48){  // 24 35 36 
                    this.cambiar = true;
                    this.nivel = 24;
                    this.nivel_d = 35;
                    this.suma = 24;
                    this.velocidad = 3.75;
                    this.velocidad_m = 1.25;
                    this.velocidad_me = -1.25;}
                if(this.score == 97){
                    this.cambiar = true;
                    this.nivel = 48;    
                    this.nivel_d = 59;
                    this.suma = 48;
                    this.velocidad = 4.6;
                    this.velocidad_m = 1.5;
                    this.velocidad_me = -1.5;}},
                enviar: function(){
        var enviar = document.getElementById('score').innerHTML = juego.score; },
vidas_juego: function(){
                    var img0 = new Image();
                    img0.src = "images/nave1.png";
    if(this.vidas == 3){
                    ctx.beginPath();
                    ctx.drawImage(img0, 458, 0,40,40);
                    ctx.drawImage(img0, 443, 0,40,40);
                    ctx.drawImage(img0, 428, 0,40,40);
                    ctx.fill();
                    ctx.closePath();}
    else if(this.vidas == 2){
                    ctx.beginPath();
                    ctx.drawImage(img0, 460, 0,40,40);
                    ctx.drawImage(img0, 420, 0,40,40);
                    ctx.fill();
                    ctx.closePath();}
    else if(this.vidas == 1){
                    ctx.beginPath();
                    ctx.drawImage(img0, 460, 0,40,40);
                    ctx.fill();
                    ctx.closePath();}
else if(this.vidas == 0){
    alert("GAME OVER \n Gracias por jugar en Dag's corp");
}
}};
            alert("VAMOS A JUGAR");
            juego.rangos_primarios();
            juego.mallaCargar();
            juego.disparo();
            juego.keyControl();
            juego.keyControl2();
            juego.keyControl3();
            juego.disparo_enemigo();
            juego.disparo_enemigo2();
            function draw() {
                juego.clearCanvas();
                juego.mallaPintar();
                juego.mallaPintar2();
                juego.mallaCargar2();
                juego.nave();
                juego.movernave();
                juego.pintardisparos();
                juego.colision_enemigo();
                juego.enviar();
                juego.cambio();
                juego.mover_enemigos();
                juego.pintar_disparos_e();
                juego.vidas_juego();}
            setInterval(draw, 10);