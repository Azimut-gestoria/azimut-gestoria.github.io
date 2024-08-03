function infoe(){

    nro1.salida.value+="\n\n";
    nro1.salida.value+="WGS84          Internat.1924   Clarke 1866     WGS72         GRS80\n";
    nro1.salida.value+="6378137        6378388         6378206.4       6378135       6378137\n";
    nro1.salida.value+="0.003352811    0.003367003     0.003390075     0.003352779   0.003352811\n";
    nro1.salida.value+="298.2572236    297             294.9786982     298.26        298.2572221\n";
    nro1.salida.value+="\n\n";
    nro1.salida.value+="ANS            Airy            Clarke 1858     '165'         Clarke 1880\n";
    nro1.salida.value+="6378160.000    6377563.396     6378293.645     6378165.000   6378249.145\n";
    nro1.salida.value+="0.003352892    0.003340851     0.003352811     0.003352330   0.003407561\n";
    nro1.salida.value+="298.25         299.3249646     294.26          298.3         293.465\n";
    nro1.salida.value+="\n\n";
    nro1.salida.value+="Bessel 1841    Everest         Fischer 1968    SA 1969       Helmert 1906\n";
    nro1.salida.value+="6377397.155    6377276.345     6378150.0       6378160.0     6378200.0\n";
    nro1.salida.value+="0.003342773    0.0033244493    0.0033523299    0.003352892   0.0033523299\n";
    nro1.salida.value+="299.1528128    300.8017        298.3           298.25        298.3\n";
    nro1.salida.value+="\n\n";
    nro1.salida.value+="WGS 60         WGS 66          GRS 67          Fischer 1960  Hough\n";
    nro1.salida.value+="6378165.0      6378145.0       6378160.0       6378166.0     6378270.0\n";
    nro1.salida.value+="0.003352330    0.003352892     0.0033529237    0.0033523299  0.003367003\n";
    nro1.salida.value+="298.3          298.25          298.247167427   298.3         297.0\n";
    nro1.salida.value+="\n\n";
    nro1.salida.value+="Hayford 1909   Krassovsky      Struve 1860     S.G.S. 1985   S.G.S. 1990\n";
    nro1.salida.value+="6378388.0      6378245.0       6378298.3       6378136.0     6378136.0\n";
    nro1.salida.value+="0.003367465    0.003352330     0.003392936     0.003349298   0.003352804\n";
    nro1.salida.value+="296.9592630    298.3           294.73          298.257       298.2578393\n";
    
    
    }
    
    function info(){
    
    nro1.salida.value+="\n\nKRUGER.HTM\n\n";
    nro1.salida.value+="Calcula coordenadas de las proyecciones Gauss-Kr�ger &oacute; UTM\n";
    nro1.salida.value+="a partir de coordenadas Geogr&aacute;ficas geod&eacute;sicas\n";
    nro1.salida.value+="y c&aacute;lculo inverso\n";
    nro1.salida.value+="para elipsoide WGS84 y otros\n\n";
    nro1.salida.value+="El meridiano central es calculado o ingresado.\n";
    nro1.salida.value+="Autor: J.L.Hormaechea\n";
    nro1.salida.value+="\n";
    nro1.salida.value+="Versi&oacute;n 1.20 HTML - JavaScript - julio 2002\n";
    nro1.salida.value+="Corregido para Firefox          - mayo 2007\n";
    nro1.salida.value+="Versi&oacute;n 1.30 HTML - genera c&oacute;digo KML - julio 2008\n";
    nro1.salida.value+="Versi&oacute;n 1.40 HTML - correcci&oacute;n en el c&oacute;digo KML - noviembre 2021\n";
    nro1.salida.value+="E-mail: jlhor@fcaglp.unlp.edu.ar\n";
    
    }
    
    
    function infok(){
    
    nro1.salida.value+="\n\nKRUGER.HTM version 1.40\n\n";
    nro1.salida.value+="Genera c&oacute;digo KML en una pesta�a/ventana nueva.\n";
    nro1.salida.value+="Pegarlo en un archivo de texto cuyo nombre termine en \".kml\"\n";
    nro1.salida.value+="y abrirlo con el Google Earth u otro programa que lea formato kml.\n\n";
    nro1.salida.value+="Autor: J.L.Hormaechea\n";
    nro1.salida.value+="\n";
    
    }
    
    
    function elips(){
    
    // si se ingresan mas elipsoides
    // modificar el nro en el if
    
    semieje = new Array(6378137,6378388,6378206.4,6378135,6378137, 6378388, 0);
    aplanai = new Array(298.2572236, 297, 294.9786982, 298.26, 298.2572221, 296.959263, 0);
    
    indice=nro1.elipsoide.value;
    if (indice < 6) {
    nro1.a.value=semieje[indice];
    nro1.fff.value=aplanai[indice];
    arco2();
    }
    
    else {
    nro1.elipsoide.blur();
    nro1.a.select();
    }
    
    
    }
    
    
    function abrirkmlw(){
    if (nro1.okml.value=="abrir KML") {
    nro1.okml.value="cerrar KML";
    nombre=nro1.punto.value;
    if (nro1.punto.value=="") nombre=nro1.contador.value;
    nombreW= new Date();
    kmlWindow=window.open(nombre + ".kml",nombre);
    kmlWindow.document.open("text/plain","replace");
    kmlWindow.document.writeln("&lt;kml&gt;<br>");
    kmlWindow.document.writeln("&lt;Document&gt;<br>");
    kmlWindow.document.writeln("&lt;name&gt;" + nombreW +"&lt;/name&gt;<br>");}
    //kmlWindow.blur()}
    else {
    nro1.okml.value="abrir KML";
    kmlWindow.document.writeln("&lt;/Document&gt;<br>");
    kmlWindow.document.writeln("&lt;/kml&gt;<br>");
    kmlWindow.document.close()}
    
    }
    
    function akml(){
    nombre=nro1.punto.value;
    if (nro1.punto.value=="") nombre=nro1.contador.value;
    longitudes=signo(nro1.lond.value)*(Math.abs(nro1.lond.value)+nro1.lonm.value/60+nro1.lons.value/3600);
    latitudes=signo(nro1.latg.value)*(Math.abs(nro1.latg.value)+nro1.latm.value/60+nro1.lats.value/3600);
    
    kmlWindow.document.writeln(" &lt;Placemark&gt;<br>");
    kmlWindow.document.writeln("  &lt;name&gt;" + nombre + "&lt;/name&gt;<br>");
    kmlWindow.document.writeln("  &lt;Point&gt;<br>");
    kmlWindow.document.writeln("    &lt;coordinates&gt;" + longitudes + "," + latitudes + ",0&lt;/coordinates&gt;<br>");
    kmlWindow.document.writeln("  &lt;/Point&gt;<br>");
    kmlWindow.document.writeln(" &lt;/Placemark&gt;<br>");
    
    }
    
    
    
    function arco2(){
    
    var n, pii, fi, n2, n4, n3;
    pii = 3.141592653589793;
    fi = 90 * pii / 180;
    aa=nro1.a.value;
    ff=1 / nro1.fff.value;
    n = ff / (2 - ff);
    n2 = n * n;
    n3 = n2 * n;
    n4 = n2 * n2;
    
    a0 = 1 + n2 / 4 + n4 / 64;
    arc = aa / (1 + n) * (a0 * fi);
    nro1.falsonorte.value=arc;
    
    }
    
    
    function borra(){
    nro1.salida.value="";
    nro1.contador.value=0;
    }
    
    function formatnumber(aaaa, np){
    
    var pot=Math.pow(10,np);
    var ss=signo(aaaa);
    aaaa=Math.floor(Math.abs(aaaa*pot)+0.5);
    aaaa=aaaa/pot*ss;
    return aaaa;
    }
    
    function signo(aaaa){
    if (aaaa < 0) return -1;
    if (aaaa == 0) return 0;
    if (aaaa > 0) return 1;
    }
    
    function arco(aa, ff){
    
    var n, pii, fi, n2, n4, n3;
    pii = 3.141592653589793;
    fi = 90 * pii / 180;
    n = ff / (2 - ff);
    n2 = n * n;
    n3 = n2 * n;
    n4 = n2 * n2;
    
    a0 = 1 + n2 / 4 + n4 / 64;
    arc = aa / (1 + n) * (a0 * fi);
    return arc;
    
    }
    
    
    
    function gk2geo() {
    
    var y0 = 10000000;
    var x0 = 500000;
    var piii = 3.141592653589793;
    var b=" "
    
    
    //  Gauss-Kruger
    
    if (nro1.kproy.value==1) var k0 = 1.0;
    if (nro1.kproy.value==2) var k0 = 0.9996;
    
    
    f=1/nro1.fff.value;
    
    if (nro1.kproy.value==1) xxx = arco(nro1.a.value,f);
    if (nro1.kproy.value==2) xxx = y0;
    
    nro1.falsonorte.value=xxx;
    
    
    xxx = xxx - y0;
    
    nro1.contador.value = eval(nro1.contador.value) + 1;
    
    x = nro1.xxxx.value;
    y = nro1.yyyy.value;
    
    // Eleccion de faja Gauss-Kruger
    
    if (nro1.kproy.value == 1) {
    if (y >= 1000000) {
    
           ifaja = 0;
           do { 
             nro1.yyyy.value = nro1.yyyy.value - 1000000;
             ifaja = ifaja + 1;
         }  while (nro1.yyyy.value >= 1000000); 
    
           nro1.mc.value = -75 + ifaja * 3;
    
    }
    }
    
    // Elecci&oacute;n faja UTM
    
    if (nro1.kproy.value == 2) {
    
    if (nro1.zonau.value>0) nro1.mc.value=eval(nro1.zonau.value)*6-183;
    
    }
    
    nro1.xxxx.value = nro1.xxxx.value - xxx - y0;
    
    e2 = 2 * f - f * f;
    
    n = f / (2 - f);
    
    n2 = n * n;
    n3 = n2 * n;
    n4 = n3 * n;
    
    a0 = 1 + n2 / 4 + n4 / 64;
    a2 = 3 / 2 * (n - n3 / 8);
    a4 = 15 / 16 * (n2 - n4 / 4);
    a6 = 35 / 48 * n3;
    a8 = 315 / 512 * n4;
    
    fif = nro1.xxxx.value / k0 * (1 + n) / nro1.a.value / a0;
    fif0 = fif;
    
    
    for (i = 1; i<=6; i++) {
    
    ffif = -a2 * Math.sin(2 * fif) + a4 * Math.sin(4 * fif) - a6 * Math.sin(6 * fif) + a8 * Math.sin(8 * fif);
    
    fif = fif0 - ffif / a0;
    
    } 
    
    
    t = Math.tan(fif);
    t2 = t * t;
    t4 = t2 * t2;
    
    eta2 = e2 / (1 - e2) * Math.pow(Math.cos(fif) , 2);
    eta4 = eta2 * eta2;
    
    u = Math.sqrt(1 - e2 * Math.pow(Math.sin(fif) , 2));
    
    nn = nro1.a.value / u;
    
    ykn = (nro1.yyyy.value - x0) / k0 / nn;
    ykn2 = ykn * ykn;
    ykn3 = ykn2 * ykn;
    ykn4 = ykn3 * ykn;
    ykn5 = ykn4 * ykn;
    ykn6 = ykn5 * ykn;
    
    
    fi1 = -t / 2 * (1 + eta2) * ykn2;
    fi2 = t / 24 * (5 + 3 * t2 + 6 * eta2 - 6 * eta2 * t2 - 3 * eta4 - 9 * t2 * eta4) * ykn4;
    fi3 = -t / 720 * (61 + 90 * t2 + 45 * t4 + 107 * eta2 - 162 * t2 * eta2 - 45 * t4 * eta2) * ykn6;
    fir = fif + fi1 + fi2 + fi3;
    
    long1 = ykn3 / 6 * (1 + 2 * t2 + eta2);
    longi2 = ykn5 / 120 * (5 + 28 * t2 + 24 * t4 + 6 * eta2 + 8 * t2 * eta2);
    longr = (ykn - long1 + longi2) / Math.cos(fif);
    
    
    fi0 = fir * 180 / piii;
    longi = longr * 180 / piii + eval(nro1.mc.value);
    
    
    fgrados=Math.floor(Math.abs(fi0))*signo(fi0);
    fmin=Math.floor(Math.abs(fi0-fgrados)*60);
    fseg=(Math.abs(fi0)-Math.abs(fgrados)-fmin/60)*3600;
    
    nro1.latg.value=fgrados;
    nro1.latm.value=fmin;
    nro1.lats.value=fseg;
    
    lgrados=Math.floor(Math.abs(longi))*signo(longi);
    lmin=Math.floor(Math.abs(longi-lgrados)*60);
    lseg=(Math.abs(longi)-Math.abs(lgrados)-lmin/60)*3600;
    
    nro1.lond.value=lgrados;
    nro1.lonm.value=lmin;
    nro1.lons.value=lseg;
    
    
    nro1.xxxx.value=x;
    nro1.yyyy.value=y;
    
    if (nro1.contador.value == 1) {
    nro1.salida.value="Punto   X     Y    Mc        Latitud       Longitud     G    M    S     G    M    S\n";
    }
    
    nombre=nro1.punto.value;
    if (nombre=="") nombre=nro1.contador.value;
    
    nro1.salida.value+= nombre + b + formatnumber(x,4) + b + formatnumber(y,4) + b + nro1.mc.value+ b  +formatnumber(fi0,8) + b +formatnumber(longi,8)+ b ;
    
    nro1.salida.value+= fgrados+ b  + fmin+ b  + formatnumber(fseg,5)+ b  + lgrados+ b + lmin+ b  + formatnumber(lseg,5) +"\n";
    
    
    if (nro1.okml.value=="cerrar KML") akml();
    
    
    }
    
    
    function mercator() {
    
    //   Obtiene coordenadas Easting y Norting  UTM
    //   a partir de Lat/Lon geodesicas
    //   para elipsoide WGS84 o Internacional 1924
    //   Elige la faja por proximidad
    //
    //   Autor: J.L.Hormaechea
    //   abril 1994.
    //
    //   Modificacion: elige faja por proximidad (nov 1995)
    //   si Meridiano Central = 0
    
    var x0 = 500000;
    var y0 = 10000000;
    var pii = 3.141592653589793;
    var b=" ";
    
    // semi ancho faja G-K  (nov 1995)
    var g15 = 1.5 * pii / 180;
    
    // semi ancho faja UTM  (jul 2002)
    var g15u = 3 * pii / 180;
    
    fir=(Math.abs(eval(nro1.latg.value))+Math.abs(nro1.latm.value)/60+Math.abs(nro1.lats.value)/3600)*signo(nro1.latg.value);
    longr=(Math.abs(eval(nro1.lond.value))+Math.abs(nro1.lonm.value)/60+Math.abs(nro1.lons.value)/3600)*signo(nro1.lond.value);
    
    fir = fir * pii / 180;
    longr = longr * pii / 180;
    
    aaa=eval(nro1.a.value);
    ff=1/eval(nro1.fff.value);
    
    if (nro1.kproy.value==1) var falsonor = arco(aaa, ff);
    if (nro1.kproy.value==2) var falsonor= y0;
    nro1.falsonorte.value=falsonor;
    falsonor = falsonor - y0;
    
    //
    //Elige faja por proximidad si mca est&aacute; checked
    
    signol=signo(longr);
    
    var mcr=0;
    
    if (nro1.mca.checked) {
    
    
    // Para Gauss-Kruger
    
    if (nro1.kproy.value==1) {
    
    for(i = 0; i<=60;i++){
               mcfaj = i * 3 * pii / 180;
              if (mcfaj - Math.abs(longr) < g15)  mcr = mcfaj * signol;
              }
    }
    
    // Para UTM
    
    if (nro1.kproy.value==2) {
    
    for(i = 0; i<=30;i++){
               mcfaj = (i * 6 - 3) * pii / 180;
              if (mcfaj - Math.abs(longr) < g15u)  {
                                                      mcr = mcfaj * signol;
                                                      nro1.zonau.value=31-i; }
              }
    if (mcr>0) nro1.zonau.value = 61 - eval(nro1.zonau.value);
    }
    
    mce=mcr*180/pii; 
    nro1.mc.value=formatnumber(mce,5);
    
    
    }
    
    
    if (!nro1.mca.checked) { mce=nro1.mc.value; mcr=mce*pii/180;}
    
    
    // fin define faja  mcr sale en radianes
    
    
    longr = longr - mcr;
    
    
    if (nro1.kproy.value==1) k0 = 1;
    if (nro1.kproy.value==2) k0 = 0.9996;
    
    var e2 = 2 * ff - ff * ff;
    var e = Math.sqrt(e2);
    
    
    var n = ff / (2 - ff);
    
    var n2 = n * n;
    var n3 = n2 * n;
    var n4 = n3 * n;
    
    var a0 = 1 + n2 / 4 + n4 / 64;
    var a2 = 1.5 * (n - n3 / 8);
    var a4 = 15 / 16 * (n2 - n4 / 4);
    var a6 = 35 / 48 * n3;
    var a8 = 315 / 512 * n4;
    
    var nn = aaa / (Math.sqrt(1 - e2 * Math.pow(Math.sin(fir) , 2)));
    var mm = aaa * (1 - e2) / Math.pow(Math.sqrt(1 - e2 * Math.pow(Math.sin(fir) , 2)), 3);
    
    var t = Math.tan(fir);
    var t2 = t * t;
    var t4 = t2 * t2;
    
    var eta2 = e2 / (1 - e2) * Math.pow(Math.cos(fir) , 2);
    
    var fia = Math.abs(fir);
    var s = aaa / (1 + n) * (a0 * fir - a2 * Math.sin(2 * fir) + a4 * Math.sin(4 * fir) - a6 * Math.sin(6 * fir) + a8 * Math.sin(8 * fir));
    
    var tx1 = longr * Math.cos(fir);
    var tx2 = Math.pow(longr * Math.cos(fir), 3) * (1 - t2 + eta2) / 6;
    var tx3 = Math.pow(longr * Math.cos(fir), 5) * (5 - 18 * t2 + t4 + 14 * eta2 - 58 * t2 * eta2)/120;
    
    
    var ty1 = s / nn;
    var ty2 = Math.pow(longr, 2) * Math.sin(fir) * Math.cos(fir) / 2;
    var ty3 = Math.pow(longr, 4) * Math.sin(fir) * Math.pow(Math.cos(fir), 3) * (5 - t2 + 9 * eta2 + 4 * eta2 * eta2) / 24;
    var ty4 = Math.pow(longr, 6) * Math.sin(fir) * Math.pow(Math.cos(fir), 5) * (61 - 58 * t2 + t4 + 270 * eta2 - 30 * t2 * eta2) / 720;
    
    xx = (tx1 + tx2 + tx3) * k0 * nn + x0;
    yy = (ty1 + ty2 + ty3 + ty4) * k0 * nn + y0 + falsonor;
    
    //determinacion de faja
    
    
    if (nro1.kproy.value==1) {
    fajan = (eval(nro1.mc.value) + 75)/ 3;
    if (Math.floor(fajan)==fajan) {
            xx=fajan*1000000 + xx;
    }
    }
    
    nro1.contador.value = eval(nro1.contador.value) + 1;
    if (nro1.contador.value == 1) {
    nro1.salida.value="Punto   X     Y    mc        Lat       Long     G    M    S     G    M    S\n";
    }
    
    
    fi0 = fir * 180 / pii;
    longi = longr * 180 / pii + eval(nro1.mc.value);
    
    
    fgrados=Math.floor(Math.abs(fi0))*signo(fi0);
    fmin=Math.floor(Math.abs(fi0-fgrados)*60);
    fseg=(Math.abs(fi0)-Math.abs(fgrados)-fmin/60)*3600;
    
    lgrados=Math.floor(Math.abs(longi))*signo(longi);
    lmin=Math.floor(Math.abs(longi-lgrados)*60);
    lseg=(Math.abs(longi)-Math.abs(lgrados)-lmin/60)*3600;
    
    nro1.xxxx.value=yy;
    nro1.yyyy.value=xx;
    
    
    nombre=nro1.punto.value;
    if (nombre=="") nombre=nro1.contador.value;
    
    nro1.salida.value+= nombre + b + formatnumber(yy,4) + b + formatnumber(xx,4) + b + nro1.mc.value+ b  +formatnumber(fi0,8) + b +formatnumber(longi,8)+ b ;
    
    nro1.salida.value+= fgrados + b  + fmin+ b  + formatnumber(fseg,5)+ b  + lgrados+ b + lmin+ b  + formatnumber(lseg,5) +"\n";
    
    if (nro1.okml.value=="cerrar KML") akml();
    
    
    
  } 
  