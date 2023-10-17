'use client';
 
export default function FormComponent() {
  return (
        <>
            <form>
              <label className='' htmlFor="">Peso:</label>
              <input  type="number" onChange={(e) => setWeight(e.target.value)}/>
              <label className='' htmlFor="">Altura:</label>
              <input type="number" onChange={(e) => setHeight(e.target.value)}/>
              <label className='' htmlFor="">Idade:</label>
              <input type="number" onChange={(e) => setAge(e.target.value)}/>
              <p> Insira o nivel de atividade</p>
                      <div className=''>
                        <label htmlFor="">Sedentário pouco ou nenhum exercício </label>
                        <input className='' type="radio" id='0' name="factor" value='0' onClick={(e) => setFactor(0)}/>
                      </div>
                      <div className=''>
                        <label htmlFor=""> Pouco ativo   exercício/esporte leve 1-3 dias/semana</label>
                        <input type="radio" id='1' name="factor" value='1' onClick={(e) => setFactor(1)}/>
                      </div>
                      <div className=''>
                        <label htmlFor=""> Moderadamente ativo exercício/esporte moderado 3-5 dias/semana</label>
                        <input type="radio" id='2' name="factor" value='2'onClick={(e) => setFactor(2)}/>
                      </div>
                      <div className=''>
                        <label htmlFor=""> Muito ativo  exercício/esporte pesado 6-7 dias/semana </label>
                        <input type="radio" id='3' name="factor" value='3'onClick={(e) => setFactor(3)}/>
                      </div>
                      <div className=''>
                        <label htmlFor=""> Extremamente ativo  exercício/esporte muito pesado e trabalho físico intenso diariamente ou treino de 2x ao dia</label>
                        <input type="radio" id='4' name="factor" value='4' onClick={(e) => setFactor(4)}/>
                      </div>


            <h2>Qual seu objetivo?</h2>
          <div className=''>
                        <label htmlFor="">Perder rápido acelerado </label>
                        <input className='' type="radio" id='0' name="factor" value='0' onClick={(e) => setObjective(0)}/>
                      </div>
                      <div className=''>
                        <label htmlFor=""> Perder em ritimo normal</label>
                        <input type="radio" id='1' name="factor" value='1' onClick={(e) => setObjective(1)}/>
                      </div>
                      <div className=''>
                        <label htmlFor=""> Manter o peso</label>
                        <input type="radio" id='2' name="factor" value='2'onClick={(e) => setObjective(2)}/>
                      </div>
                      <div className=''>
                        <label htmlFor=""> Ganhar em ritimo normal </label>
                        <input type="radio" id='3' name="factor" value='3'onClick={(e) => setObjective(3)}/>
                      </div>
                      <div className=''>
                        <label htmlFor=""> Ganhar rápido </label>
                        <input type="radio" id='4' name="factor" value='4' onClick={(e) => setObjective(4)}/>
                      </div>
              <input type='button' value='Calcular' className='bg-black text-white' onClick={async (e) => await getValues(e)}></input>
          </form>
        </>
    )
}
