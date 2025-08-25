---
layout: ../../components/Post.astro

# Basis-Metadaten
title: "Meine Sicht auf Frontend und Backend"
description: "Warum Frontend mehr ist als nur 'hübsch machen' - meine persönlichen Erfahrungen mit der ewigen Debatte zwischen Frontend und Backend."
pubDate: 2025-08-23
author: "mdohr"

# Medien
image:
  url: "/img/assets/blog/2025-08/Screenshot_2025-08-23.png"
  alt: "JSX document view in VS Code with the Terminal in the bottom"

# Kategorien & Stimmung
tags:
  - reflexion
  - frontend
  - umschulung
mood: "Nachdenklich"

# Sonstiges
music:
  title: "keine"
  url: ""
---

Heute geht es in meinem Beitrag wie angekündigt um Frontend und Backend - aus meiner Sicht. Seiten und Blogeinträge die Unterschiede zwischen den beiden aufzeigen und erklären gibt es zu genüge. 

## Ein bisschen persönlicher Hintergrund

Meine ersten Erfahrungen mit Web Development habe ich ja in den neunziger Jahren gemacht. Da war ich Teenager und habe mir HTML und CSS selbst beigebracht. Zu der Zeit in der JavaScript immer wichtiger wurde, war ich in der Hinsicht nicht mehr aktiv und habe das alles somit verpasst. Irgendwann stieg ich wieder ein und hatte einen Frontend Job neben dem Studium, bei dem ich Wordpress-Seiten angepasst habe. Hauptsächlich mit CSS, von PHP habe ich mich eher ferngehalten, aber immerhin ein wenig damit zu tun gehabt. 

Daraufhin folgte wieder eine lange Zeit ohne das alles (mehr oder weniger), bis ich diese Umschulung zur Anwendungsentwicklerin angefangen habe, die derzeit immer noch im Gange ist.
Wie man dem also entnehmen kann, war ich von Anfang an Fraktion Frontend. Mit dem Backend bin ich in meiner Jugend einfach nicht in Berührung gekommen - nicht einmal mit JavaScript als Einstieg in die Programmierung. Und dann kam ich auch ohne das Backend aus, weil ich ja höchstens Websites für mich selbst gebaut habe. Da brauche ich keine Datenbanken, APIs, keine Server-Kommunikation und weiß-der-Geier-was.

## Backend während der Umschulung

Ich bin in die Umschulung gestartet mit der Idee, dass ich meine bereits vorhandenen Kenntnisse erweitere, aber vermutlich weiterhin in Richtung Frontend gehen will. Dabei hatte ich mir aber fest vorgenommen, dem Backend auch eine Chance zu geben. Es hätte ja sein können, dass es mir total gut gefällt und ich dann viel mehr dazu Lust habe als zum Frontend. Ich *wollte* es sogar mögen. 
Ich glaube die Formulierung lässt schon ein bisschen was durchblicken.

Für Vertiefung von Themen ist in der Umschulung wenig Zeit, denn nach zwei Jahren sollen wir ja schon fertig sein und dazwischen liegen noch Zeitfresser, die von der Handelskammer gefordert werden, für den zukünftigen Beruf aber nicht so richtig ausschlaggebend sind. Die Sprachen, die wir hier am meisten gelernt haben, waren mit Java und C# Backend-Sprachen. Jetzt gegen Ende haben wir auch TypeScript verwendet, weil wir in unseren Gruppenprojekten C# mit .NET in Kombination mit Angular nutzen sollten und Angular verwendet TypeScript. Auch im Praktikum werde ich TypeScript brauchen.

Gut die Hälfte der Umschulung ist mittlerweile vorbei. 
Innerhalb meiner Klasse ist das Frontend insgesamt nicht gerade beliebt - der Großteil will ins Backend, das Frontend wurde dabei auch schon mal als „Gedöns“ und „Hübsch, kann aber nichts“ abgetan.

<img src="/img/assets/blog/2025-08/css-meme.jpg" alt="CSS Meme">

## Die Geister scheiden sich

Wenn man sich mit dem Thema Frontend versus Backend beschäftigt, entsteht schnell der Eindruck, dass man für das Backend richtig schlau sein muss: logisch denken, komplexe Probleme lösen und ohne läuft einfach auch nichts. Also eigentlich steckt da die ganze Arbeit. Das Frontend ist lediglich dafür da, Pixel zu schubsen und was hübsch zu machen - also nicht so anspruchsvoll. 

Es ist nicht so, dass mich während dieser Zeit das Backend nicht interessiert hat, oder dass es überhaupt keinen Spaß gemacht hat. Irgendwie hatte ich aber das Gefühl, damit nicht so warm zu werden. Ich will es auch überhaupt nicht abwerten oder ihm irgendetwas absprechen. Ich finde das Backend tatsächlich auch schwierig und anspruchsvoll. Aber es gibt keinen guten Grund, deswegen das Frontend abzuwerten. 

Wenn man tiefer sucht - zum Beispiel online in Diskussionen unter Developern - findet man natürlich auch andere Meinungen. Die einen finden dies schwerer, die anderen das. Viele Backend-Menschen scheinen das Frontend vor allem als lästig zu empfinden. Das stellte sich bei Unterhaltungen heraus, die ich persönlich mit anderen hatte, die teilweise auch schon länger dabei sind. Man findet auch heraus - wenn man es sich nicht schon so gedacht hat -, dass es nicht ganz so schwarz und weiß ist, wie manche es gern darstellen. Frontend und Backend haben natürlich jeweils ihre eigenen Herausforderungen, wobei man nicht einfach stumpf sagen kann, dass das eine schwieriger ist als das andere. Wie immer: es kommt drauf an. Auf das Projekt, den Umfang und nicht zu vergessen auf das Individuum und Vorlieben. 

Jemand aus meinem zukünftigen Praktikumsbetrieb (Backend-Bereich) fragte mich, ob ich auch in anderen Aspekten gerne detailorientiert arbeite. Dazu sagte ich „ja“ und sie antwortete, dass ich deswegen auch das Frontend mag. Kann sein, dass sie recht hatte. Aber zu „warum ich Frontend mag“ später mehr (oh nein, noch ein Spoiler).

## Was Frontend Entwicklung wirklich bedeutet

Was mir auffällt ist, dass viele Leute anscheinend ein etwas anderes Verständnis davon haben, was das eigentlich ist, als ich. Viele setzen Frontend Development gleich mit Frontend Design. Also die Vorstellung, dass man die Anwendungsoberfläche gestaltet, ein bisschen schön macht, stundenlang pixelgenaue Anpassungen macht. Also eigentlich ist man Designer:in.
Dass man stundenlang pixelgenaue Anpassungen macht, stimmt. Aber in der Frontend Entwicklung entwickelt man auch - nur *normalerweise* keine Designs. Die Designs stehen *normalerweise* schon fest, denn bei etwas größeren Firmen gibt es Grafiker:innen, die diesen Part übernehmen. Der Frontend Entwickler oder die Frontend Entwicklerin setzt dieses nur um. Und beim Hübschmachen bleibt es dann auch nicht. Als Frontendler:in muss man auch die Logik im Frontend umsetzen und die Verbindung zum Backend herstellen. Das kann man mit JavaScript, TypeScript, PHP oder einer anderen Sprache machen.

```js
---
const allPosts = await Astro.glob("../pages/posts/*.md");
const posts = allPosts.sort((a: any, b: any) => {
  return new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime();
});

---   

	<ul class="post-list">
      {
        posts.map((post: any) => (
          <li class="post-item">
            <div class="post-header">
              <a href={post.url} class="post-title">
                {post.frontmatter.title}
              </a>
              <span class="post-date">{formatDate(post.frontmatter.pubDate)}</span>
            </div>
            <p class="post-description">{post.frontmatter.description}</p>
          </li>
        ))
      }
    </ul>
```
<small>So werden die Blogposts auf meiner Seite hier geladen</small>

In unserem Gruppenprojekt bei der Umschulung vor kurzem, musste ich einige der im Backend bereits vorhandenen Logik und Validierungen auch im Frontend umsetzen. Natürlich ist die Syntax eine andere und das Frontend gilt als „zugänglicher“. Das liegt wahrscheinlich daran, dass man direkt sehen kann, was man gemacht hat, ob es klappt und die Interaktion so leichter fällt.

```ts
@Component({
  selector: 'app-details',
  imports: [NumberFormatPipe, DatePipe, TimeFormatPipe],
  templateUrl: './details.html',
  standalone: true,
  styleUrl: './details.scss'
})

export class Details {
  event?: EventDetailInterface;
  eventId!: number;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService
  ) { }

  descriptionParagraphs: string[] = [];

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = Number(idParam);
      this.eventService.getEventById(id).subscribe( e => {
        this.event = e;

         // Split the descriptions into paragraphs
         this.descriptionParagraphs = e?.description
         ? e.description.split(/\r?\n\r?\n/)
         : [];
      });
    }
  }
}
```
<small>Ein Auszug aus einer Projekt-Datei in TypeScript</small>

## Einfach eine Vorliebe

 Vielleicht arbeite ich auch nur nicht so gern im Backend, weil ich bisher weniger Berührung damit hatte. Aber die Sache ist die: das Backend fühlt sich für mich aktuell weniger spannend an. Irgendwie steif und sich wiederholend und mit sich selbst kommunizierend in ewig langen Aneinanderreihungen von Code. 

Ich schließe nicht aus, dass ich im Laufe der Zeit noch eine Liebe für das Backend entwickle und ich sehe die Chance, dass ich mich in Zukunft stärker damit auseinandersetze. Aber bisher habe ich gerade während des Projekts immer wieder gemerkt, dass ich im Frontend mehr Spaß habe und geduldiger damit bin.

<img src="/img/assets/blog/2025-08/meme-dev-humor-when-i-started-to-code-vs-now-303.jpg" alt="dev Meme">

Ein Dozent sagte diese Woche zu mir, dass er sich gar nicht so sicher ist, ob das Frontend nicht mittlerweile sogar schwieriger ist als das Backend, weil man es mit vielen unterschiedlichen Sprachen, Frameworks und Technologien zu tun hat, Logik-basiert und anderweitig. Und auch weil Tools und Technologien ständig erneuert werden und immer wieder was dazu kommt. Wie vorhin schon gesagt: es kommt immer auf den Kontext an. Aber ich hatte tatsächlich gerade gestern einen dieser Fälle, dass sich plötzlich etwas ändert und ich den Code von vor-vorgestern anpassen musste. Zum Glück handelte es sich nur um eine Zeile Code in zwei Dateien.

```js
const allPosts = await Astro.glob("../pages/posts/*.md");
```
<small>Alte Syntax von Astro</small>


```js
const modules = import.meta.glob("../pages/posts/*.md", { eager: true });
```
<small>Neue Syntax von Vite anstatt Astro</small>

## Fazit

Ich mag die pixelgenaue Anpassung, das Umsetzen der Darstellung, das Gefühl von Flexibilität, die Mischung - ich sehe nicht den ganzen Tag besipielsweise nur C# - und ich mag, dass ich sofort meine Ergebnisse sehen kann. Was ich noch toll finde ist, dass ich eine Web-App/Website bauen kann, mit denen Benutzer:innen gleich was anfangen können was mit Backend allein so nicht möglich ist. 

Auch wenn ich bisher für mich festgestellt habe, dass mir die Arbeit im Frontend mehr Spaß macht und ich dort mehr Geduld an den Tag lege heißt das nicht, dass das Backend für mich abgehakt ist. Vielleicht finde ich den Zugang später noch. Für meine Zukunft kann ich mir gut vorstellen, mich in Richtung Mobile oder Full Stack weiter zu orientieren, wenn der Zeitpunkt passt.