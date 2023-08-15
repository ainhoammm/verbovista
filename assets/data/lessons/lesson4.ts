export const lesson4 = {
  title: 'Verbos regulares del presente acabados en -ER',
  content: `
    <p>Para conjugar el presente de los verbos acabados en -ER se usa la raiz + las siguientes desinencias en funcion de la persona.
    Por ejemplo: comer en presente de la primera persona -> com + <span class="regular">o</span>

    <h2>Indicativo</h2>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion title="Desinencias presente (ER)" desinencias="comer" grupo="Indicativo" tiempo="Presente"></app-conjugacion>
            </ion-col>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion verbo="comer" grupo="Indicativo" tiempo="Presente"></app-conjugacion>
            </ion-col>
        </ion-row>
    </ion-grid>
    `,
  exercises: [
    {type: 'choose', exercise: 'Yo ___ <span class="grey">(comer en 1ª persona del singular)</span> con mis amigos.', options: ['coma', 'como'], answers: 'como'},
    {type: 'input', exercise: 'Él ___ <span class="grey">(aprender en 3ª persona del singular)</span> castellano.', answers: 'aprende'},
    {type: 'choose', exercise: 'Nosotros ___ <span class="grey">(beber en 1ª persona del plural)</span> limonada.', options: ['bebemos', 'bebéis'], answers: 'bebemos'},
    {type: 'input', exercise: 'Tú ___ <span class="grey">(lees en 2ª persona del singular)</span> muchos libros.', answers: 'lees'},
    {type: 'choose', exercise: 'Ellos ___ <span class="grey">(correr en 3ª persona del plural)</span> los cien metros lisos.', options: ['corren', 'corréis'], answers: 'corren'},
    {type: 'input', exercise: 'Vosotros ___ <span class="grey">(comer en 2ª persona del plural)</span> en el restaurante.', answers: 'coméis'},
  ]

};
