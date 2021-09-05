import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const states =[
   {title:'Alabama'},
    {title:'Alabama'},
    {title:'Alaska'},
    {title:'Arizona'},
    {title:' Arkansas'},
    {title:'  California'},
    {title:' Colorado'},
     {title:' Connecticut'},
     {title:' Delaware'},
     {title:'Florida'},
     {title:' Georgia'},
     {title:' Hawaii'},
      {title:'Idaho'},
     {title:'Illinois'},
      {title:'Indiana'},
      {title:'Iowa'},
      {title:'Kansas'},
      {title:'Kentucky'},
      {title:'Louisiana'},
       {title:'Maine'},
      {title:'Maryland'},
    {title:'Massachusetts'},
    {title:'Michigan'},
    {title:'Minnesota'},
    {title:'Mississippi'},
    {title:'Missouri'},
    {title:'Montana'},
    {title:'Nebraska'},
    {title:'Nevada'},
    {title:'New Hampshire'},
    {title:'New Jersey'},
    {title:'New Mexico'},
    {title:'New York'},
    {title:'North Carolina'},
    {title:'North Dakota'},
    {title:'Ohio'},
    {title:'Oklahoma'},
    {title:'Oregon'},
    {title:'Pennsylvania'},
    {title:'Rhode Island'},
    {title:'South Carolina'},
    {title:'South Dakota'},
    {title:'Tennessee'},
    {title:'Texas'},
    {title:'Utah'},
    {title:'Vermont'},
    {title:'Virginia'},
    {title:'Washington'},
    {title:'West Virginia'},
    {title:'Wisconsin'},
    {title:'Wyoming'},
]

function Searchbar({setFilterState}) {

   // const[search,setSearch] = useState('')
   //  const handleSearchChange=(e) => {
   //       console.log(e.target.innerText)
   //  }
    
    return(
       <div  style={{flex:"50%"}}  className="searchField">
           <div style={{ width: 300 }}>
             <h2 className="search">Search For Locations Near You...</h2>
             {/* <Autocomplete 
                freeSolo
                id="free-solo-demo"
                options={states.map((option) => option.title)}
                renderInput={(params) => (
                   < TextField 
                   {...params} 
                   label="freeSolo" x
                   margin="normal" 
                   variant="outlined" 
                   />
                )}
             /> */}
             <Autocomplete onChange={(e)=> setFilterState(e.target.innerText)} 
               onInputChange={(e)=> setFilterState(e.target.innerText)}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={states.map((option) => option.title)}
                renderInput={(params) => (
                   < TextField
                   {...params}
                   label="Search input"
                   margin="normal"
                   variant="outlined"
                   InputProps={{ ...params.InputProps, type: 'search' }} 
                   />
                )}
             />
           </div>
        </div>
    )
}

export default Searchbar;