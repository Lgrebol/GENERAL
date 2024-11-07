export class User {
    private _name!:string;
    private _email!:string;
    private _password!:string;
    private _selectedLanguage!:string;

    private _languages:string[]=["català","castellà","anglès","francès","alemany"].sort();

    isDisabled(repeatPassword:string) {
        return this.name==="" || this.email==="" || this.password==="" || this.selelectedLanguage===""|| this.password!==repeatPassword ||
               this.name===undefined || this.password===undefined || repeatPassword===undefined;
    }


  get languages():string[] { return this._languages; }
  get name():string {return this._name; }
  get email():string {return this._email; }
  get password():string { return this._password; }
  

  set selelectedLanguage(language:string) { this._selectedLanguage=language; }
  set name(name:string) { this._name=name;}
  set email(email:string) { this._email=email;}
  set password(password:string) { this._password=password;}
  
}