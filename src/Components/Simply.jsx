

export default function Simply() {
    const id=1


    function senddata(){
    //  let x=  localStorage.getItem("Last Name")
    //  console.log(x)
    localStorage.setItem("User Id",`${id}`)
    // localStorage.clear()

    }

    
  return (
    <div>
        <button onClick={senddata}>CLick</button>
    </div>
  )
}
