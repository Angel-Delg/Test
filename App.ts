"use strict"
const ScoreTitle: HTMLElement | null = document.querySelector(".Score")
const ButtonIncrementScore: HTMLElement | null = document.querySelector(".Button")
const ControlForm: HTMLElement  | null = document.getElementById("ControlForm")
const InputInitialScore : HTMLInputElement | null = document.querySelector(".InputInitialScore")

interface IControlPanel {
   InitialScore: number,
   Incrementar?: () => void 
   SetInitialScore?: ( Score: number ) => void
}

const ControlPanel: IControlPanel = {
   InitialScore: 0,
}

document.addEventListener("DOMContentLoaded", ():void => {
   ButtonIncrementScore?.setAttribute("disabled", "true")
   
   if(ScoreTitle){
      ScoreTitle.textContent = ControlPanel.InitialScore.toString()
   }

   InputInitialScore?.addEventListener("change", (event): void => {
      if(event.target instanceof HTMLInputElement && event.target){
         let InputValue: number = parseInt(event.target.value)
   
         if(!isNaN(InputValue)){
            ControlPanel.SetInitialScore?.( InputValue )
         }
      } 
   })

   ControlForm?.addEventListener("submit", (event): void => {
      event.preventDefault()
      
      ButtonIncrementScore?.removeAttribute("disabled")

      if(InputInitialScore){
         InputInitialScore.value = ""
      }
   })

   ButtonIncrementScore?.addEventListener("click", (event):void => {
   
   })
})
