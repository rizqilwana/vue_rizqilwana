class kendaraan {
    var total roda = 0;
    var kecepatanperjam = 0;
}

class mobil
extends kendaraan {
    void bejalan () {
         tambahkecepatan(10);
    }
         tambahkecepatan(
             var kecepatanbaru) {
                 kecepatanperjam = kecepatan perjam + kecepatanbaru;
             }
}

void main (){
    mobilcepat = new mobil();
    mobilcepat.bejalan();
    mobilcepat.bejalan();
    mobilcepat.bejalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}