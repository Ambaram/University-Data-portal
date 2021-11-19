import './App.css';
import  React  from 'react';

const Tag = (props)=> {
    const {tags, addTags, itemIdx} = props
     

    return(<>
    <div>
        {/* Tags display */}
        {tags.filter(t=>t.itemIdx === itemIdx).map((tag, tagIdx)=><p className="Tag-names" key={tagIdx}>{tag.key}</p>)}
        <div>
        {/* Tags input */}
        <input type="text" placeholder="type tag and press enter" className="Profile-tag" onKeyDown={addTags.bind(this, itemIdx)} >
        </input>
        </div>
    </div>
    </>
    )}
export default Tag
