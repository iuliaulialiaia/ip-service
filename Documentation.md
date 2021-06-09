**Keywords** <br>
SPA, React, Functional Components, FlexBox, SCSS, Responsiveness, react-router-dom, Media Queries, Sketch

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
![Header 178px wide](doc_imgs/Header%20768px%20wide.png)
Mobile <br>
![Header 375px wide](doc_imgs/Header%20375px%20wide.png)

**Footer** <br>
Este responsive pentru ca folosesc FlexBox. <br>
Desktop <br>
![Footer 1440px wide](doc_imgs/Footer%201440px%20wide.png)
Tablet <br>
![Footer 178px wide](doc_imgs/Footer%20768px%20wide.png)
Mobile <br>
![Footer 375px wide](doc_imgs/Footer%20375px%20wide.png)

**Home** <br>
Componenta de prezentare. <br>
Pentru responsiveness am folosit media queries, unitati relative si FlexBox. <br>
Desktop <br>
![Home 1440px wide](doc_imgs/Home%201440px%20wide.png)
Tablet <br>
![Home 178px wide](doc_imgs/Home%20950px%20wide.png)
Mobile <br>
![Home 375px wide](doc_imgs/Home%20414px%20wide.png)