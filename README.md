# B2BExample

# Açıklama

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Uygulama ne yapar?

Ürünler sepete atılır, sepet üzerinden ürün adetleri düzenlenir veya ürün sepetten çıkarılır.

## Nasıl çalıştırılır.

Uygulamayı localde açabilmek için `npm start`.

`npm run build-test` uygulamayı test ortamı için derler.
`npm run build-dev` uygulamayı dev ortamı için derler.
`npm run build-prod` uygulamayı prod ortamı için derler.

Bunlara ek olarak uygulamayı docker ile de açabilirsiniz.

## Test

`ng test` unit testleri çalıştırır.
`src/app/datas` yolunda test için kullanılmak üzere örnek datalar bulunmaktadır.

## Design Pattern

Uygulama için Facade Tasarım deseni tercih edilmiştir.
Kullanılan diğer servisler (bu projede FacadeService hariç 2 adet) FacadeServis üzerinden çağrılmıştır.

## Componentler Arası Haberleşme

@ngrx/store kullanılarak Componentler arası haberleşme sağlanmıştır.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
