export class User {
    
    constructor(email, password){
        this.email=email;
        this.password=password;
    }
    isAdmin (){
        return this.admin;
    }
 
};

export class Admin extends User{
   
   constructor(email,password){
       super(email,password);
       this.admin=true;
   }
  
};