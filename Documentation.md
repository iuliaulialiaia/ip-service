**Keywords** <br>
SPA, React, hooks, Functional Components, FlexBox, SCSS, Responsiveness, react-router-dom, Media Queries, Sketch, Google Fonts, axios, validator

**Arhitectura**
Single Page Application <br>
Componentele `Header` si `Footer` raman mereu in pagina, in timp ce in Main sunt afisate pe rand componentele `Home`, `Add`, `Get`, `Update` si `Delete`, in functie de ruta. 

#### Layout
![Pages Layout](doc_imgs/Pages%20Layout.png)

**Rutarea** <br>
Folosesc biblioteca `react-router-dom`. <br>
Schimbarea rutei (implicit si componentei din Main) se face din Header, care este un navigation bar.

**Header** <br>
Este responsive pentru ca folosesc FlexBox. <br>
Desktop <br>
![Header 1440px wide](doc_imgs/Header%201440px%20wide.png)
Tablet <br>
![Header 768px wide](doc_imgs/Header%20768px%20wide.png)
Mobile <br>
![Header 375px wide](doc_imgs/Header%20375px%20wide.png)

**Footer** <br>
Este responsive pentru ca folosesc FlexBox. <br>
Desktop <br>
![Footer 1440px wide](doc_imgs/Footer%201440px%20wide.png)
Tablet <br>
![Footer 768px wide](doc_imgs/Footer%20768px%20wide.png)
Mobile <br>
![Footer 375px wide](doc_imgs/Footer%20375px%20wide.png)

**Home** <br>
Componenta de prezentare. <br>
Pentru responsiveness am folosit media queries, unitati relative si FlexBox. <br>
Desktop <br>
![Home 1440px wide](doc_imgs/Home%201440px%20wide.png)
Tablet <br>
![Home 950px wide](doc_imgs/Home%20950px%20wide.png)
Mobile <br>
![Home 414px wide](doc_imgs/Home%20414px%20wide.png)

**Form** <br>
Pentru responsiveness am folosit FlexBox si media queries. <br>
Desktop <br>
![Form 1440px wide](doc_imgs/Form1%201440px%20wide.png)
Tablet <br>
![Form 678px wide](doc_imgs/Form%20678px%20wide.png)
Mobile <br>
![Form 414px wide](doc_imgs/Form%20414px%20wide.png)

E format din:
* 4 input-uri pentru adresa IP <br>
* 3 div-uri pentru mesaje:
  * mesaj de informare (de la submit form pana la primirea raspunsului de la server, apare un mesaj de informare in care utilizatorul e rugat sa astepte)
  * mesaj de success (este raspunsul de la server)
  * mesaj de eroare (eroare de la server sau eroare la validarea input-urilor)
* submit button, unde se face request la server

Folosesc biblioteca `axios` pentru requests. <br>

De ce am folosit `<input type='text'>` si nu `<input type='number>`: pentru design, `<input type='number>` are 2 butoane in interiorul input-ului. <br>
Validez ca utilizatorul a introdus un numar din intervalul [0 255] la submit, inainte de request, in /src/utils/validator.js <br>
Pentru validare, folosesc functia `isInt` cu optiuni de min/max din biblioteca `validator`. Nu folosesc functia `isIP` pentru ca am nevoie sa stiu la care input a aparut eroarea, `isIP` intoarce eroare daca vreun input nu e corect.

Foloseste react states:
* `ip` este un string array care retine ip-ul introdus de la tastatura
* `errors` este un string array care retine erorile ip-ului <br>
`errors[i]` este mesajul de eroare pentru input-ul `ip[i]`, cu `i` de la 0 la 3 <br>
De exemplu, `errors[0] = 'Invalid number'`, daca utilizatorul nu a introdus un numar din intervalul [0, 255] in primul input <br>

Mesaj de informare <br>
![Form 1440px wide - Info message](doc_imgs/Form4%201440px%20wide.png)
Mesaj de succes <br>
![Get 1440px wide - Success message](doc_imgs/Get%201440px%20wide.png)
Mesaj de eroare <br>
![Form 1440px wide - Error message](doc_imgs/Form2%201440px%20wide.png)
![Form 1440px wide - Error message](doc_imgs/Form3%201440px%20wide.png)