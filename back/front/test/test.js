//Good morning u can run tests by entering "npm run s-test" and please use chrome for better experience

var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver"); require('chromedriver');
const serverUri = "http://localhost:3000/";
const appTitle = "Tp";

var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "chrome" })
 .build();
 
browser.manage().setTimeouts({implicit:8000000,pageLoad:8000000});
 function logTitle() {
    return new Promise((resolve, reject) => {
     browser.getTitle().then(function(title) {
      resolve(title);
     });
    });
   }
   describe("Home Page", function() {
    it("Should load the home page and get title", function() {
        return new Promise((resolve, reject) => {
         browser
          .get(serverUri)
          .then(logTitle)
          .then(title => {
           assert.strictEqual(title, appTitle);
           resolve();
          })
          .catch(err => reject(err));
        });
       });
    it("Should check whether the login form is loaded", function() {
        return new Promise((resolve, reject) => {
         browser
          .findElement({ id: "form" })
          .then(elem => resolve())
          .catch(err => reject(err));
        });
       });
    it("Should fill the username field",function(){
        return new Promise((resolve,reject)=>{
            browser
            .findElement({id:"login"}).click()
            .then(elem=>resolve())
            .catch(err=>reject(err));
            browser
            .findElement({id:"login"}).click()
            .then(elem=>resolve())
            .catch(err=>reject(err));
            browser
            .findElement({id:"login"}).clear()
            .then(elem=>resolve())
            .catch(err=>reject(err));
            browser
            .findElement({id:"login"}).sendKeys("student") // si on veut tester la page d'etudiant on met .sendKeys("student") : ce dernier est un compte tudiant deja existant
            .then(elem=>resolve())
            .catch(err=>reject(err));
        });
    });
    it("Should fill the password field",function(){
        return new Promise((resolve,reject)=>{
            browser
            .findElement({id:"password"}).click()
            .then(elem=>resolve())
            .catch(err=>reject(err));
            browser
            .findElement({id:"password"}).clear()
            .then(elem=>resolve())
            .catch(err=>reject(err));
            browser
            .findElement({id:"password"}).sendKeys("django123") // meme l'etudiant "student" a le mot de pass "django123"
            .then(elem=>resolve())
            .catch(err=>reject(err));
        });
    });
    it("Submit the login form", function() {
        return new Promise((resolve, reject) => {
         browser
          .findElement({ id: "submit_btn" }).click()
          .then(elem => resolve())
          .catch(err => reject(err));
        });
       });
       if(browser.getCurrentUrl()==="http://localhost:3000/admin"){
    it("should find the sidebar element STUDENTS LIST and displays the students liste",function(){
        return new Promise((resolve,reject)=>{
            browser
          .findElement({ id: "Students-List" }).click()
          .then(elem => resolve())
          .catch(err => reject(err));
        });
    });
    it("should find the add student button and displays fields for adding a new student",function(){
        return new Promise((resolve,reject)=>{
       
        browser
          .findElement(webdriver.By.className("MTableToolbar-actions-36")).click()
          .then(elem => resolve())
          .catch(err => reject(err));    
        });
    });
    it("should fill the name field with the value NAME",function(){
        return new Promise((resolve,reject)=>{
       
        browser
          .findElement(webdriver.By.xpath("//input[@placeholder='Nom']")).click()
          .then(elem => resolve())
          .catch(err => reject(err)); 
          browser
          .findElement(webdriver.By.xpath("//input[@placeholder='Nom']")).sendKeys("NAME")
          .then(elem => resolve())
          .catch(err => reject(err));    
        });
    });
    it("should fill the Email field with the value email@esi.dz",function(){
        return new Promise((resolve,reject)=>{
       
        browser
          .findElement(webdriver.By.xpath("//input[@placeholder='Email']")).click()
          .then(elem => resolve())
          .catch(err => reject(err)); 
          browser
          .findElement(webdriver.By.xpath("//input[@placeholder='Email']")).sendKeys("email@esi.dz")
          .then(elem => resolve())
          .catch(err => reject(err));    
        });
    });
    it("should fill the group field with the value 1",function(){
        return new Promise((resolve,reject)=>{
       
        browser
          .findElement(webdriver.By.xpath("//input[@placeholder='Groupe']")).click()
          .then(elem => resolve())
          .catch(err => reject(err)); 
          browser
          .findElement(webdriver.By.xpath("//input[@placeholder='Groupe']")).sendKeys("1")
          .then(elem => resolve())
          .catch(err => reject(err));    
        });
    });
    it("should fill the password field with the value django123",function(){
        return new Promise((resolve,reject)=>{
       
        browser
          .findElement(webdriver.By.xpath("//input[@placeholder='Mot De Passe']")).click()
          .then(elem => resolve())
          .catch(err => reject(err)); 
          browser
          .findElement(webdriver.By.xpath("//input[@placeholder='Mot De Passe']")).sendKeys("django123")
          .then(elem => resolve())
          .catch(err => reject(err));    
        });
    });
    it("should find the save button and save the new student added",function(){
        return new Promise((resolve,reject)=>{
       
        browser
          .findElement(webdriver.By.xpath("//button[@title='Save']")).click()
          .then(elem => resolve())
          .catch(err => reject(err));    
        });
    });
}
        else{
        it("should find the sidebar element Liste des modules and displays la liste des modules relatives a cet etudaint si il en existe",function(){
            return new Promise((resolve,reject)=>{
                browser
                .findElement({ id: "Modules-List" }).click()
                .then(elem => resolve())
                .catch(err => reject(err));
            });
        });
        it("should find the add module button and displays fields for adding a new module",function(){
            return new Promise((resolve,reject)=>{
           
            browser
              .findElement(webdriver.By.className("MTableToolbar-actions-36")).click()
              .then(elem => resolve())
              .catch(err => reject(err));    
            });
        });
        it("should fill the name field with the value IGL",function(){
            return new Promise((resolve,reject)=>{
           
            browser
              .findElement(webdriver.By.xpath("//input[@placeholder='Nom du module']")).click()
              .then(elem => resolve())
              .catch(err => reject(err)); 
              browser
              .findElement(webdriver.By.xpath("//input[@placeholder='Nom du module']")).sendKeys("IGL")
              .then(elem => resolve())
              .catch(err => reject(err));    
            });
        });
        it("should fill the Email field with the value ZELLAGUI",function(){
            return new Promise((resolve,reject)=>{
           
            browser
              .findElement(webdriver.By.xpath("//input[@placeholder='Enseignant']")).click()
              .then(elem => resolve())
              .catch(err => reject(err)); 
              browser
              .findElement(webdriver.By.xpath("//input[@placeholder='Enseignant']")).sendKeys("ZELLAGUI")
              .then(elem => resolve())
              .catch(err => reject(err));    
            });
        });
        it("should fill the COEFFICIENT field with the value 5",function(){
            return new Promise((resolve,reject)=>{
           
            browser
              .findElement(webdriver.By.xpath("//input[@placeholder='Coefficient']")).click()
              .then(elem => resolve())
              .catch(err => reject(err)); 
              browser
              .findElement(webdriver.By.xpath("//input[@placeholder='Coefficient']")).sendKeys("5")
              .then(elem => resolve())
              .catch(err => reject(err));    
            });
        });
        it("should find the save button to save the new module added",function(){
            return new Promise((resolve,reject)=>{
           
            browser
              .findElement(webdriver.By.xpath("//button[@title='Save']")).click()
              .then(elem => resolve())
              .catch(err => reject(err));    
            });
        });
}
});
   