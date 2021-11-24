import './App.css';
import React, { useState } from 'react';

const Tag = (props) => {
    const { item, isCollapsed, handleTagAdd } = props
    const [profileTags, setProfileTags] = useState([])

    const addProfileTag = (item, e) => {
        if (e.key === "Enter") {
            if (e.target.value === "") {
                alert("tag can't be blank")
            }

            else if (!(profileTags.includes(e.target.value))) {
                setProfileTags([...profileTags, e.target.value])
                item.tags = profileTags
                handleTagAdd(e)
                e.target.value = ""
            }
            else {
                alert("tag already present")
            }
        }
    }


    return (<>
        {((profileTags.length === 0)) ?
            <p className="No-tag">no tags present</p> :
            profileTags.map(
                (tag, tagIdx) =>
                    <p key={tagIdx} className="Tag-names">{tag}</p>
            )}
        <div>
            <input type="text" placeholder="Add a tag and press enter" className={(isCollapsed) ? "Profile-tag" : "Tag-input-hidded"} onKeyDown={addProfileTag.bind(this, item)} />
        </div>
    </>
    )
}
export default Tag
