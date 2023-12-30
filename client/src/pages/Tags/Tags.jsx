import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import "./Tags.css"

function Tags() {
  const tagsList=[
    {id:1,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
  },
    {id:2,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
    },
    {id:3,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
    },
    {id:4,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
    },
    {id:5,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
    },
    {id:6,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
    },
    {id:7,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
    },
    {id:8,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
    },
    {id:9,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
    },
    {id:10,
    tagName:"jawascript",
    tagDesc:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae harum consectetur officia aperiam vitae rem dolore voluptate iste sapiente? Tempore molestias eveniet quae eius reiciendis adipisci consectetur ab corporis!</p>"
    },
  ]
  return (
    <div className="home-container-1">
        <LeftSidebar/>
        <div className="home-container-2">
            <h1 className='tag-h1'>Tags</h1>
            <p className='tag-p' >A tag is keyword or label that categorizes  your question with other, similar question.</p>
            <p className='tag-p' >Using the right Tags makes it easer for others to find and answer your question.</p>
            <div className="tags-list-container">
              {
                tagsList.map((Tag)=>
                <TagsList Tag={Tag}  key={Tag.id}/>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default Tags
