'use strict'
let express=require("express");

let orm =require("orm");
let app=express();
app.use(express.static(__dirname+'/'));
app.all('*',function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(8081);
orm.connect("sqlite3:\\ C\\Users\\john\\Desktop\\201608181545\\db\\ToolsSqlite\\login", function (err, db) {
    if (err){
        console.log("bad");
    }
    else
        console.log("hello");

   /* var user = db.define("user", {
        username:
    }, {
        methods: {
            fullName: function () {
                return this.name + ' ' + this.surname;
            }
        },
        validations: {
            age: orm.enforce.ranges.number(18, undefined, "under-age")
        }
    });

    // add the table to the database
    db.sync(function(err) {
        if (err) throw err;

        // add a row to the person table
        Person.create({ id: 1, name: "John", surname: "Doe", age: 27 }, function(err) {
            if (err) throw err;

            // query the person table by surname
            Person.find({ surname: "Doe" }, function (err, people) {
                // SQL: "SELECT * FROM person WHERE surname = 'Doe'"
                if (err) throw err;

                console.log("People found: %d", people.length);
                console.log("First person: %s, age %d", people[0].fullName(), people[0].age);

                people[0].age = 16;
                people[0].save(function (err) {
                    // err.msg = "under-age";
                });
            });

        });
    });*/
});