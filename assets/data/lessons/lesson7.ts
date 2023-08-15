export const lesson7 = {
  title: 'Verbos regulares del pretérito perfecto simple acabados en -ER',
  content: `
    <p>Para conjugar un verbo en pasado cuando la acción ya ha acabado se usa el pretérito perfecto simple.
    Para conjugar el pretérito perfecto simple de los verbos acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.
    Por ejemplo: comer en pretérito perfecto simple de la primera persona -> com + <span class="regular">í</span>

    <h2>Indicativo</h2>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion title="Desinencias pretérito perfecto simple (ER)" desinencias="comer" grupo="Indicativo" tiempo="Pretérito perfecto simple"></app-conjugacion>
            </ion-col>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion verbo="comer" grupo="Indicativo" tiempo="Pretérito perfecto simple"></app-conjugacion>
            </ion-col>
        </ion-row>
    </ion-grid>
    `,
  exercises: [
    {type: 'choose', exercise: 'Ayer yo ___ <span class="grey">(comer en 1ª persona del singular)</span> en ese restaurante.', options: ['comí', 'como'], answers: 'comí'},
    {type: 'input', exercise: 'Él ___ <span class="grey">(aprender en 3ª persona del singular)</span> castellano de niño.', answers: 'aprendió'},
    {type: 'choose', exercise: 'Hace años, nosotros ___ <span class="grey">(prometer en 1ª persona del plural)</span> cuidar de ella.', options: ['prometimos', 'prometiste'], answers: 'prometimos'},
    {type: 'input', exercise: 'Al terminar la escuela, tú ___ <span class="grey">(prometer en 2ª persona del singular)</span> ir a la universidad.', answers: 'prometiste'},
    {type: 'choose', exercise: 'Ellos ___ <span class="grey">(correr en 3ª persona del plural)</span> los cien metros lisos en las olimpiadas del año pasado.', options: ['corrió', 'corrieron'], answers: 'corrieron'},
    {type: 'input', exercise: 'Vosotros ___ <span class="grey">(aprender en 2ª persona del plural)</span> castellano en verano del año pasado.', answers: 'aprendisteis'},

  ]

};
