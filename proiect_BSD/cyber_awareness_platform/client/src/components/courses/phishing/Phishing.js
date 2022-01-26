import React from "react";
import { useState, useEffect, useContext } from "react";
import "./Phishing.scss";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TitleIcon from "@mui/icons-material/Title";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import SourceRoundedIcon from "@mui/icons-material/SourceRounded";
import PhishingHooksTitle from "/home/vlad/proiect_bsd_final/proiect_BSD/cyber_awareness_platform/client/src/images/phishing_hooks_title.jpg";

function Phishing() {
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);
  const [p4, setP4] = useState(false);
  const [p5, setP5] = useState(false);
  const [p6, setP6] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const funcP1 = () => {
    setP1(!p1);
  };
  const funcP2 = () => {
    setP2(!p2);
  };
  const funcP3 = () => {
    setP3(!p3);
  };
  const funcP4 = () => {
    setP4(!p4);
  };
  const funcP5 = () => {
    setP5(!p5);
  };
  const funcP6 = () => {
    setP6(!p6);
  };
  const funcAdvanced = () => {
    setAdvanced(!advanced);
  };

  return (
    <div class="phishing-body">
      <div class="phishing-title-image">
        <img src={PhishingHooksTitle} alt="phishing-image"></img>
      </div>
      <div class="intro-text">
        <h2>Ce este Phishingul?</h2>
        <p>
          Phishingul este o infracțiune cibernetică în care o țintă sau ținte
          sunt contactate prin e-mail, telefon sau mesaj text de către cineva
          care se prezintă drept o instituție legitimă pentru a atrage
          persoanele să furnizeze date sensibile, cum ar fi informații de
          identificare personală, detalii bancare și carduri de credit și
          parole.
        </p>
        <h2>De ce m-ar interesa?</h2>
        <p>
          Informațiile obtinute prin phishing sunt apoi folosite pentru a accesa
          conturi importante și pot duce la furt de identitate și pierderi
          financiare.
        </p>
        <h2>
          <br />
          <br />
          <br />
          La ce ar trebui sa fiu atent?
        </h2>
      </div>
      <div class="timeline">
        <div class="container left">
          <div class="date date1">Felicitari! Ai castigat!</div>
          <i class="icon fas fa-fish"></i>
          <div class="content">
            <h2>Mesaje prea bune ca sa fie adevarate</h2>
            <p>
              Ofertele profitabile și declarațiile atrăgătoare sau care captează
              atenția sunt concepute pentru a atrage imediat atenția oamenilor.
              De exemplu, mulți susțin că ați câștigat un iPhone, o loterie sau
              un alt premiu generos. Doar nu faceți clic pe niciun e-mail
              suspect. Amintiți-vă că, dacă pare bine să fie adevărat, probabil
              că este!
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="date date2">Actioneaza acum!</div>
          <i class="icon fas fa-exclamation-circle"></i>
          <div class="content">
            <h2>Un impuls de moment/ o urgenta</h2>
            <p>
              Uneori, vă vor spune că va vor suspenda contul, dacă nu vă
              actualizați imediat datele personale
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="date date3">Urmareste acest link!</div>
          <i class="icon fas fa-anchor"></i>
          <div class="content">
            <h2>Linkuri</h2>
            <p>
              Este posibil ca un link să nu fie tot ce pare a fi. Trecerea cu
              mouse-ul peste un link vă arată adresa URL reală la care veți fi
              direcționat când faceți clic pe el. Ar putea fi complet diferit
              sau ar putea fi un site web popular cu o greșeală de ortografie,
              de exemplu www.bankofarnerica.com - „m” este de fapt un „r” și un
              „n”, așa că uitați-vă cu atenție.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="date date4">Ai un atasament!</div>
          <i class="icon fas fa-archive"></i>
          <div class="content">
            <h2>Atasamente</h2>
            <p>
              Dacă vedeți un atașament într-un e-mail la care nu vă așteptați
              sau care nu are sens, nu-l deschideti! Acestea conțin adesea
              încărcături utile precum ransomware sau alți viruși. Singurul tip
              de fișier pe care este întotdeauna sigur să faceți clic este un
              fișier .txt.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="date date5">Legitimate_send@email.com</div>
          <i class="icon fas fa-ship"></i>
          <div class="content">
            <h2>Expeditor ciudat</h2>
            <p>
              Fie că pare că ar fi de la cineva pe care nu-l cunoști sau de la
              cineva pe care îl cunoști, dacă ceva ti se pare ieșit din comun,
              neașteptat, din caracter sau pur și simplu suspect în general, nu
              da clic pe el!
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 class="red-flags-title">RED FLAGS</h1>
      <div class="flip">
        <div class="front">
          <h1>
            EXPEDITOR <br /> <LocalShippingIcon fontSize="large" />
          </h1>
        </div>
        <div class="back">
          <h2 class="red-flags-icon">
            <LocalShippingIcon fontSize="large" />
          </h2>

          <ul class="phishing-list">
            <li>Nu recunosc persoana</li>
            <li>Este din afara organizatiei</li>
            <li>Adresa de email ciudata</li>
            <li>Nu ar trebui sa primesc un email de acest fel</li>
            <li>
              Are linkuri suspecte sau atasamente fara vreo legatura cu
              activitatea mea
            </li>
          </ul>
        </div>
      </div>
      <div class="flip">
        <div class="front">
          <h1>
            DESTINATAR
            <br /> <ContactMailIcon fontSize="large"></ContactMailIcon>
          </h1>
        </div>
        <div class="back">
          <h2 class="red-flags-icon">
            <ContactMailIcon fontSize="large"></ContactMailIcon>
          </h2>
          <ul class="phishing-list">
            <li>
              Mesaj sau email trimis catre foarte multe persoane pe care nu le
              cunosc
            </li>
            <li>
              Persoane a caror nume au ceva in comun (ex: incep cu aceeasi
              litera, au acelasi prenume, etc.)
            </li>
          </ul>
        </div>
      </div>
      <div class="flip">
        <div class="front">
          <h1>
            DATA
            <br /> <CalendarTodayIcon fontSize="large"></CalendarTodayIcon>
          </h1>
        </div>
        <div class="back">
          <h2 class="red-flags-icon">
            <CalendarTodayIcon fontSize="large"></CalendarTodayIcon>
          </h2>
          <ul class="phishing-list">
            <li>A fost trimis cu mult in afara orelor de program</li>
          </ul>
        </div>
      </div>
      <div class="flip">
        <div class="front">
          <h1>
            SUBIECT <br />
            <HistoryEduIcon fontSize="large"></HistoryEduIcon>
          </h1>
        </div>
        <div class="back">
          <h2 class="red-flags-icon">
            <HistoryEduIcon fontSize="large"></HistoryEduIcon>
          </h2>
          <ul class="phishing-list">
            <li>
              Continutul nu se potriveste cu titlul sau cu aria mea de
              activitate
            </li>
            <li>
              Am primit acest email fara sa fie un raspuns la o conversatie mai
              veche
            </li>
          </ul>
        </div>
      </div>
      <div class="flip">
        <div class="front">
          <h1>
            ATASAMENTE
            <br /> <AttachFileIcon fontSize="large"></AttachFileIcon>
          </h1>
        </div>
        <div class="back">
          <h2 class="red-flags-icon">
            <AttachFileIcon fontSize="large"></AttachFileIcon>
          </h2>
          <ul class="phishing-list">
            <li>
              Aparitia unui atasament fara sa aiba legatura cu emailul, sau fara
              sa il astept
            </li>
            <li>Atasament detectat ca periculos</li>
          </ul>
        </div>
      </div>
      <div class="flip">
        <div class="front">
          <h1>
            LINKURI <br />
            <QrCode2Icon fontSize="large"></QrCode2Icon>
          </h1>
        </div>
        <div class="back">
          <h2 class="red-flags-icon">
            <QrCode2Icon fontSize="large"></QrCode2Icon>
          </h2>
          <ul class="phishing-list">
            <li>
              Cand tin mouse-ul este un link din corpul mesajului, apare ca
              redirectionandu-ma spre altceva
            </li>
            <li>Linkuri foarte lungi sau foarte scurte ce par suspecte</li>
            <li>Greseli de scriere in corpul linkului</li>
          </ul>
        </div>
      </div>
      <div class="flip">
        <div class="front">
          <h1>
            CONTINUT <br />
            <SourceRoundedIcon fontSize="large"></SourceRoundedIcon>
          </h1>
        </div>
        <div class="back">
          <h2 class="red-flags-icon">
            <SourceRoundedIcon fontSize="large"></SourceRoundedIcon>
          </h2>
          <ul class="phishing-list">
            <li>Este un mesaj iesit din comun</li>
            <li>Mi se cere sa urmaresc un link sau sa descarc un atasament</li>
            <li>Sunt grabit sau amenintat sa intreprind o anumita actiune</li>
          </ul>
        </div>
      </div>
      <div class="protection-text-title">
        <h2>CUM MA PROTEJEZ?</h2>
      </div>
      <div class="protection-text">
        <h3 onClick={funcP1}>
          1. Fiți informat despre tehnicile de phishing{" "}
          <i
            className={
              p1 ? "fas fa-arrow-circle-up" : "fas fa-arrow-circle-down"
            }
          ></i>
        </h3>
        {p1 && (
          <p>
            Noi înșelătorii de tip phishing sunt dezvoltate tot timpul. Fără a
            rămâne la curent cu aceste noi tehnici de phishing, ai putea să cazi
            pradă uneia din neatenție. Uitati-va la știri despre noile
            înșelătorii de tip phishing. Aflând despre ele cât mai devreme
            posibil, vei avea un risc mult mai mic de a fi prins de unul. Pentru
            administratorii IT, instruirea continuă de conștientizare a
            securității și simularea de phishing pentru toți utilizatorii sunt
            foarte recomandate pentru a menține securitatea în prim-plan în
            întreaga organizație.
          </p>
        )}
        <h3 onClick={funcP2}>
          2. Gândește-te înainte de a da clic{" "}
          <i
            className={
              p2 ? "fas fa-arrow-circle-up" : "fas fa-arrow-circle-down"
            }
          ></i>
        </h3>
        {p2 && (
          <p>
            Este bine să faceți clic pe linkuri atunci când sunteți pe site-uri
            de încredere. Făcând clic pe link-urile care apar în e-mail-uri
            aleatorii și mesaje instantanee, totuși, nu este o mișcare atât de
            inteligentă. Treceți cu mouse-ul peste linkuri de care nu sunteți
            sigur înainte de a da clic pe ele. Conduc acestea acolo unde ar
            trebui să conducă? Un e-mail de phishing poate pretinde că este de
            la o companie legitimă și, atunci când faceți clic pe linkul către
            site, poate arăta exact ca site-ul real. E-mailul vă poate solicita
            să completați informațiile, dar este posibil ca e-mailul să nu
            conțină numele dvs. Majoritatea e-mailurilor de tip phishing vor
            începe cu „Stimate client”, așa că ar trebui să fiți atenți când
            întâlniți aceste e-mailuri. Când aveți îndoieli, mergeți direct la
            sursă, în loc să faceți clic pe un link potențial periculos.
          </p>
        )}
        <h3 onClick={funcP3}>
          3. Verificați securitatea unui site{" "}
          <i
            className={
              p3 ? "fas fa-arrow-circle-up" : "fas fa-arrow-circle-down"
            }
          ></i>
        </h3>
        {p3 && (
          <p>
            Este firesc să fii puțin precaut cu privire la furnizarea de
            informații financiare sensibile online. Cu toate acestea, atâta timp
            cât sunteți pe un site web securizat, nu ar trebui să aveți
            probleme. Înainte de a trimite orice informații, asigurați-vă că
            adresa URL a site-ului începe cu „https” și ar trebui să existe o
            pictogramă de lacăt închis lângă bara de adrese. Verificați și
            certificatul de securitate al site-ului. Dacă primiți un mesaj care
            spune că un anumit site web poate conține fișiere rău intenționate,
            nu deschideți site-ul. Nu descărcați niciodată fișiere de pe
            e-mailuri sau site-uri web suspecte. Chiar și motoarele de căutare
            pot afișa anumite link-uri care pot conduce utilizatorii către o
            pagină web de phishing care oferă produse cu preț redus. În cazul în
            care utilizatorul face achiziții pe un astfel de site web, detaliile
            cardului de credit vor fi accesate de către infractorii cibernetici.
          </p>
        )}
        <h3 onClick={funcP4}>
          4. Fiți atenți la ferestrele pop-up{" "}
          <i
            className={
              p4 ? "fas fa-arrow-circle-up" : "fas fa-arrow-circle-down"
            }
          ></i>
        </h3>
        {p4 && (
          <p>
            Ferestrele pop-up se mascheaza adesea drept componente legitime ale
            unui site web. Totuși, de multe ori, acestea sunt încercări de
            phishing. Multe browsere populare vă permit să blocați ferestrele
            pop-up; le puteți permite de la caz la caz. Dacă cineva reușește să
            se strecoare prin fisuri, nu faceți clic pe butonul „anulați”;
            astfel de butoane duc adesea la site-uri de phishing. În schimb,
            faceți clic pe „x” mic din colțul de sus al ferestrei.
          </p>
        )}
        <h3 onClick={funcP5}>
          5. Nu furnizați niciodată informații personale{" "}
          <i
            className={
              p5 ? "fas fa-arrow-circle-up" : "fas fa-arrow-circle-down"
            }
          ></i>
        </h3>
        {p5 && (
          <p>
            Ca regulă generală, nu trebuie să distribuiți niciodată informații
            personale sau sensibile din punct de vedere financiar pe internet.
            Majoritatea e-mailurilor de phishing vă vor direcționa către pagini
            în care sunt necesare intrări pentru informații financiare sau
            personale. Un utilizator de internet nu ar trebui să facă niciodată
            intrări confidențiale prin linkurile furnizate în e-mailuri. Nu
            trimiteți niciodată nimănui un e-mail cu informații sensibile. Fă-ți
            un obicei din a verifica adresa site-ului web. Un site web securizat
            începe întotdeauna cu „https”.
          </p>
        )}
        <h3 onClick={funcP6}>
          6. Nu folositi aceeasi parola peste tot si schimbati parolele frecvent{" "}
          <i
            className={
              p6 ? "fas fa-arrow-circle-up" : "fas fa-arrow-circle-down"
            }
          ></i>
        </h3>
        {p6 && (
          <p>
            Un password management bun nu va scapa de aparitia atacurilor de tip
            phishing, insa poate limita aria de atac, timpul de exploatare si
            riscul unui astfel de incident.
          </p>
        )}
      </div>
      <div class="advanced-text-title">
        <h2 onClick={funcAdvanced}>
          Detalii Avansate{" "}
          <i
            className={
              advanced ? "fas fa-arrow-circle-up" : "fas fa-arrow-circle-down"
            }
          ></i>
        </h2>
        {advanced && (
          <p class="advanced-text">
            <h2>1. Pharming/DNS cache poisoning</h2>
            <p>
              Atacurile de tip Pharming redirecționează traficul unui site web
              către un site rău intenționat care îl uzurpă prin exploatarea
              vulnerabilităților din sistem care potrivesc nume de domenii
              (URL-ul pe care îl introduceți în bara de adrese a browserului) cu
              adrese IP (șirul de numere atribuit fiecărui dispozitiv conectat
              la o rețea). ).
            </p>
            <h2>2. Typosquatting/URL hijacking</h2>
            <p>
              Adresele URL ale acestor site-uri web falsificate par autentice,
              dar sunt subtil diferite de cele pe care le uzurpă. Acestea își
              propun să profite de greșelile de tastare atunci când utilizatorii
              introduc adrese URL în bara de adrese a browserului.
            </p>
            <h2>
              3. Clickjacking/UI (user interface) redressing/iframe overlay
            </h2>
            <p>
              Atacatorii folosesc mai multe straturi transparente pentru a plasa
              conținut rău intenționat pe care se poate face clic peste
              butoanele legitime. De exemplu, un cumpărător online ar putea
              crede că dă clic pe un buton pentru a face o achiziție, dar va
              descărca în schimb malware.
            </p>
            <h2>4. Tabnabbing and reverse tabnabbing</h2>
            <p>
              În aceste atacuri, filele de browser nesupravegheate sunt rescrise
              cu site-uri rău intenționate. Este posibil ca utilizatorii
              nebănuiți care revin la filă să nu observe că pagina nu este
              legitimă.
            </p>
            <h2>5. Clone phishing</h2>
            <p>
              O copie a unui e-mail legitim care a fost livrat anterior, dar
              trimis de la o adresă falsă care seamănă foarte mult cu adresa de
              e-mail a expeditorului inițial. Singura diferență dintre acesta și
              e-mailul original este că linkurile și/sau atașamentele vor fi
              înlocuite cu altele rău intenționate. Destinatarii sunt mai
              predispuși să cadă în acest tip de atac, deoarece recunosc
              conținutul e-mailului.
            </p>
            <h2>6. Whaling/CEO fraud</h2>
            <p>
              Un tip de spear phishing care vizează persoane cu profil înalt,
              cum ar fi membrii consiliului de administrație sau membrii echipei
              financiare. Aceste atacuri necesită efort suplimentar din partea
              atacatorului, dar recompensele sunt potențial mai mari: directorii
              executivi și alți directori de conducere au mai multe informații
              și niveluri de acces mai mari decât angajații juniori. În plus,
              contul compromis al unui membru al personalului senior poate fi
              folosit pentru a efectua atacuri BEC.
            </p>
            <h2>7. BEC (business email compromise)</h2>{" "}
            <p>
              Aceste e-mailuri iau adesea forma unor solicitări „urgente” care
              se pretind a fi din partea personalului superior, cum ar fi CEO-ul
              sau CFO. Ei folosesc tactici de inginerie socială pentru a păcăli
              mai mulți membri ai personalului junior, să trimită bani către
              destinatarul greșit sau să dezvăluie informații comerciale
              confidențiale.
            </p>
          </p>
        )}
      </div>
      <div class="phishing-button">
            <a href="/quizes/phishing" class="phishing-button-link">TAKE QUIZ</a>
          </div>
    </div>
  );
}

export default Phishing;