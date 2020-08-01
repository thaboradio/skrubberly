import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

function gridToggle() {
  $(() => {
    $('#showdiv1').click(() => {
        $('div[id^=div]').hide();
        $('#div1').show();
    });
    $('#showdiv2').click(() => {
        $('div[id^=div]').hide();
        $('#div2').show();
    });

});
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    gridToggle();
  }

}
