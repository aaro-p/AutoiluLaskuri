# AutoiluLaskuri
Solidabis koodaushaasteen pohjalta tehty projekti

Tein tämän projektin alunperin vanilla javascriptillä keväällä 2021. Tein nyt projektin uudestaan reactilla, pääsin soveltamaan tässä koulussa opittuja asioista reactista.
Ongelma vaikutti mielenkiintoiselta, joten halusin tehdä oman ratkaisuni, vaikka en kerennyt osallistumaan varsinaiseen haasteeseen.
Tutustuin projektin aika myös Ant Design UI libraryyn, jolla UI on tehty.

netlify: https://aarop-autoilulaskuri.netlify.app/

# Installation:

`npm install`


# To Start Server:

`npm run start`

# Sovelluksen kuvaus
Sovelluksen tulee pystyä suorittamaan vertailu matka-ajan ja polttoaineen kulutuksen välillä kahden eri valitun nopeuden mukaan: 
käyttäjä ilmoittaa saman matkustettavan etäisyyden samalla kulkuneuvotyypillä eri nopeuksilla ja sovellus laskee miten paljon nopeammin käyttäjä on perillä ja kuinka paljon enemmän polttoainetta tähän kuluu. Etäisyyden sekä kulkuneuvotyypin tulee siis olla molemmissa samat. Sovelluksen tulee pystyä näyttämään web-käyttöliittymässä molemmista annetuista matkanopeuksista käytetty aika ja polttoaine, sekä näiden kahden ero.

Sovelluksessa tulee pystyä tarkastelemaan kolmen erilaisen auton tuloksia. Autojen bensankulutus kasvaa 1.009 kulmakertoimella. Eli jos auton nopeus kasvaa 1km/h, niin bensankulutus kasvaa 1.009 kertaiseksi. Eri autojen bensakulutus 1km/h nopeudella on seuraava:

    Auto A: 3l / 100km
    Auto B: 3.5l / 100km
    Auto C: 4l / 100km
