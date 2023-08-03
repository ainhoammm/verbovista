export const lesson2 = {
  title: 'Raíz y desinencia',
  content: `
    <p>Todo verbo está compuesto por dos partes:</p>
    <ul>
        <li><b>Raíz</b>: Es la parte del verbo que expresa su significado y es invariable. Por ejemplo: jugar ("jug" es la raíz)</li>
        <li><b>Desinencia</b>: Es la terminación del verbo que se ve modificada por el tiempo verbal, el modo y la persona en que esté conjugado el verbo. Por ejemplo: jugando (ando), juego (o), jugaría (aría), jugamos (amos).</li>
    </ul>

    <p>Ejemplo:</p>
    <img src="assets/raiz-des.png">
    `,
  exercises: [
    {type: 'choose', exercise: 'La <b>raíz</b> del verbo ganar es ___.', options: ['gan', 'ga'], answers: 'gan'},
    {type: 'choose', exercise: 'La <b>desinencia</b> de gano es ___', options: ['o', 'no'], answers: 'o'},

    {type: 'input', exercise: 'La <b>raíz</b> del verbo saltar es ___.', answers: 'salt'},
    {type: 'input', exercise: 'La <b>desinencia</b> de saltado es ___.', answers: 'ado'},

    {type: 'choose', exercise: 'La <b>raíz</b> del verbo comer es ___.', options: ['come', 'com'], answers: 'com'},
    {type: 'choose', exercise: 'La <b>desinencia</b> del verbo comer es ___', options: ['er', 'ar'], answers: 'er'},

    {type: 'input', exercise: 'La <b>raíz</b> del verbo reir es ___.', answers: 're'},
    {type: 'input', exercise: 'La <b>desinencia</b> del verbo reir es ___', answers: 'ir'},

    {type: 'choose', exercise: 'La <b>raíz</b> del verbo aprender es ___.', options: ['aprend', 'aprende'], answers: 'aprend'},
    {type: 'choose', exercise: 'La <b>desinencia</b> de aprendiendo es ___', options: ['endo', 'iendo'], answers: 'iendo'},
  ]

};
