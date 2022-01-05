export class UserModel {
    nom: string="";
    prenom: string="";
    email: string="";
    password: string="";
    
    constructor(public unom: string, public uprenom: string,public uemail: string,public upassword: string) {
        this.nom=unom;
        this.email=uemail;
        this.prenom=uprenom;
        this.password=upassword;
    }
  }