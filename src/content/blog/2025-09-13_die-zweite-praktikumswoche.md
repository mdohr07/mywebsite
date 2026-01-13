---
# Basis-Metadaten
title: "Die zweite Praktikumswoche"
description: "In diesem Blogpost reflektiere ich meine zweite Praktikumswoche und meine ersten Erfahrungen mit neuen Technologien und Tools."
pubDate: 2025-09-13
author: "mdohr"

# Medien
image:
  url: "/img/assets/blog/2025-09/kaffeeklatsch.jpg"
  alt: "Ein quadratischer Holztisch, Kaffee in Pappbechern und ein Red Bull"

# Kategorien & Stimmung
tags:
  - praktikum
  - reflexion
  - persönlich
  - frontend
mood: "Melancholisch"

# Sonstiges
music:
  title: "Hearts In Standby"
  artist: "Moebius FM"
  url: "https://moebiusfm.bandcamp.com/track/hearts-in-standby"

  draft: false
---
Leider hatte ich die Woche über keine Zeit zum Schreiben, aber jetzt ist Wochenende und ich bin wieder da! Da sonst nicht viel zu berichten ist, schreibe ich heute wieder über mein Praktikum. Woche zwei ist rum und hier folgt meine Zusammenfassung.

## Kennen lernen des Technologie-Stacks

Mir wurde gesagt, dass ich diese Woche etwas anderes zu tun bekomme und so war es dann auch. Ich habe ein Test-Projekt bekommen, um den im Team verwendeten Tech-Stack kennen zu lernen und auszuprobieren. 

TypeScript mit React war mir ja schon bewusst, dazu kommt zum einen **Gulp**. Von Gulp hatte ich schon gehört, aber mich nie damit auseinandergesetzt. Jetzt weiß ich: es ist ein "Task Runner", der, Zitat: "...in der Frontend-Entwicklung und beim Webdesign bei der Automatisierung von Prozessen und wiederkehrenden Aufgaben hilft." Außer es zu installieren und die Anwendung lokal per `gulp serve` Kommando auszuführen, hatte ich noch nicht weiter damit zu tun.

<blockquote>
Gulp.js basiert auf Node.js und ist mit Grunt verwandt. Mit Gulp.js kam 2013 eine Software auf den Markt, die als sogenannter „Task Runner“ oder „Streaming Bulid System“ in der Frontend-Entwicklung und beim Webdesign bei der Automatisierung von Prozessen und wiederkehrenden Aufgaben hilft.

*[gulp.de](https://www.gulp.de/blog/skills/gulp-js)*
</blockquote>

Dann gibt es da so eine Sache: Das Praktikum bringt mich verstärkt mit Microsoft-Technologien in Kontakt. Deshalb lerne ich gerade auch SharePoint kennen und die Test-Applikation muss mit **Microsoft SharePoint** kommunizieren können. Ich bin nicht besonders tief in der ganzen Microsoft-Welt drin und SharePoint ist für mich komplett neu, aber es wird in vielen Firmen als Intranet- und Datenplattform genutzt. Das finde ich interessant, weil ich mit dem, was man normalerweise unter einer Datenbank versteht, nicht gern arbeite. Ich bin also neugierig, wie sich das entwickelt.

In dem Zusammenhang kommen zu den verwendeten Technologien **Yeoman** und fluentUI hinzu. Von beidem habe ich vorher noch nie gehört. Yeoman brauchte ich bisher eigentlich nur Anfangs zum Aufsetzen des Projekts.

<blockquote>
Yeoman ist eine robuste und eigenwillige Sammlung von Tools, Bibliotheken und einem Workflow, mit denen Entwickler schnell schöne, überzeugende Webanwendungen erstellen können.

*Übersetzt von [github.com/yeoman/yeoman](https://github.com/yeoman/yeoman)*
</blockquote>

**FluentUI** ist noch ein bisschen mystisch für mich. Es bringt eine wieder neue Syntax mit wieder anderen Regeln in mein HTML - ääääh, JSX. Und es tut seltsame Dinge mit meinem CSS - wie eine CSS Library aber in extra verwirrender Form. Also, das ist zumindest mein Eindruck zum Zeitpunkt des Verfassens dieses Eintrags.

<blockquote>
Das offizielle Frontend-Framework für die Entwicklung von Anwendungen, die sich nahtlos in Microsoft 365 integrieren lassen.

*Übersetzt von [developer.microsoft.com](https://developer.microsoft.com/en-us/fluentui#/)*
</blockquote>

Und dann ist da noch **Yup**. Nicht zu verwechseln mit Nope. Solche Namen liebe ich ja, kein Witz. Von Nope weiß ich nur, weil ich etwas Recherche betreiben musste und wenn ich nur nach der Bennenung wählen müsste, würde ich jetzt gern Nope benutzen. Kurz und einfach ausgedrückt ist Yup für Validierung von Daten da. Laut Website ist Yup ein "Schema-Builder für die Analyse und Validierung von Laufzeitwerten".

<blockquote>
Yup-Schemas sind äußerst ausdrucksstark und ermöglichen die Modellierung komplexer, voneinander abhängiger Validierungen oder Wertetransformationen.

*Übersetzt von [npmjs](https://www.npmjs.com/package/yup)*
</blockquote>

## Freud und Leid beim Implementieren

Klingt irgendwie dramatisch - find ich gut. Ist es aber nicht wirklich. Also wie gesagt, ein paar Dinge sind für mich noch ziemlich mysteriös und fühlen sich noch irgendwie hakelig an. Ich musste ein paar Dokumentationen lesen um weiter zu kommen, doch einige Dokumentationen schienen irgendwie unvollständig. Das ist ein Punkt, der mich ein wenig frustriert hat.

Also, mit der Dokumentation von *Astro* <img src="/emojis/heart_melts.png"> kann bisher keiner mithalten.

Wenn man so eine spezielle Kombination von Technologien hat oder ein besonders spezifisches Problem, kann das Finden einer Lösung über eine Suchmaschine allein schwierig sein. 

Was mich ebenfalls frustriert hat: Erstens, dass ich für das gegebene Setup eine ältere Version von node benutzen muss, aber die benötigten Abhängigkeiten gern eine neuere Version benutzen möchte. Deswegen bekam ich beim Installieren dieser Abhängigkeiten diverse Warnungen. Die kann ich zwar alle ruhig ignorieren, da trotzdem alles läuft, aber ohne Warnungen fühle ich mich doch wohler.

<blockquote>
Node.js ist eine plattformübergreifende Open-Source - JavaScript - Laufzeitumgebung, die JavaScript-Code außerhalb eines Webbrowsers ausführen kann. 

[Wikipedia](https://de.wikipedia.org/wiki/NodeJS)
</blockquote>

Zweitens startet das Ding wirklich, wirklich langsam. Und das scheint auch normal zu sein, also muss ich wohl damit leben.

Mit meinem ersten Sprint bin ich aber trotzdem ganz gut voran gekommen, das Feedback war zwar verhalten aber positiv. Trotz ein paar nervigen Kleinigkeiten hat mir die Arbeit am Test-Projekt bisher Spaß gemacht. Ich habe gern herumgetüftelt und ich mag es, Neues dazu zu lernen. Im Büro fühleich mich leider immer noch nicht so ganz wohl. Das liegt zu einem Großteil daran, dass ich keinen wirklichen eigenen Platz habe und das wird wohl auch so bleiben. Ich habe mich einigermaßen eingerichtet, aber es ist trotzdem nicht *mein* Platz und das fühle ich. Diese Woche war ich aber mehr im Homeoffice und dann ist es für mich gemütlicher. Außerdem spare ich mir natürlich An- und Abreise. Andererseits quatsche ich aber auch gern mit den anderen Leuten die sich vor Ort aufhalten und das fällt im Homeoffice wiederum weg.

## Ein etwas anderer Tag

<img src="/img/assets/blog/2025-09/kaffeeklatsch.jpg" alt="Ein quadratischer Holztisch mit Kaffee in Pappbechern und einem Red Bull" class="full-width">

Am Freitag herrschte Ausnahmezustand, weil ein Firmen-Internes Event stattfand. Dafür hatte ich mich rechtzeitig angemeldet, denn nur wer angemeldet ist kommt auch rein. Das Event findet jährlich statt und geht über den ganzen Arbeitstag, ab Nachmittags gibt es Bier. Bis dahin kann man an Workshops teilnehmen und Vorträgen lauschen. Für diese meldet man sich ebenfalls rechtzeitig an. Bei Vorträgen ist es meist unkritisch, aber besonders Workshops haben oft eine begrenzte Teilnehmerzahl.

Ich hatte mich für einen Workshop zu KI und Design angemeldet, aber leider wurde mir abgesagt, da es schon voll war. Dann habe ich mich aus der No heraus für einen Vortrag angemeldet. 
Es war nett, wieder ein bisschen mit meinen Klassenkamerad:innen quatschen zu können, die ihr Praktikum im selben Betrieb haben wie ich und die ebenfalls zum Event gekommen sind.

Mein Programm war wie folgt: Morgens ein Workshop zu nachhaltiger UX (Benutzererfahrung), dann zwei Vorträge an denen ich eigentlich nur mäßig interessiert war und zum Schluss einen Vortrag zu ADHS in der Programmierung, an der ich wiederum sehr interessiert war. Also Anfang und Ende fand ich sehr gut, der Mittelteil war eher ein Filler. Außerdem kostenloses Essen und kostenloses Trinken. Ich hatte für meine Verhältnisse viel Kaffee (zu dem es neben Kuhmilch auch Hafermilch gab), ein fettes Sandwich und zum Abschluss: Kuchen! Bier hatte ich keines und bin stattdessen nach Hause gefahren.

Also, es war eine interessante Woche.
Bis demnächst!