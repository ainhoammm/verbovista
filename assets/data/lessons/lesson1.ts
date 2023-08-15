export const lesson1 = {
  title: 'Pronombres personales',
  subtitle: 'yo, tú, él/ella/usted, nosotros/nosotras, vosotros/vosotras, ellos/ellas/ustedes',
  content: `
    <p>Son las palabras usadas para referirnos a las tres personas gramaticales sin emplear un sustantivo. Se llaman pronombres porque "sustituyen" o "equivalen" a un nombre.</p>

    <table class="conjugation-table">
        <tr>
            <td>1ª persona singular</td>
            <td><b>yo</b> <span class="onlyEn">(I)</span></td>
        </tr>
        <tr>
            <td>2ª persona singular</td>
            <td><b>tú</b> <span class="onlyEn">(You)</span></td>
        </tr>
        <tr>
            <td>3ª persona singular</td>
            <td><b>él, ella, usted</b> <span class="onlyEn">(he, she)</span> </td>
        </tr>
        <tr>
            <td>1ª persona plural</td>
            <td><b>nosotros, nosotras</b> <span class="onlyEn">(we)</span></td>
        </tr>
        <tr>
            <td>2ª persona plural</td>
            <td><b>vosotros, vosotras</b> <span class="onlyEn">(you)</span></td>
        </tr>
        <tr>
            <td>3ª persona plural</td>
            <td><b>ellos, ellas, ustedes</b> <span class="onlyEn">(they)</span></td>
        </tr>
    </table>
    `,
  exercises: [

    {type: 'choose', exercise: '___ <span class="grey">(1ª persona singular)</span> salto a la comba.', options: ['Yo', 'Tú'], answers: 'Yo'},
    {type: 'choose', exercise: '___ <span class="grey">(2ª persona singular)</span> aprendes español.', options: ['Yo', 'Tú'], answers: 'Tú'},
    {type: 'choose', exercise: '___ <span class="grey">(3ª persona singular)</span> lee un libro.', options: ['Él', 'Ellos'], answers: 'Él'},
    {type: 'input', exercise: '___ <span class="grey">(1ª persona singular)</span> juego con mis amigos.', answers: 'Yo'},
    {type: 'choose', exercise: '___ <span class="grey">(2ª persona singular)</span> saltas a la comba.', options: ['Él', 'Tú'], answers: 'Tú'},
    {type: 'input', exercise: '___ <span class="grey">(3ª persona singular)</span> aprende español.', answers: 'Él || Ella || Usted'},
    {type: 'input', exercise: '___ <span class="grey">(1ª persona singular)</span> juego con mis amigos y ___ juegan conmigo.', answers: ['Yo', 'ellos']},
    {type: 'choose', exercise: '___ <span class="grey">(1ª persona plural)</span> jugamos con nuestros amigos.', options: ['Ellos', 'Nosotros'], answers: 'Nosotros'},
    {type: 'input', exercise: '___ <span class="grey">(2ª persona plural)</span> saltamos a la comba.', answers: 'Nosotros || Nosotras'},
    {type: 'input', exercise: '___ <span class="grey">(3ª persona plural)</span> aprenden español.', answers: 'Ellos || Ellas || Ustedes'},
  ]

};
