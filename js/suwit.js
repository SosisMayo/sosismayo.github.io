var pilihan=true;
while(pilihan){
    var kita=prompt("Pilih batu, gunting, atau kertas");

    var musuh=Math.random();
    if (musuh<0.34){
        musuh="batu";
    }
    else if (musuh>=0.34 && musuh<0.67){
        musuh="gunting";
    }
    else{
        musuh="kertas";
    }

    var hasil ="";
    if (kita==musuh){
        hasil="SERI";
    }
    else if(kita=="batu"){
        hasil=(musuh=="gunting") ? "MENANG" : "KALAH";
    }
    else if(kita=="gunting"){
        hasil=(musuh="batu") ? "KALAH" : "MENANG";
    }
    else if (kita=="kertas"){
        hasil=(musuh="batu") ? "MENANG" : "KALAH";
    }
    else{
        hasil="MEMASUKKAN PILIHAN YANG SALAH";
    }

    alert("PILIHAN ANDA : " + kita + "\nPILIHAN MUSUH : " + musuh +"\nHASIL : KAMU " + hasil);

    pilihan=confirm("Mau Main Lagi ??");
}

alert("TERIMA KASIH !");