import UniversityCard from "./component/UniversityCard";
import { useState } from "react";
function App (){
  const universities = [
    {id: 1, name: "BPP University", location: "London", fee: 15000},
    {id: 2, name: "University of Exeter", location: "Exeter", fee: 18000},
    {id: 3, name: "University of Bristol", location: "Bristol", fee: 20000}
  ];

const [selectUniversity, setSelectUniversity] = useState({
  name: "Select University",
  location: "Select Location",
  fee: 0,
});

const [search, setSearch] = useState("")

const filteredUniversities = universities.filter(
  (university) => university.name.toLowerCase().includes(search.toLowerCase())

  
);

  return(
    <div>
      <h1>The Shield Education</h1>
      <input 
      type="text"
      placeholder="Search University"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
       />
      <h1> {selectUniversity.name} </h1>
      <h2> {selectUniversity.location}</h2>
      <h3> {selectUniversity.fee}</h3>
      {filteredUniversities.map((university) => (
        <UniversityCard 
      key={university.id}
      uniD={university}
      onSelect={setSelectUniversity}
      />

      ))}
      
     

    </div>
  )
}

export default App