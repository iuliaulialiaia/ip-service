**Keywords** <br>
SPA, React, Functional Components, FlexBox, SCSS, Responsiveness, react-router-dom

**Arhitectura**
Single Page Application <br>
Componentele `Header` si `Footer` raman mereu in pagina, in timp ce in Main sunt afisate pe rand componentele `Home`, `Add`, `Get`, `Update` si `Delete`, in functie de ruta. 

#### Layout
![Pages Layout](doc_imgs/Pages%20Layout.png)

**Rutarea** <br>
Folosesc biblioteca `react-router-dom`. <br>
Schimbarea rutei (implicit si componentei din Main) se face din Header, care este un navigation bar.

**Header-ul** <br>
Este responsive pentru ca folosesc FlexBox. <br>
Desktop ![Header 1440px wide](doc_imgs/Header%201440px%20wide.png)
Tablet ![Header 178px wide](doc_imgs/Header%20768px%20wide.png)
Mobile ![Header 375px wide](doc_imgs/Header%20375px%20wide.png)

**Footer-ul** <br>
Este responsive pentru ca folosesc FlexBox. <br>
Desktop ![Footer 1440px wide](doc_imgs/Footer%201440px%20wide.png)
Tablet ![Footer 178px wide](doc_imgs/Footer%20768px%20wide.png)
Mobile ![Footer 375px wide](doc_imgs/Footer%20375px%20wide.png)