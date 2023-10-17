'use client'

import Image from 'next/image'

import react, { useState } from 'react/'

export default function Home() {

  const [weight, setWeight ] = useState('')
  const [height, setHeight ] = useState('')
  const [age, setAge ] = useState('')
  const [mbr, setMbr] = useState('')
  const [hbr, setHbr] = useState('')
  const [factor, setFactor] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [fat, setFat] = useState(0)
  const [protein, setProtein] = useState(0)
  const [kcalOnDiet, setKcalOnDiet] = useState(0)
  const [objective, setObjective] = useState(0)
  const [gender, setGender] = useState(0)


  async function calcMBR(weight: string ,height: string, age: string, gender: number) {
    const [weightNumber, heightNumber, ageNumber] =  [Number(weight), Number(height), Number(age)]

      if (gender == 0) {
        let mbrValue = (66 + 13.7 * weightNumber + 5 * heightNumber - 6.8 * ageNumber).toFixed(0);
  
        setMbr(String(mbrValue))
  
        return mbrValue
      }

      if (gender == 1) {
        let mbrValue = 665 + 9.6 * weightNumber + 1.8 * heightNumber - 4.7 * ageNumber;

        setMbr(String(mbrValue))
        return mbrValue
      }

  }

  async function harrisBenedict(weight: string ,height: string, age: string, factor: number, gender: number) {
    let mbrValue = await calcMBR(weight,height,age, gender)
    const whichFactor = [1.2, 1.375, 1.55, 1.725, 1.9];
    const harrisBenedictRate = (Number(mbrValue) * whichFactor[factor]).toFixed(0);

    return harrisBenedictRate
  }

  
  async function calcDiet( hbr: string, objective: number){
    const kcals = [-700, -500, 0 , 500 , 700]
    
    const kcalsOnDiet = Number(hbr) + kcals[objective]
    
    return kcalsOnDiet
  }
  
  async function calcMacros(weight: string, kcalsOnDiet: number, objective: number) {
    let pts = 0
    let fat = 0
    let carb = 0
    if (objective == 1 || objective == 2) {
        pts = Math.round(2 * Number(weight))
        fat = Math.round(0.8 * Number(weight))
        carb = Math.round((kcalsOnDiet - (pts * 4 + fat * 9)) / 4)
      }
    if (objective == 3 || objective == 4) {
        pts = Math.round(1.8 * Number(weight))
        fat = Math.round(0.7 * Number(weight))
        carb = Math.round((kcalsOnDiet - (pts * 4 + fat * 9)) / 4)
      }
    if (objective == 0) {
        pts = Math.round(2.4 * Number(weight))
        fat = Math.round(0.8 * Number(weight))
        carb = Math.round((kcalsOnDiet - (pts * 4 + fat * 9)) / 4)
      }
      
      setProtein(pts)
      setFat(fat)
      setCarbs(carb)
    }
    
  async function getValues(e: any) {
      e.preventDefault()
      const hbr = await harrisBenedict(weight,height,age,factor, gender)
      setHbr(String(hbr));
      const kcals = await calcDiet(hbr, objective)
      setKcalOnDiet(kcals)
      await calcMacros(weight, kcals, objective)
  }

    return (
      <main className="">
      <div className="mx-auto flex flex-col max-w-6xl py-10 px-12 lg:px-24 shadow-xl my-10 rounded-lg sm:w-[80%]">
            <h1 className='text-4xl uppercase font-black pb-6 text-orange-600 text-center'>Dieta facil</h1>
            <form>
              <label className='labelInput' >Peso:</label>
              <input  type="text" className='input' placeholder='Digite seu peso em quilos' onChange={(e) => setWeight(e.target.value)}/>
              <label className='labelInput' htmlFor="">Altura:</label>
              <input type="text" className='input' placeholder='Digite sua altura em centimetros' onChange={(e) => setHeight(e.target.value)}/>
              <label className='labelInput' htmlFor="">Idade:</label>
              <input type="text" className='input' placeholder='Digite sua idade em anos' onChange={(e) => setAge(e.target.value)}/>
              <label className='labelInput'>Selecione seu genero biololgico</label>
              <select name="gender" id="genderSelector">
                <option value=""> </option>
                <option className='input' onClick={(e) => setGender(0)}>Homem</option>
                <option className='input' onClick={(e) => setGender(0)}>Mulher</option>
              </select>

            <label className='labelInput'> Insira o nivel de atividade</label>
            <div>
              <select name="factor" id="factorSelector" >
                <option value=""></option>
                <option className='input' onClick={(e) => setFactor(0)}>Sedentário pouco ou nenhum exercício </option>
                <option className='input' onClick={(e) => setFactor(1)}> Pouco ativo   exercício/esporte leve 1-3 dias/semana</option>
                <option className='input' onClick={(e) => setFactor(2)}> Moderadamente ativo exercício/esporte moderado 3-5 dias/semana</option>
                <option className='input' onClick={(e) => setFactor(3)}> Muito ativo  exercício/esporte pesado 6-7 dias/semana </option>
                <option className='input' onClick={(e) => setFactor(4)}> Extremamente ativo  exercício/esporte muito pesado e trabalho físico intenso diariamente ou treino de 2x ao dia</option>
              </select>
            </div>

            <label className='labelInput'>Qual seu objetivo?</label>
                        <select name="" id="">
                          <option value=""></option>
                          <option  onClick={(e) => setObjective(0)}>Perder peso rapidamente </option>
                          <option  onClick={(e) => setObjective(1)}> Perder peso</option>
                          <option  onClick={(e) => setObjective(2)}> Manter o peso</option>
                          <option  onClick={(e) => setObjective(3)}> Ganhar peso </option>
                          <option  onClick={(e) => setObjective(4)}> Ganhar peso rápido </option>
                        </select>
                     
              <input type='button' value='Calcular' className='w-full bg-orange-600 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-orange-700 hover:border-gray-100 rounded-lg mt-5' onClick={async (e) => await getValues(e)}></input>
          </form>
          <h2 className='text-4xl uppercase font-black pb-6 text-orange-600 text-center mt-10'>Resultados</h2>
            <p className='resulParagraph' >Sua taxa metababólica basal é:  
            <label className='text-red-800'> {mbr}</label>
            </p>
            <p className='resulParagraph' >Sua taxa metababólica basal acrescida a atividade é:
            <label className='text-red-800'> {hbr}</label> 
            </p>
            <p className='resulParagraph'>Calorias e macros da dieta: Ingerir <label className='text-red-800'>{kcalOnDiet}</label> calorias distribuidas em: <label className='text-red-800'>{carbs}</label>g de carboidratos, <label className='text-red-800'>{protein}</label> g de proteina e <label className='text-red-800'>{fat}</label>g de gordura
            </p>
      </div>
    </main>
  )
}
