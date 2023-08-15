export const lesson3 = {
  title: 'Verbos regulares del presente acabados en -AR',
  content: `
    <p>Para conjugar el presente de los verbos acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.
    Por ejemplo: amar en presente de la primera persona -> am + <span class="regular">o</span>

    <h2>Indicativo</h2>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion title="Desinencias presente (AR)" desinencias="amar" grupo="Indicativo" tiempo="Presente"></app-conjugacion>
            </ion-col>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion verbo="amar" grupo="Indicativo" tiempo="Presente"></app-conjugacion>
            </ion-col>
        </ion-row>
    </ion-grid>
    `,
  exercises: [
    {type: 'choose', exercise: 'Yo ___ <span class="grey">(jugar en 1ª persona del singular)</span> con mis amigos.', options: ['juego', 'jugamos'], answers: 'juego'},
    {type: 'input', exercise: 'Él ___ <span class="grey">(amar en 3ª persona del singular)</span> a Laura.', answers: 'ama'},
    {type: 'choose', exercise: 'Nosotros ___ <span class="grey">(saltar en 1ª persona del plural)</span> a la comba.', options: ['saltais', 'saltamos'], answers: 'saltamos'},
    {type: 'input', exercise: 'Tú ___ <span class="grey">(saltar en 2ª persona del singular)</span> a la comba.', answers: 'saltas'},
    {type: 'choose', exercise: 'Ellos ___ <span class="grey">(saltar en 3ª persona del plural)</span> a la comba.', options: ['salta', 'saltan'], answers: 'saltan'},
    {type: 'input', exercise: 'Vosotros ___ <span class="grey">(amar en 2ª persona del plural)</span> el deporte.', answers: 'amáis'},
  ]

};
