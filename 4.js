const equal=document.querySelector("form")
 let s=""
const ans=document.querySelector("#ans")
const exp=document.querySelector(".expression")
const btns=document.querySelectorAll("button")

btns.forEach(btn=>{
   
    btn.addEventListener('click',function(e){
        if (btn.innerText==='='){
            e.preventDefault()
            try{
                ans.innerText=eval(s)
                ans.style.color
            }catch(error){
                exp.innerText=''
                ans.innerText="ERROR"
            }
            s=''
        }else if (btn.innerText==='CE'){
            s=''
            ans.innerText=''
            exp.innerText=''
        }
        else{
        s+=btn.innerText
        ans.innerText=''
        exp.innerText=`${s}`
        console.log(s);
        }
    })
})