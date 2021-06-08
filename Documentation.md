**Keywords** <br>
SPA, React, Functional Components, FlexBox, SCSS, Responsiveness, react-router-dom

**Arhitectura**
Single Page Application <br>
Componentele `Header` si `Footer` raman mereu in pagina, in timp ce in Main sunt afisate pe rand componentele `Home`, `Add`, `Get`, `Update` si `Delete`, in functie de ruta. 

#### Layout
![Pages Layout](doc_imgs/Pages Layout.png)

**Rutarea** <br>
Folosesc biblioteca `react-router-dom`. <br>
Schimbarea rutei (implicit si componentei din Main) se face din Header, care este un navigation bar.

**Header-ul** <br>
Este responsive pentru ca folosesc FlexBox. <br>
Desktop ![Header 1440px wide](doc_imgs/1440px wide.png)
Tablet ![Header 178px wide](doc_imgs/178px wide.png)
Mobile ![Header 375px wide](doc_imgs/375px wide.png)