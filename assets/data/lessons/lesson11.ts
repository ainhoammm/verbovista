export const lesson11 = {
  title: 'Verbos regulares de futuro acabados en -IR',
  content: `
    <p>Para conjugar el futuro de los verbos regulares acabados en -IR se usa la raiz + las siguientes desinencias en funcion de la persona.
    Por ejemplo: vivir en futuro de la primera persona -> viv + <span class="regular">iré</span>

    <h2>Indicativo</h2>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion title="Desinencias futuro (IR)" desinencias="vivir" grupo="Indicativo" tiempo="Futuro"></app-conjugacion>
            </ion-col>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion verbo="vivir" grupo="Indicativo" tiempo="Futuro"></app-conjugacion>
            </ion-col>
        </ion-row>
    </ion-grid>
    `,
  exercises: [
    {type: 'choose', exercise: 'Yo ___ <span class="grey">(vivir en 1ª persona del singular)</span> en Madrid el año que viene.', options: ['viviré', 'vivirá'], answers: 'viviré'},
    {type: 'input', exercise: 'Él ___ <span class="grey">(abrir en 3ª persona del singular)</span> la puerta todas las mañanas.', answers: 'abrirá'},
    {type: 'choose', exercise: 'Nosotros ___ <span class="grey">(permitir en 1ª persona del plural)</span> jugar a la pelota en la plaza.', options: ['permitiremos', 'permitirán'], answers: 'permitiremos'},
    {type: 'input', exercise: 'Tú ___ <span class="grey">(partir en 2ª persona del singular)</span> el bocadillo por la mitad.', answers: 'partirás'},
    {type: 'choose', exercise: 'Ellos ___ <span class="grey">(compartir en 3ª persona del plural)</span> piso el próximo año.', options: ['compartirán', 'compartirá'], answers: 'compartirán'},
    {type: 'input', exercise: 'Vosotros ___ <span class="grey">(vivir en 2ª persona del plural)</span> en Barcelona el año que viene.', answers: 'viviréis'},

  ]

};
