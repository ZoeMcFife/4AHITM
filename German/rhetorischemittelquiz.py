import random


# Liste der Fragen. Jede Frage ist ein Tuple mit dem Satz und der korrekten rhetorischen Figur.
fragen = [
    ("Warum leben wir, warum sterben wir?", "Rhetorische Frage"),
    ("Liebe ist Flamme, Liebe ist Glut.", "Metapher"),
    ("Hoffnung nach Hoffnung, Traum nach Traum.", "Anapher"),
    ("Wissen ist Macht, Macht ist Wissen.", "Chiasmus"),
    ("Das Leben ist ein Wunder, das Wunder ist das Leben.", "Epipher"),
    ("Bäume flüstern, Blätter säuseln.", "Personifikation"),
    ("Er schlug nicht nur die Zeit tot, sondern auch die Langeweile.", "Zeugma"),
    ("Am Tag der Freude, in der Nacht des Leids.", "Antithese"),
    ("Ein kleiner Schritt für einen Menschen, ein riesiger Sprung für die Menschheit.", "Hyperbel"),
    ("Kannst du dir vorstellen, ein Leben ohne Musik zu führen?", "Rhetorische Frage"),
    ("Geld regiert die Welt, und die Welt dreht sich um Geld.", "Parallelismus"),
    ("Das Gras wächst, die Vögel singen, die Welt dreht sich weiter.", "Asyndeton"),
    ("Sie kamen, sahen und siegten.", "Klimax"),
    ("Er konnte es nicht kaufen, nicht besitzen, nicht erreichen.", "Polysyndeton"),
    ("Tag für Tag, Nacht für Nacht, immer weiter.", "Anapher"),
    ("Das Schiff brach durch die Wellen, durch den Sturm, durch die Nacht.", "Asyndeton"),
    ("Er rannte schnell, sie noch schneller.", "Klimax"),
    ("Ein Bild sagt mehr als tausend Worte.", "Metapher"),
    ("Wer würde nicht für die Freiheit kämpfen?", "Rhetorische Frage"),
    ("Schritt für Schritt, Stein um Stein, bauen wir die Zukunft.", "Parallelismus"),
    ("Sie lebt für die Musik, atmet für die Kunst.", "Ellipse"),
    ("Er kam, sah, und das Schweigen sprach Bände.", "Zeugma"),
    ("Leben oder Tod, Sieg oder Niederlage, alles liegt in unseren Händen.", "Antithese"),
    ("In der Ruhe liegt die Kraft, im Sturm die Prüfung.", "Antithese"),
    ("Sie fragte nach der Zeit, nach dem Weg, nach dem Sinn.", "Asyndeton"),
    ("Das Herz schlägt, die Uhr tickt, die Zeit verfliegt.", "Parallelismus"),
    ("Ein Tropfen Liebe ist mehr als ein Ozean an Willen.", "Hyperbel"),
    ("Durch Dunkelheit zum Licht, durch Leid zur Freude.", "Chiasmus"),
    ("Sind wir nicht alle auf der Suche nach dem verlorenen Schatz?", "Rhetorische Frage"),
    ("Über die sieben Meere, durch unerforschte Gewässer, immer voran.", "Asyndeton"),
    ("Ein Pirat lebt für die Freiheit, kämpft für die Beute.", "Zeugma"),
    ("Gold glänzt, Silber leuchtet, Reichtum lockt.", "Alliteration"),
    ("Schiff ahoi, Land in Sicht, der Schatz ist unser.", "Klimax"),
    ("Kein Wind, kein Sturm, kein Unwetter kann uns stoppen.", "Polysyndeton"),
    ("Sie zogen ihr Schwert, er hob seine Pistole, die Schlacht begann.", "Zeugma"),
    ("In der Stille der Nacht, unter dem Sternenhimmel, segeln wir weiter.", "Anapher"),
    ("Ein Pirat vergisst nie, ein Kapitän verzeiht nie.", "Antithese"),
    ("Durch Mut zur Freiheit, durch Tapferkeit zum Ruhm.", "Parallelismus"),
    ("bittersüß", "Oxymoron"),
    ("eile mit weile", "Oxymoron"),
]



# Funktion, um einen Hinweis zu geben basierend auf der rhetorischen Figur
def hinweis_geben(rhetorische_figur):
    hinweise = {
        "Rhetorische Frage": "Diese Frage erwartet keine Antwort.",
        "Paradoxon": "Eine scheinbar widersprüchliche Aussage, die dennoch wahr sein könnte.",
        "Metapher": "Eine direkte Vergleich ohne 'wie'.",
        "Anapher": "Wiederholung der Anfangswörter in aufeinanderfolgenden Sätzen.",
        "Chiasmus": "Eine Überkreuzstellung von Satzstrukturen.",
        "Epipher": "Wiederholung der Endwörter in aufeinanderfolgenden Sätzen.",
        "Personifikation": "Etwas Nichtmenschliches wird vermenschlicht.",
        "Zeugma": "Ein Verb ist mit zwei Objekten verbunden, die in ungewöhnlichem oder unerwartetem Zusammenhang stehen.",
        "Antithese": "Gegenüberstellung von Gedanken oder Begriffen.",
        "Hyperbel": "Eine starke Übertreibung.",
        "Asyndeton": "Eine Aufzählung ohne Konjunktionen.",
        "Polysyndeton": "Viele Konjunktionen in kurzer Folge.",
        "Alliteration": "Mehrere Wörter beginnen mit demselben Laut.",
        "Ellipse": "Auslassung von Wörtern, die zum Verständnis nicht notwendig sind.",
        "Klimax": "Eine steigernde Reihe oder Abfolge.",
        "Tautologie": "Wiederholung eines Begriffs oder einer Aussage durch ein synonymes Wort oder eine Phrase.",
        "Oxymoron": "Zusammenstellung zweier sich widersprechender Begriffe",
    }
    return hinweise.get(rhetorische_figur, "Kein Hinweis verfügbar.")

# Funktion, um das Quiz durchzuführen
def quiz_durchfuehren(fragen):
    random.shuffle(fragen)  # Fragen in zufälliger Reihenfolge
    score = 0
    for satz, richtige_antwort in fragen:
        print(f"Satz: {satz}")
        antwort = input("Welche rhetorische Figur wird hier verwendet? (Tippe 'hint' für einen Hinweis) ")
        if antwort.lower() == 'hint':
            print(hinweis_geben(richtige_antwort))
            antwort = input("Versuche es noch einmal: ")
        if antwort.lower() == richtige_antwort.lower():
            print("Richtig!\n")
            score += 1
        else:
            print(f"Falsch! Die richtige Antwort war: {richtige_antwort}\n")
    print(f"Dein Ergebnis: {score}/{len(fragen)}")

# Das Quiz starten
quiz_durchfuehren(fragen)
