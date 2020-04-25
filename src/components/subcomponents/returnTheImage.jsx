import React from "react";

import phpAndMySQL from "../../img/blog/phpAndMySQL.jpg";
import practicalSQLCourse from "../../img/blog/practicalSQLCourse.jpg";
import basicsOfCryptography from "../../img/blog/basicsOfCryptography.jpg";

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
                break;
            case "practicalSQLCourse":
                return practicalSQLCourse;
                break;
            case "basicsOfCryptography":
                return basicsOfCryptography;
                break;
            default:
                break;
        }
    }
}