import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encrypt-handler',
  templateUrl: './encrypt-handler.component.html',
  styleUrls: ['./encrypt-handler.component.css']
})
export class EncryptHandlerComponent implements OnInit {

  constructor() { }

  public resultado: string = "nada aun";
  public encryptSecretKey = "4plus2021";

  decryptData(data) {

    var Sha256 = CryptoJS.SHA256;
    var Hex = CryptoJS.enc.Hex;
    var Utf8 = CryptoJS.enc.Utf8;

    var secret_key = '4*plus2021';
    var secret_iv  = '1298324434';

    var key = Sha256(secret_key).toString(Hex).substr(0,32);
    var iv = Sha256(secret_iv).toString(Hex).substr(0,16);

    return CryptoJS.AES.decrypt(data, Utf8.parse(key), {iv: Utf8.parse(iv),}).toString(Utf8);
  }

  ngOnInit(): void {

    this.resultado = this.decryptData("wM4NZDA5gT6gYBiUQJMedLDfk8BHg9CqwtNZOO2Cjmg");
  }

}
