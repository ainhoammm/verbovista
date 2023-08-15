export const lesson6 = {
  title: 'Verbos regulares del pretérito perfecto simple acabados en -AR',
  content: `
    <p>Para conjugar un verbo en pasado cuando la acción ya ha acabado se usa el pretérito perfecto simple.
    Para conjugar el pretérito perfecto simple de los verbos acabados en -AR se usa la raiz + las siguientes desinencias en funcion de la persona.
    Por ejemplo: saltar en pretérito perfecto simple de la primera persona -> salt + <span class="regular">é</span>

    <h2>Indicativo</h2>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion title="Desinencias pretérito perfecto simple (AR)" desinencias="saltar" grupo="Indicativo" tiempo="Pretérito perfecto simple"></app-conjugacion>
            </ion-col>
            <ion-col size-xs="12" size-sm="6">
                <app-conjugacion verbo="saltar" grupo="Indicativo" tiempo="Pretérito perfecto simple"></app-conjugacion>
            </ion-col>
        </ion-row>
    </ion-grid>
    `,
  exercises: [
    {type: 'choose', exercise: 'Ayer ___ <span class="grey">(jugar en 1ª persona del singular)</span> con mis amigos.', options: ['jugué', 'juega'], answers: 'jugué'},
    {type: 'input', exercise: 'La semana pasada, él ___ <span class="grey">(acabar en 3ª persona del singular)</span> sus tareas.', answers: 'acabó'},
    {type: 'choose', exercise: 'Nosotros ___ <span class="grey">(aceptar en 1ª persona del plural)</span> las condiciones.', options: ['acepté', 'aceptamos'], answers: 'aceptamos'},
    {type: 'input', exercise: 'Ayer ___ <span class="grey">(firmar en 2ª persona del singular)</span> el contrato de trabajo.', answers: 'firmaste'},
    {type: 'choose', exercise: 'El año pasado, ellos ___ <span class="grey">(actuar en 3ª persona del plural)</span> en el teatro.', options: ['actuaron', 'actuó'], answers: 'acturaron'},
    {type: 'input', exercise: 'Al comienzo del curso, vosotros ___ <span class="grey">(aceptar en 2ª persona del plural)</span> las normas de la escuela.', answers: 'aceptasteis'},
  ]

};
