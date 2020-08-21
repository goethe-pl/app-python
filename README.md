![goethe.png](https://logo.goethe.pl/2/default.png)

# goethe-pl-app-python
Goethe APP with the Python Environment

+ [app-python git](https://github.com/goethe-pl/app-python)
+ [app-python wwww](https://goethe-pl.github.io/app-python/)
+ [docs](https://github.com/goethe-pl/docs)
+ [all projects](https://github.com/goethe-pl/)
+ [app.goethe.pl](https://app.goethe.pl)

## Changelog
+ [changelog](changelog.md)

## deploy

<a href="http://app.faas.ovh?clone=https://github.com/goethe-pl/app-python&start">
  <img src="https://button.faas.ovh/deploy.on.faas.png" alt="Deploy on Faas">
</a>

## Obecna wersja

![firefox_2020-07-18_16-44-17.png](docs/firefox_2020-07-18_16-44-17.png)

+ [http://test.goethe.pl/public/index.html](http://test.goethe.pl/public/index.html)

Obecnie możliwe jest wpisywanie zdania,
rozkład gramatyczny jest widoczny w pasku poniżej, gdzie każda część zdania ma inny kolor
graf generowany bezpośrednio ze spacy pozwala na zauważenie zależności

## plan w wersji v1.0.2
+ stworzyć tematy, związane z nimi słownictwo
+ przykładowe zdania z pytaniami i odpowiedziami
+ Quiz, grę 
 
## plan w wersji v1.1.0
+ implementacja grafiki
+ pierwsza wersja będzie kortzystała z gotowych grafik, bezpośrednio powiązanych z czcasownikiem czy rzeczownikiem
+ w kolejnej wersji, sztuczna inteligencja powinna wyszukiwać kontekstowe grafiki i je pokazywać
+ w przyszłości warto rozszerzyć to o monetyzację
 w postaci kanałów marketingowych udostepniających treści, które będą podczas nauki udostepniane.


## TODO

+ przygotowac zadania json
+ synchronizacja textarea z input z przecinkami w obie strony
+ konfiguracja: legenda kolorow do wyboru za pomoca radiobuttonow (jeden rozny kolor na jedna czcesc zdania)
+ lista nazw czesc zdania w tabelce/json w roznych jezykach
+ tworzenie tabel z json, jaka biblioteka robi to efektywnie i malo zajmuje + filtrowanie z memory + komendy z API

## implementation
+ unittest: https://realpython.com/pytest-python-testing/
+ KeePass: https://pypi.org/project/pykeepass/
+ translator: https://www.deepl.com/de/pro/#developer
