class user {
    var id;
    var username;
    var password;
}

class usersevice {
    user [] users = [];
    user [] getalluser(){
    return users;
}

user getuserbyid (
    userid) {
    return users.filter(
    userid);
}
}
/**Berapa banyak kekurangan penulisan pada kode tersebut?
 * 2
*/

/** Bagian mana saja yang terjadi kekurangan pada kode tersebut? 
 * Formatting yang kurang rapi
 * Function
*/
/** Alasan
 * Formatting yang kurang rapi: posisi penulisan yang tidak lurus
 * Function: menggunakan terlalu banyak argumen pada fungsi
 */
