// Necessary imports
import './App.css';
import React, { useState } from 'react';
import Profile from './Profile';


const Search = (props) => {
    // Props import
    const { profile } = props
    // Props initailisation
    const [tags, setTags] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTag, setSearchTag] = useState('')
    // Set search terms
    const onSearchName = (e) => {
        setSearchTerm(e.target.value)
    }
    const onSearchTag = (e) => {
        setSearchTag(e.target.value)
    }
    const clearSearchTerm = () => {
        setSearchTerm("")
    }
    const clearSearchTag = () => {
        setSearchTag("")
    }
    const addTags = (e) => {
        console.log("tag state callback")
        setTags([...tags, e.target.value])
    }

    return (
        <div className="App">
            <h1 className="App-head">Student Profiles</h1>
            {/* Search by name and tags Inputs  */}
            <div className="Search">
                <input type="text" className="App-search-name" name="name" placeholder="search by name" onChange={onSearchName} />
                <button className={!(searchTerm) ? "No-input" : "Cancel-search-name"} onClick={clearSearchTerm}>x</button>
            </div>
            <hr />
            <div className="Tag">
                <input type="text" className="App-search-tag" name="tag" placeholder="search by tag" onChange={onSearchTag} />
                <button className={!(searchTag) ? "No-input" : "Cancel-search-tag"} onClick={clearSearchTag}>x</button>
            </div>
            <hr />
            {/* filtered profiles */}

            {profile.filter((e) => {
                // Object.assign(e, { "tags": [] })
                // console.log(e)
                // if search name is null
                if (searchTerm === "") {
                    // if search tag is null
                    if (searchTag === "") {
                        return e
                    }
                    // profiles filtered based upon search name and search tag
                    else if (Object.keys(e).includes("tags"))
                        if (e.tags.filter(tag => tag.toLowerCase().includes(searchTag.toLowerCase()))) {
                            return e
                        }
                }
                // profiles filtered based upon search name
                else if ((e.firstName.toLowerCase().includes(searchTerm.toLowerCase())) || (e.lastName.toLowerCase().includes(searchTerm.toLowerCase()))) {
                    // if search tag is null
                    if (searchTag === "") {
                        console.log("no search")
                        return e
                    }
                    // profiles filtered based upon search name and search tag
                    else if (Object.keys(e).includes("tags"))
                        if (e.tags.filter(tag =>
                            tag.toLowerCase().includes(searchTag.toLowerCase()))) {
                            return e
                        }
                }

            })
                // Filtered profiles render
                .map((item, itemIdx) => <Profile key={itemIdx} addTags={(item, e) => addTags(item, e)} itemIdx={itemIdx} item={item}></Profile>)}</div>)
}

export default Search