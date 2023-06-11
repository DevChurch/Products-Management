import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";
@Component({
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css'] 
})
export class ProductListComponent implements OnInit,OnDestroy{

    private _productService;
    constructor(productService:ProductService)
    {
        this._productService=productService;
    }

    pageTitle: string = 'Product List';
    imageWidth:number =50;
    imageMargin:number =2;
    showImage:boolean=false;
    errorMessage: string= '';
    sub!:Subscription;

    private _listFilter:string = '';
    get listFilter():string{
        return this._listFilter;
    }

    set listFilter(value: string)
    {
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[]=[];

    performFilter(filterBy:string): IProduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }

    onNotify(message:string):void{ this.pageTitle = this.pageTitle + message }

    products:IProduct[] =[];

    toggleImage(): void{
        this.showImage= !this.showImage;
    }
   
    ngOnInit(): void{
        console.log('In onInit');
        this.sub = this._productService.getproducts().subscribe({
            next: products => {this.products = products;
                this.filteredProducts = this.products;  
            },
            error: err => this.errorMessage = err
        });
      //  
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
