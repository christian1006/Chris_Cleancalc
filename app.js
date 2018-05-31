var app: {
    db: {},
    next_id: 0,
    create: function(newThing) {
        if(newThing !== ''){
            this.db[this.next_id] = newThing;
            this.next_id ++;
            console.log("THING WAS ADDED")
            return 'THING WAS ADDED';
        }else{
            console.log("ERROR")
            return 'new value was an empty string, nopes.';
        }
    },
    read: function(ID) {
        if(this.db[ID]){
            return this.db[ID]; 
        } else {
            return 'NOT FOUND';  
        }
    },
    update: function(ID, new_value) {
        var returner = '';
        return returner 
    },
    delete: function(ID) {
        if(this.db[ID]){
            this.db[ID] = undefined;
            console.log('item WAS DELETED');
        } else{
            console.log('UNKNOWN ID');
        }
    }
};


function app_handler() {
    this.db[ID] {
        this.db[ID]
    }

    var result = app.create(user_input);

    
}