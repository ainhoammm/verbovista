export const lesson5 = {
  title: 'Verbos regulares del presente acabados en -IR',
  content: `
    <p>Para conjugar el presente de los verbos acabados en -IR se usa la raiz + las siguientes desinencias en funcion de la persona.
    Por ejemplo: vivir en presente de la primera persona -> viv + <span class="regular">o</span>

    <h2>Indicativo</h2>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion title="Desinencias presente (IR)" desinencias="vivir" grupo="Indicativo" tiempo="Presente"></app-conjugacion>
            </ion-col>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion verbo="vivir" grupo="Indicativo" tiempo="Presente"></app-conjugacion>
            </ion-col>
        </ion-row>
    </ion-grid>
    `,
  exercises: [
    {type: 'choose', exercise: 'Yo ___ <span class="grey">(vivir en 1ª persona del singular)</span> con mis padres.', options: ['viva', 'vivo'], answers: 'vivo'},
    {type: 'input', exercise: 'Él ___ <span class="grey">(abrir en 3ª persona del singular)</span> la puerta todas las mañanas.', answers: 'abre'},
    {type: 'choose', exercise: 'Nosotros ___ <span class="grey">(partir en 1ª persona del plural)</span> la comida en partes iguales.', options: ['partimos', 'partís'], answers: 'partimos'},
    {type: 'input', exercise: 'Tú ___ <span class="grey">(vivir en 2ª persona del singular)</span> con tus abuelos.', answers: 'vives'},
    {type: 'choose', exercise: 'Ellos ___ <span class="grey">(compartir en 3ª persona del plural)</span> sus juguetes.', options: ['comparten', 'comparte'], answers: 'comparten'},
    {type: 'input', exercise: 'Vosotros ___ <span class="grey">(vivir en 2ª persona del plural)</span> en un piso compartido.', answers: 'vivís'},
  ]

};
