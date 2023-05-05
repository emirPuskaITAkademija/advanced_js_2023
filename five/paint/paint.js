        let potvrda = false;
        let radius = "0%";

        function krug(){
            radius = "50%";
        }

        function kvadrat(){
            radius = "0%";
        }

        function crtajNaKoordinatama(e){
            let x = e.clientX;
            let y = e.clientY;
            if(potvrda && y<290 && x<490){
                crtanje(x, y);
            }
        }

        function pocniCrtanje(e){
            let x = e.clientX;
            let y = e.clientY;
            potvrda = true;
            crtanje(x, y);
        }

        function prestaniCrtanje(){
            potvrda = false;
        }

        function crtanje(x, y){
            /**
             * UZIMAM POSTAVKE CRTANJA
             */
            //1. boja
            let colorInput = document.getElementById("boja");
            let color = colorInput.value;
            console.log(color+" boja...");
            //2. debljina
            let debljinaInput = document.getElementById("deb");
            let debljina = debljinaInput.value+"px";
            //3. oblik kvadratić ili kružić
            /**
             * CRTAM U SKLADU S POSTAVKAMA:
             * <li>createElement DIV
             * <li>tackicaDiv -> stilizujem ga u skladu s postavkama
             */
            let tackicaDiv = document.createElement("div");
            tackicaDiv.style=`width:${debljina};height:${debljina};background:${color};`;
            tackicaDiv.style.position="absolute";
            tackicaDiv.style.left=x+"px";
            tackicaDiv.style.top=y+"px";
            tackicaDiv.style.borderRadius=radius;

            /**
             * Dodajem na platno KREIRANI tackicaDiv
             */
            let platno = document.getElementById("platno");
            platno.appendChild(tackicaDiv);
        }