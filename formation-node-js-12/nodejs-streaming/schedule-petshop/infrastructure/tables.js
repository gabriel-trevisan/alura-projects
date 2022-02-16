class Tables {
    init(connection){
        this.connection = connection;

        this.createServices();
        this.createPets();
    }

    createServices(){
        const sql = 'CREATE TABLE IF NOT EXISTS services (id int NOT NULL AUTO_INCREMENT, customer varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, date datetime NOT NULL, creationDate datetime NOT NULL, status varchar(20) NOT NULL, comments text, PRIMARY KEY(id))'

        this.connection.query(sql, error => {
            if(error){
                console.log(error);
            } else {
                console.log("Table 'services' was created!");
            }
        })

    }

    createPets(){
        const sql = "CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, name varchar(50), image varchar(200), PRIMARY KEY (id))"

        this.connection.query(sql, error => {
            if(error){
                console.log(error);
            } else {
                console.log("Table 'pets' was created");
            }
        })
    }
}

module.exports = new Tables