// Necessary imports
import './App.css';
import  React, {useState}  from 'react';
import Profile from './Profile';

const Search = (props)=> {
    // Props import
    const {profile} = props
    const [tags, setTags] = useState([{itemIdx:-1, key:""}])
    // Props initailisation
    const [searchTerm, setSearchterm] = useState('')
    const [searchTag, setSearchtag] = useState('')
    // Set search terms
    const onSearchname = (e)=>{
        setSearchterm(e.target.value)
        }
    
    const onSearchtag = (e)=>{
        setSearchtag(e.target.value)
    }
  return(
    <div className="App">
      <h1 className="App-head">Student Profiles</h1>
      {/* Search by name and tags Inputs  */}
      <input type="text" className="App-search-name" placeholder="search by name" onChange={onSearchname} />
      <hr/>
      <input type="text" className="App-search-tag" placeholder="search by tag" onChange={onSearchtag} />
      <hr/>
      {/* filtered profiles */}
      {profile.filter((e)=>{
          // if search name is null
          if(searchTerm ===""){
              // if search tag is null
              if(searchTag === ""){
              return e
            }
            // profiles filtered based upon the search tags
            else if(tags.map(item=>(item["key"].toLowerCase().includes(searchTag.toLowerCase())))){
               return e
           } 
        }
        // profiles filtered based upon search name
          else if((e.firstName.toLowerCase().includes(searchTerm.toLowerCase()))||(e.lastName.toLowerCase().includes(searchTerm.toLowerCase()))){
              // if search tag is null
              if(searchTag === ""){
             return e
          }
          // profiles filtered based upon search name and search tag
          else if(tags.map(item=>item.key.toLowerCase().includes(searchTag.toLowerCase()))){
              return e
          }
        }

    })
    // Filtered profiles display
      .map((item, itemIdx)=><Profile key={itemIdx} itemIdx={itemIdx} item={item} tags={tags}  setTags={setTags}></Profile>)}</div>)}

export default Search