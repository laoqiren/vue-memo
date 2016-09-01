var db = openDatabase("Memo",'','the local dataBase of webApp vue-menmo',102400);
db.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS Memo(date TEXT,time TEXT,place TEXT,memo TEXT)');
});
var dataBase = {
    query(){
        var arr = [];
        db.transaction(function(tx){
            tx.executeSql('SELECT * FROM Memo',[],function(tx,rs){
                for(let i=0; i<rs.rows.length; i++){
                    arr.push(rs.rows[i]);
                }  
            });
        });
        //console.log(arr);
        return arr;
    },
    add(date,time,place,memo){
        db.transaction(function(tx){
            tx.executeSql('INSERT INTO Memo VALUES(?,?,?,?)',[date,time,place,memo],function(tx,rs){
                console.log('add done');
            });
        });
    },
    deleteM(index){
        console.log((this.query()))
        //var mymemos = this.query();
      //console.log(deleteTime);

        //var deleteTime = this.query()[index].time;
        /*
        db.transaction(function(tx){
            tx.executeSql('DELETE FROM Memo WHERE time = ?'[deleteTime],function(tx,rs){
                console.log('delete done');
            });
        });*/
    }
};
export default dataBase;