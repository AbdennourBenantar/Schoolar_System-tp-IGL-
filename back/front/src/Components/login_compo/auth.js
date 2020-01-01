class Auth{
    constructor()
    {
        this.authentificated=false;
    }
    login(callback)
    {
        this.authentificated=true;
        callback();//a function where you made the asynchrounous actions
    }
    logout(callback)
    {
        this.authentificated=false;
        callback();
    }
    isAuthentificated()
    {
        return this.authentificated;
    }
}
export default new Auth;