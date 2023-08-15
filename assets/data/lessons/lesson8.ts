export const lesson8 = {
  title: 'Verbos regulares del pretérito perfecto simple acabados en -IR',
  content: `
    <p>Para conjugar un verbo en pasado cuando la acción ya ha acabado se usa el pretérito perfecto simple.
    Para conjugar el pretérito perfecto simple de los verbos acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.
    Por ejemplo: vivir en pretérito perfecto simple de la primera persona -> viv + <span class="regular">í</span>

    <h2>Indicativo</h2>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion title="Desinencias pretérito perfecto simple (IR)" desinencias="vivir" grupo="Indicativo" tiempo="Pretérito perfecto simple"></app-conjugacion>
            </ion-col>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion verbo="vivir" grupo="Indicativo" tiempo="Pretérito perfecto simple"></app-conjugacion>
            </ion-col>
        </ion-row>
    </ion-grid>
    `,
  exercises: [
    {type: 'choose', exercise: 'Yo ___ <span class="grey">(vivir en 1ª persona del singular)</span> toda mi infancia en otra ciudad.', options: ['viví', 'vivió'], answers: 'viví'},
    {type: 'input', exercise: 'Él ___ <span class="grey">(abrir en 3ª persona del singular)</span> la puerta a la mañana.', answers: 'abrió'},
    {type: 'choose', exercise: 'Hace años, nosotros ___ <span class="grey">(permitir en 1ª persona del plural)</span> jugar en la plaza.', options: ['permitimos', 'permitiste'], answers: 'permitimos'},
    {type: 'input', exercise: 'Ayer, tú ___ <span class="grey">(partir en 2ª persona del singular)</span> el bocadillo por la mitad.', answers: 'partiste'},
    {type: 'choose', exercise: 'Ellos ___ <span class="grey">(compartir en 3ª persona del plural)</span> piso el año pasado.', options: ['compartieron', 'compartió'], answers: 'compartieron'},
    {type: 'input', exercise: 'Vosotros ___ <span class="grey">(vivir en 2ª persona del plural)</span> en Barcelona durante dos años.', answers: 'vivisteis'},

  ]

};
