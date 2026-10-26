function UniversityCard(propsR){
    return(
        <div>
            <p>{propsR.uniD.name}</p>
            <button 
            onClick={() => propsR.onSelect(propsR.uniD)}
            
            >
                View Details
            </button>
           
           

        </div>
        

    )
}

export default UniversityCard