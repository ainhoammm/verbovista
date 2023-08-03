export const lesson9 = {
  title: 'Verbos regulares de futuro acabados en -AR',
  content: `
    Para conjugar el futuro de los verbos regulares acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.
    Por ejemplo: saltar en futuro de la primera persona -> salt + <span class="regular">aré</span>

    <h2>Indicativo</h2>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion title="Desinencias futuro (AR)" desinencias="saltar" grupo="Indicativo" tiempo="Futuro"></app-conjugacion>
            </ion-col>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion verbo="saltar" grupo="Indicativo" tiempo="Futuro"></app-conjugacion>
            </ion-col>
        </ion-row>
    </ion-grid>
    `,
  exercises: [
    {type: 'choose', exercise: 'Mañana ___ <span class="grey">(jugar en 1ª persona del singular)</span> con mis amigos.', options: ['juguaré', 'jugarás'], answers: 'juguaré'},
    {type: 'input', exercise: 'El año que viene, él ___ <span class="grey">(acabar en 3ª persona del singular)</span> la universidad.', answers: 'acabará'},
    {type: 'choose', exercise: 'Nosotros ___ <span class="grey">(aceptar en 1ª persona del plural)</span> el resultado de la prueba.', options: ['aceptaremos', 'aceptará'], answers: 'aceptaremos'},
    {type: 'input', exercise: 'Mañana ___ <span class="grey">(firmar en 2ª persona del singular)</span> el contrato de trabajo.', answers: 'firmarás'},
    {type: 'choose', exercise: 'El próximo fin de semana, ellos ___ <span class="grey">(actuar en 3ª persona del plural)</span> en el teatro.', options: ['actuarán', 'actuarás'], answers: 'actuarán'},
    {type: 'input', exercise: 'Al entrar mañana, vosotros ___ <span class="grey">(aceptar en 2ª persona del plural)</span> las normas de la escuela.', answers: 'aceptaréis'},
  ]

};
