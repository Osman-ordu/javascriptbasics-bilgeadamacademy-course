//Use strict
'use strict'

// let ehliyetiVarMı = false
// const testiGeçtiMi = true
// if (testiGeçtiMi) ehliyetiVarMı = true

// if (ehliyetiVarMı) {
//   console.log('Araba kullanabiliyor')
// }

// // const interface = 'ses'
// // const private = 123
// const if = 456

//Functions

// function logger() {
//   console.log('Benim adım Murat')
// }
// logger(23) //calling/running/invoking a function
// logger()
// logger()
// logger()

// function meyveİşleme(elmalar, portakallar) {
//   // console.log(elmalar, portakallar)
//   const meyveSuyu = `${elmalar} elma ve ${portakallar} portakal`
//   return meyveSuyu
// }

// const elmaSuyu = meyveİşleme(5, 0) // `${elmalar} elma ve ${portakallar} portakal`
// console.log(meyveİşleme(5, 0))
// // console.log(elmaSuyu)

// const elmaPortakalSuyu = meyveİşleme(2, 4)
// console.log(elmaPortakalSuyu)

// const num = Number('23')

//Function Declarations
// const yaş1 = yaşHesap1(1986)
// function yaşHesap1(doğumYılı) {
//   return 2040 - doğumYılı
// }

//Function Expressions
// const yaşHesap2 = function (doğumYılı) {
//   const yaş = 2040 - doğumYılı
//   return yaş
// }

// const yaş2 = yaşHesap2(1986)
// const yaş3 = yaşHesap2(2002)
// console.log(yaşHesap2(1986), yaşHesap2(2002))

// const dönüşYok = function () {
//   // no return
// }
// console.log(dönüşYok()) // undefined

// function dünyanınYüzdesi1(popülasyon) {
//   return (popülasyon / 7900) * 100
// }

// const dünyanınYüzdesi2 = function (qweqwre) {
//   return (qweqwre / 7900) * 100
// }
// // console.log(dünyanınYüzdesi1(60), dünyanınYüzdesi2(60))

// const italyaYüzdesi = dünyanınYüzdesi1(50)
// console.log(italyaYüzdesi)

//Arrow Functions

// const yaşHesap2 = function (doğumYılı) {
//   return 2040 - doğumYılı
// }

// const yaşHesap3 = (doğumYılı) => 2040 - doğumYılı

// const yaş3 = yaşHesap3(1986)
// // console.log(yaş3)

// const emekliliğeKalanSüre = (doğumYılı, ad) => {
//   const yaş = 2040 - doğumYılı
//   const emeklilik = 65 - yaş
//   // return emeklilik
//   return `${ad} ${emeklilik} içinde emekli oluyor `
// }

// console.log(emekliliğeKalanSüre(1986, 'Murat'))
// console.log(emekliliğeKalanSüre(1980, 'Namık'))

// const dünyanınYüzdesi3 = (population) => (population / 7900) * 100

// console.log(dünyanınYüzdesi3(85))

//Function Calling Other Functions

// function meyveleriParçala(meyve) {
//   return meyve * 3
// }

// function meyveİşleme(elmalar, portakallar) {
//   const elmaParçaları = meyveleriParçala(elmalar)
//   const portakalParçaları = meyveleriParçala(portakallar)
//   // console.log(elmalar, portakallar)
//   const meyveSuyu = `${elmaParçaları} elma parçası ve ${portakalParçaları} portakal parçası `
//   return meyveSuyu
// }

// console.log(meyveİşleme(2, 3))

// const nüfusuTanımla = (ülke, nüfus) => {
//   const yüzde = dünyanınYüzdesi3(nüfus)
//   const tanım = `${ülke}'de ${nüfus} milyon insan var, ki bu da dünyanın yaklaşık %${yüzde}'sidir`
//   console.log(tanım)
// }

// nüfusuTanımla('USA', 350)

// const yaşHesap = function (doğumYılı) {
//   return 2040 - doğumYılı
// }

// const emekliliğeKalanSüre = function (doğumYılı, ad) {
//   const yaş = yaşHesap(doğumYılı)
//   const emeklilik = 65 - yaş
//   if (emeklilik > 0) {
//     console.log(`${ad} ${emeklilik} içinde emekli oluyor `)
//     return emeklilik
//   } else {
//     console.log('🎉✨🎉')
//     return -1
//   }
//   // return `${ad} ${emeklilik} içinde emekli oluyor `
// }

// console.log(emekliliğeKalanSüre(1986, 'Murat'))
// console.log(emekliliğeKalanSüre(1959, 'Namık'))

//---------------Array Intro---------------------

// const arkadaş1 = 'Namık'
// const arkadaş2 = 'Engin'
// const arkadaş3 = 'Ayşe'

// const arkadaş = ['Namık', 'Engin', 'Ayşe']
// console.log(arkadaş)

// const yıl = new Array(1986, 12657, 123, 1233)
// // console.log(yıl)
// console.log(arkadaş[2])
// console.log(arkadaş.length)
// console.log(arkadaş[arkadaş.length - 1])
// arkadaş[2] = 'Ela'
// console.log(arkadaş)

// arkadaş = ['Sema', 'Ali'] ---KuralDışı

// const ad = 'Murat'

// const murat = [ad, 'Akdağ', 2040 - 1986, 'öğretmen', arkadaş]

// console.log(murat)
// console.log(murat.length)

//----------Exercise---------------
// const yaşHesap = function (doğumYılı) {
//   return 2040 - doğumYılı
// }

// const yıllar = [1986, 1967, 2002, 2010, 2018]

// const yaş1 = yaşHesap(yıllar[0])
// console.log(yaş1)
// const yaş2 = yaşHesap(yıllar[1])
// const yaş3 = yaşHesap(yıllar[yıllar.length - 1])
// console.log(yaş1, yaş2, yaş3)

// const yaşlar = [
//   yaşHesap(yıllar[0]),
//   yaşHesap(yıllar[1]),
//   yaşHesap(yıllar[yıllar.length - 1]),
// ]

// console.log(yaşlar)

// function dünyanınYüzdesi1(popülasyon) {
//   return (popülasyon / 7900) * 100
// }

// const popülasyonlar = [10, 1441, 330, 84]
// console.log(popülasyonlar.length === 4)
// const yüzdeler = [
//   dünyanınYüzdesi1(popülasyonlar[0]),
//   dünyanınYüzdesi1(popülasyonlar[1]),
//   dünyanınYüzdesi1(popülasyonlar[2]),
//   dünyanınYüzdesi1(popülasyonlar[3]),
// ]

// console.log(yüzdeler)

//-------Element Ekleme-------------
// const arkadaş = ['Namık', 'Engin', 'Ayşe']

// const yeniUzunluk = arkadaş.push('Ela')
// console.log(arkadaş)
// console.log(yeniUzunluk)

// arkadaş.unshift('Yavuz')
// console.log(arkadaş)

//------------Element Kaldırma----------

// arkadaş.pop()
// console.log(arkadaş)
// const kaldırılan = arkadaş.pop()
// console.log(kaldırılan)
// console.log(arkadaş)

// arkadaş.shift()
// console.log(arkadaş)

// console.log(arkadaş.indexOf('Engin'))
// console.log(arkadaş.indexOf('Fatma'))
// arkadaş.push(23)
// console.log(arkadaş.includes(23))
// // console.log(arkadaş.includes('Engin'))
// // console.log(arkadaş.includes('Fatma'))

// if (arkadaş.includes('Engin')) {
//   console.log('Engin burada')
// }

// const komşular = ['Norveç', 'İsveç', 'Rusya']
// komşular.push('Ütopya')
// console.log(komşular)

// komşular.pop()
// console.log(komşular)

// if (!komşular.includes('Almanya')) {
//   console.log('Muhtemelen orta Avrupa ülkesi değil')
// }

// komşular[komşular.indexOf('İsveç')] = 'İsveç Cumhuriyeti'
// console.log(komşular)

//----------Intro to Object----------------

// const muratDizisi = [
//   'Murat',
//   'Akdağ',
//   2040 - 1986,
//   'öğretmen',
//   ['Kerem', 'Tuğçe', 'Bora'],
// ]

// const murat = {
//   isim: 'Murat',
//   soyad: 'Akdağ',
//   yaş: 2040 - 1986,
//   iş: 'Öğretmen',
//   arkadaş: ['Kerem', 'Tuğçe', 'Bora'],
// }

// console.log(murat)

// const ülkem = {
//   ülke: 'Türkiye',
//   başkent: 'Ankara',
//   dil: 'Türkçe',
//   nüfus: 90,
//   komşular: ['Gürcistan', 'Irak', 'İran'],
// }

// const murat = {
//   isim: 'Murat',
//   soyad: 'Akdağ',
//   yaş: 2040 - 1986,
//   iş: 'Öğretmen',
//   arkadaşlar: ['Kerem', 'Tuğçe', 'Bora'],
// }
// console.log(murat)
// console.log(murat.soyad)
// console.log(murat['soyad'])

// const isim = 'ad'
// console.log(murat['soy' + isim])
// console.log(murat.soyad)

// const ilgili = prompt(
//   'murat hakkında ne bilmek istiyorsunuz? ad,soyad,yaş,iş ve arkadaşlar arasında seçim yapın'
// )
// // console.log(ilgili)
// // console.log(murat[ilgili])

// if (murat[ilgili]) {
//   console.log(murat[ilgili])
// } else {
//   console.log(
//     'yanlış istek. murat hakkında ne bilmek istiyorsunuz? ad,soyad,yaş,iş ve arkadaşlar arasında seçim yapın'
//   )
// }

// murat.konum = 'Kadıköy'
// murat['twitter'] = '@murat'

// console.log(murat)

// //----------Mini Challenge------------
// //"Murat'ın üç arkadaşı var ve en iyi arkadaşı Kerem'dir"

// console.log(
//   `${murat.isim}'ın ${murat.arkadaşlar.length} arkadaşı var ve en iyi arkadaşı ${murat.arkadaşlar[0]}`
// )
//Finlandiya'da 6 milyon Fince konuşan insan, 3 komşu ülkesi ve Helsinki adında bir başkenti var'
// const ülkem = {
//   ülke: 'Türkiye',
//   başkent: 'Ankara',
//   dil: 'Türkçe',
//   nüfus: '90',
//   komşular: ['Gürcistan', 'Irak', 'İran'],
// }

// console.log(
//   `${ülkem.ülke}'da ${ülkem.nüfus} milyon ${ülkem.dil} konuşan insan, ${ülkem.komşular.length} komşu ülkesi ve ${ülkem.başkent} adında bir başkent var`
// )

// ülkem.nüfus += 2

// ülkem['nüfus'] -= 2
// console.log(ülkem.nüfus)

// const murat = {
//   isim: 'Murat',
//   soyad: 'Akdağ',
//   doğumYılı: 1986,
//   iş: 'Öğretmen',
//   arkadaşlar: ['Kerem', 'Tuğçe', 'Bora'],
//   ehliyetiVarMı: false,
// yaşHesap: function (doğumYılı) {
//   return 2040 - doğumYılı
// },
// yaşHesap: function () {
//   // console.log(this)
//   return 2040 - this.doğumYılı
//   // },
//   yaşHesap: function () {
//     this.yaş = 2040 - this.doğumYılı
//     return this.yaş
//   },
//   özet: function () {
//     return `${this.isim} ${this.yaşHesap()} yaşında ${
//       this.iş
//     }'dir ve ehliyeti ${this.ehliyetiVarMı ? 'var' : 'yok'}`
//   },
// }
// console.log(murat.özet())
//Challenge
//`Murat 54 yaşında öğretmendir ve ehliyeti var`

// const yaşHesap = function (doğumYılı) {
//   return 2040 - doğumYılı
// }
// "this"

// function yaşHesap1(doğumYılı) {
//   return 2040 - doğumYılı
// }

// console.log(murat2.yaşHesap())
// console.log(murat['yaşHesap'](1986))

// console.log(murat.yaşHesap())
// console.log(murat.yaş)
// console.log(murat.yaş)
// console.log(murat.yaş)

//------------Loop--------------
// console.log('ağırlık kaldırmak 1.tekrar')
// console.log('ağırlık kaldırmak 2.tekrar')
// console.log('ağırlık kaldırmak 3.tekrar')
// console.log('ağırlık kaldırmak 4.tekrar')
// console.log('ağırlık kaldırmak 5.tekrar')
// console.log('ağırlık kaldırmak 6.tekrar')
// console.log('ağırlık kaldırmak 7.tekrar')
// console.log('ağırlık kaldırmak 8.tekrar')
// console.log('ağırlık kaldırmak 9.tekrar')
// console.log('ağırlık kaldırmak 10.tekrar')

//Koşul doğru olduğu sürece for döngüsü çalışır
// for (let tekrar = 1; tekrar <= 30; tekrar++) {
//   console.log(`ağırlık kaldırmak ${tekrar}.tekrar`)
// }

// for (let seçmen = 1; seçmen <= 50; seçmen++) {
//   console.log(`Seçmen ${seçmen}`)
// }

// for (let mult = 1; mult <= 100; mult++) {
//   let mult1 = 2
//   mult1 *= mult
//   console.log(`2 x ${mult} = ${mult1}`)
// }

// for (let i = 1; i <= 5; i = i + 3) {
//   console.log(`${i + 1}'i kontrol et`)
// }

// const cl = (txt) => console.log(txt)
// cl(`murat`)

// for (let rep = 1; rep <= 10; rep = ++rep) {
//   console.log(`ağırlık kaldırmak tekrar`)
// }

// for (a = 1; a <= 50; a++) {
//   console.log('Bişeyler')
// }

// const muratDizisi = [
//   'Murat',
//   'Akdağ',
//   2040 - 1986,
//   'öğretmen',
//   ['Kerem', 'Tuğçe', 'Bora'],
//   true,
// ]
// console.log(muratDizisi[0])
// console.log(muratDizisi[1])
// console.log(muratDizisi[2])
// console.log(muratDizisi[3])
// console.log(muratDizisi[4])
// const türler = []

// for (let i = 0; i < muratDizisi.length; i++) {
//   console.log(muratDizisi[i], typeof muratDizisi[i])
//   // türler[0] = 'metin'
//   //Türler dizisini doldurmak
//   türler[i] = typeof muratDizisi[i]
//   // türler.push(typeof muratDizisi[i])
// }

// console.log(türler)

// const yıllar = [1974, 1980, 1986, 2002]
// const yaşlar = []

// for (let i = 0; i < yıllar.length; i++) {
//   yaşlar.push(2040 - yıllar[i])
// }
// console.log(yaşlar)

//continue&break
// const muratDizisi = [
//   'Murat',
//   'Akdağ',
//   2040 - 1986,
//   'öğretmen',
//   ['Kerem', 'Tuğçe', 'Bora'],
//   true,
// ]
// for (let i = 0; i < muratDizisi.length; i++) {
//   if (typeof muratDizisi[i] !== 'string') continue
//   console.log(muratDizisi[i], typeof muratDizisi[i])
// }
//-------------------break-------------
// const muratDizisi = [
//   'Murat',
//   'Akdağ',
//   2040 - 1986,
//   'öğretmen',
//   ['Kerem', 'Tuğçe', 'Bora'],
//   true,
// ]

// for (let i = 0; i < muratDizisi.length; i++) {
//   if (typeof muratDizisi[i] === 'number') break
//   console.log(muratDizisi[i], typeof muratDizisi[i])
// }

// function dünyanınYüzdesi1(popülasyon) {
//   return (popülasyon / 7900) * 100
// }
// const popülasyon = [10, 1441, 330, 90]
// const yüzdeler2 = [10]

// for (let i = 0; i < popülasyon.length; i++) {
//   yüzdeler2.push(dünyanınYüzdesi1(popülasyon[i]))
// }
// console.log(yüzdeler2)

// const muratDizisi = [
//   'Murat',
//   'Akdağ',
//   2040 - 1986,
//   'öğretmen',
//   ['Kerem', 'Tuğçe', 'Bora'],
//   true,
// ]

// //0,1,2,3,4
// //4,3,2,1,0

// for (let i = muratDizisi.length - 1; i >= 0; i--) {
//   console.log(i, muratDizisi[i])
// }

// for (let egzersiz = 1; egzersiz < 4; egzersiz++) {
//   console.log(`${egzersiz} numaralı egzersiz`)
//   for (let tekrar = 1; tekrar <= 5; tekrar++) {
//     console.log(`${egzersiz}- Egzersiz, ${tekrar} Ağırlık kaldırma `)
//   }
// }

// const komşularınListesi = [
//   ['Kanada', 'Meksika'],
//   ['İspanya'],
//   ['Norveç', 'İsveç', 'Rusya'],
// ]

// for (let i = 0; i < komşularınListesi.length; i++) {
//   for (let y = 0; y < komşularınListesi[i].length; y++) {
//     console.log(`Komşu: ${komşularınListesi[i][y]}`)
//   }
// }

//-------------while loop------------------

// for (let tekrar = 1; tekrar <= 10; tekrar++) {
//   console.log(`ağırlık kaldırmak ${tekrar}.tekrar`)
// }

// let tekrar = 1
// while (tekrar <= 10) {
//   console.log(`ağırlık kaldırmak ${tekrar}.tekrar`)
//   tekrar++
// }

// let zar = Math.trunc(Math.random() * 6) + 1
// // console.log(zar)

// while (zar !== 6) {
//   console.log(`${zar} rakamını attın`)
//   zar = Math.trunc(Math.random() * 6) + 1
//   if (zar === 6) {
//     console.log('Loop bitmek üzere')
//   }
// }

//---------------while challenge-----------
// function dünyanınYüzdesi1(popülasyon) {
//   return (popülasyon / 7900) * 100
// }
// const popülasyon = [10, 1441, 330, 90]
// const yüzdeler3 = []
// let i = 0
// while (i < popülasyon.length) {
//   const yüzde = dünyanınYüzdesi1(popülasyon[i])
//   yüzdeler3.push(yüzde)
//   i++
// }
// console.log(yüzdeler3)

'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// // const p = document.querySelector('.p');
// // p.textContent = 'Benim adım Murat';
// // alert('Hazır Metin');
// // p.style.color = 'red';

// // const p = document.querySelector('.p');
// // setTimeout(function () {
// //   p.textContent = 'Benim adım Murat';
// // }, 5000);
// // p.style.color = 'red';

// // function testFonksiyon() {
// //   console.log('setTimeout fonksiyonu çalıştı');
// // }
// // setTimeout(testFonksiyon, 3000);

// // let sayılar = [1, 2, 3, 5, 8, 10];

// // let yeniDizi = sayılar.map(function (değer) {
// //   return değer * 5;
// // });

// // console.log(yeniDizi.toString());
// // [1, 2, 3].map(v => v + 2);

// // const img = document.querySelector('.dog');
// // img.src = 'dog.jpg';
// // img.addEventListener('load', function () {
// //   img.classList.add('fadeIn');
// // });

// // p.style.width = '300px';

// // function Kullanici(isim) {
// //   this.isim = isim;
// //   this.yöneticiMi = false;
// // }

// // let kullanici = new Kullanici('Murat');

// // alert(kullanici.isim);
// // alert(kullanici.yöneticiMi);

// // function Kullanici(isim) {
// //  //this = {}
// //  // bu nesneye yeni özellikler ekle
// //   this.isim = isim;
// //   this.yöneticiMi = false;
// //   // return this;
// // }

// // let kullanici = new Kullanici('Murat');

// // // let kullanici = {
// // //  isim : "Murat",
// // //  yöneticiMi : false,
// // // }
// // new Kullanici("Namık")

// // alert(kullanici.isim);
// // alert(kullanici.yöneticiMi);

// // const ülkeBilgisiAl = function (ülke) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`);
// //   request.send();
// //   // console.log(request.responseText);
// //   request.addEventListener('load', function () {
// //     // console.log(this.responseText);
// //     const [data] = JSON.parse(this.responseText);
// //     // const data = JSON.parse(this.responseText)[0];
// //     console.log(data);
// //     const languages = Object.values(data.languages);
// //     console.log(languages);
// //     const currencies = Object.values(data.currencies);
// //     console.log(currencies[0]);
// //     const html = `  <article class="country">
// //           <img class="country__img" src="${data.flags.png}" />
// //           <div class="country__data">
// //             <h3 class="country__name">${data.name.common}</h3>
// //             <h4 class="country__region">${data.region}</h4>
// //             <p class="country__row"><span>👫</span>${(
// //               +data.population / 1000000
// //             ).toFixed(1)}</p>
// //             <p class="country__row"><span>🗣️</span>${languages[0]}</p>
// //             <p class="country__row"><span>💰</span>${currencies[0].name}</p>
// //           </div>
// //         </article>`;
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };
// // ülkeBilgisiAl('turkey');
// // ülkeBilgisiAl('italy');
// // ülkeBilgisiAl('germany');

// const ülkeyiGöster = function (data, className = '') {
//   const languages = Object.values(data.languages);
//   // console.log(languages);
//   const currencies = Object.values(data.currencies);
//   // console.log(currencies[0]);
//   const html = `  <article class="country ${className}">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//             <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//           </div>
//         </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// const hataGöster = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };
// const ülkeVeKomşuÜlkeBilgisiAl = function (ülke) {
//   //1. Ülke İçin Ajax Çağrısı
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`);
//   request.send();
//   // console.log(request.responseText);
//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     // const data = JSON.parse(this.responseText)[0];
//     // console.log(data);
//     //1.Ülkeyi Göster
//     ülkeyiGöster(data);
//     //Komşu Ülkeyi Al
//     const [komşu] = data.borders;
//     // console.log(komşu);
//     if (!komşu) return;
//     //2. Ajax Çağrısı Yap
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${komşu}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       // console.log(data2);
//       ülkeyiGöster(data2, 'neighbour');
//       // console.log(this.responseText);
//     });
//   });
// };
// // ülkeVeKomşuÜlkeBilgisiAl('turkey');
// // ülkeVeKomşuÜlkeBilgisiAl('spain');

// //--------Object Methodları Başlangıç-----------------

// // let kullanıcı = {
// //   adı : "Murat",
// //   yaşı: 36
// // }

// // Object.keys(kullanıcı) ==> [adı,yaşı]
// // Object.values(kullanıcı) ==> ["Murat", 36]
// // Object.entries(kullanıcı) ==> [["adı","Murat"], ["yaşı", 36]]

// //Örnek2
// // const object1 = {
// //   a: 'Metin',
// //   b: 42,
// //   c: false,
// // };

// // console.log(Object.keys(object1));
// // console.log(Object.values(object1));
// // console.log(Object.entries(object1));

// //--------Object Methodları Bitiş-----------------
// // let personel = {
// //   adi: 'Murat',
// //   soyadi: 'Akdağ',
// // };

// // let isim = personel.adi;
// // let surname = personel.soyadi;
// // let { isim: adi, surname: soyadi } = personel;
// // console.log(isim, surname);

// // let personel = ['Murat', 'Namık', 'Berna'];
// // // let p1 = personel[0];
// // // let p2 = personel[1];
// // // let p3 = personel[2];
// // // console.log(p1, p2, p3);

// // let [p1, p2, p3] = personel;
// // console.log(p1, p2, p3);

// //-----SetTimeOut CallBack Hell Start ---------------

// // setTimeout(() => {
// //   console.log('1 saniye geçti');
// //   setTimeout(() => {
// //     console.log('2 saniye geçti');
// //     setTimeout(() => {
// //       console.log('3 saniye geçti');
// //       setTimeout(() => {
// //         console.log('4 saniye geçti');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);
// //-----SetTimeOut CallBack Hell End ---------------

// //----Promise && Fetch API Start-------------

// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`);
// //   request.send();

// // const request = fetch('https://restcountries.com/v3.1/name/turkey');
// // console.log(request);

// // const ülkeBilgisiAl = function (ülke) {
// //   fetch(`https://restcountries.com/v3.1/name/${ülke}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       ülkeyiGöster(data[0]);
// //     });
// // };

// // ülkeBilgisiAl('turkey');
// const getJSON = function (url, hataMsj = 'Bir şeyler ters gitti') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${hataMsj} (${response.status})`);
//     return response.json();
//   });
// };

// // const ülkeBilgisiAl = function (ülke) {
// //   //Ülke 1
// //   fetch(`https://restcountries.com/v3.1/name/${ülke}`)
// //     .then(
// //       response => {
// //         console.log(response);
// //         if (!response.ok)
// //           throw new Error(`Ülke bulunamadı (${response.status})`);
// //         return response.json();
// //       }
// //       // err => alert(err)
// //     )
// //     .then(data => {
// //       ülkeyiGöster(data[0]);
// //       // const komşu = data[0].borders[0];
// //       const komşu = 'wqwqwqw';
// //       if (!komşu) return;
// //       //Ülke 2
// //       return fetch(`https://restcountries.com/v3.1/alpha/${komşu}`);

// //       //----------Hatalı Promise Kullanma----------
// //       //  fetch(`https://restcountries.com/v3.1/alpha/${komşu}`).then(respone => respone.json());
// //       // return 23;
// //     })
// //     .then(response => {
// //       if (!response.ok) throw new Error(`Ülke bulunamadı (${response.status})`);
// //       response.json();
// //     })
// //     .then(data => ülkeyiGöster(data[0], 'neighbour'))
// //     .catch(err => {
// //       console.log(`${err} 🧨🧨🧨`);
// //       hataGöster(`Bir şeyler ters gitti 🎃🎃🎃 ${err.message}`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// //   // .then(data => alert(data));
// // };
// const ülkeBilgisiAl = function (ülke) {
//   //Ülke 1
//   getJSON(`https://restcountries.com/v3.1/name/${ülke}`, 'Ülke Bulunamadı')
//     // fetch(`https://restcountries.com/v3.1/name/${ülke}`)
//     //   .then(
//     //     response => {
//     //       console.log(response);
//     //       if (!response.ok)
//     //         throw new Error(`Ülke bulunamadı (${response.status})`);
//     //       return response.json();
//     //     }
//     //     // err => alert(err)
//     //   )
//     .then(data => {
//       ülkeyiGöster(data[0]);
//       console.log(data[0]);
//       if (!data[0].borders) throw new Error('Komşu Yok');
//       const komşu = data[0].borders[0];
//       // const komşu = 'wqwqwqw';
//       if (!komşu) return;
//       //Ülke 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${komşu}`,
//         'Ülke Bulunamadı'
//       );
//       // return fetch(`https://restcountries.com/v3.1/alpha/${komşu}`);

//       //----------Hatalı Promise Kullanma----------
//       //  fetch(`https://restcountries.com/v3.1/alpha/${komşu}`).then(respone => respone.json());
//       // return 23;
//     })
//     // .then(response => {
//     //   if (!response.ok) throw new Error(`Ülke bulunamadı (${response.status})`);
//     //   response.json();
//     // })
//     .then(data => ülkeyiGöster(data[0], 'neighbour'))
//     .catch(err => {
//       // console.log(`${err} 🧨🧨🧨`);
//       hataGöster(`Bir şeyler ters gitti 🎃🎃🎃 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
//   // .then(data => alert(data));
// };
// btn.addEventListener('click', function () {
//   ülkeBilgisiAl('turkey');
// });

// // ülkeBilgisiAl('australia');

// const benNeredeyim = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=251328541052023517027x14455`
//   )
//     .then(res => {
//       if (!res.ok)
//         throw new Error(`Geocoding ile ilgili problem ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`${data.country}, ${data.city}'desiniz`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Ülke bulunamadı (${res.status})`);
//       return res.json();
//     })
//     .then(data => ülkeyiGöster(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

// // benNeredeyim(52.508, 13.381);
// // benNeredeyim(19.037, 72.873);
// // benNeredeyim(-33.933, 18.474);

// console.log('Testi başlasın');
// setTimeout(() => console.log('0 saniye zamanlayıcısı'), 0);
// Promise.resolve('Çözülmüş promise 1').then(res => console.log(res));
// Promise.resolve('Çözülmüş promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });
// console.log('Test bitti');
