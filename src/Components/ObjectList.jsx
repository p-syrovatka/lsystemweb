function ObjectList({turtles, removeTurtle}){
    return(turtles.map((turtle, index) => (
        <div key={index} className="grid grid-cols-3 ">
          <div className="flex items-center">
            <p>Object n.{index + 1}</p>
          </div>
          <button
                onClick={() => removeTurtle(turtle.id)}
                className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"

            >
                Remove
            </button>
        </div>
      ))
      )
}

export default ObjectList;