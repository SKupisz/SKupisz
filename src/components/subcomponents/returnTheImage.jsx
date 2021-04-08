import phpAndMySQL from "../../img/blog/phpAndMySQL.jpg";
import practicalSQLCourse from "../../img/blog/practicalSQLCourse.jpg";
import basicsOfCryptography from "../../img/blog/basicsOfCryptography.jpg";

import reactLogo from "../../img/blog/reactLogo.png";
import dotNetCoreLogo from "../../img/blog/dotNetCoreLogo.png";

export default class ReturnTheImage{
    constructor(name){
        this.name = name;
    }
    changeTheName(name){
        this.name = name;
    }
    returnTheImage(){
        switch(this.name){
            case "phpAndMySQL":
                return phpAndMySQL;
            case "practicalSQLCourse":
                return practicalSQLCourse;
            case "basicsOfCryptography":
                return basicsOfCryptography;
            case "reactLogo":
                return reactLogo;
            case "dotNetCoreLogo":
                return dotNetCoreLogo;
            default:
                break;
        }
    }
}