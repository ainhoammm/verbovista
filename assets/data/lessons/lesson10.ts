export const lesson10 = {
  title: 'Verbos regulares de futuro acabados en -ER',
  content: `
    <p>Para conjugar el futuro de los verbos regulares acabados en -ER se usa la raiz + las siguientes desinencias en funcion de la persona.
    Por ejemplo: comer en futuro de la primera persona -> com + <span class="regular">eré</span>

    <h2>Indicativo</h2>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion title="Desinencias futuro (ER)" desinencias="comer" grupo="Indicativo" tiempo="Futuro"></app-conjugacion>
            </ion-col>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion verbo="comer" grupo="Indicativo" tiempo="Futuro"></app-conjugacion>
            </ion-col>
        </ion-row>
    </ion-grid>
    `,
  exercises: [
    {type: 'choose', exercise: 'Mañana, yo ___ <span class="grey">(comer en 1ª persona del singular)</span> fuera de casa.', options: ['comeré', 'comerá'], answers: 'comeré'},
    {type: 'input', exercise: 'Él ___ <span class="grey">(aprender en 3ª persona del singular)</span> castellano el año que viene.', answers: 'aprenderá'},
    {type: 'choose', exercise: 'Pasado mañana, nosotros ___ <span class="grey">(correr en 1ª persona del plural)</span> los cien metros lisos.', options: ['correremos', 'correrás'], answers: 'correremos'},
    {type: 'input', exercise: 'Tú ___ <span class="grey">(comer en 2ª persona del singular)</span> en el comedor la semana que viene.', answers: 'comerás'},
    {type: 'choose', exercise: 'Ellos ___ <span class="grey">(comer en 3ª persona del plural)</span> en casa los fines de semana.', options: ['comerán', 'comeré'], answers: 'comerán'},
    {type: 'input', exercise: 'Vosotros ___ <span class="grey">(aprender en 2ª persona del plural)</span> castellano el próximo curso.', answers: 'aprenderéis'},

  ]

};
