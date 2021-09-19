import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function DishCard (props) {

  const [tags, setTags] = useState();


  useEffect(()=>{
   setTags(props.tags)
  },[props.tags]);

  return ( 
  <Link className="link" to={`/dishes/${props.id}`}>
   <div className="Restaurant-card border-radius-1">
      <div className="arrange-card">
        <div className="left-card">
              <h3>{props.name}</h3>
          {tags?
            <div className="tags">
              {tags.map((tag,index)=>{
              return(
                <div>
                {index <5 && 
                  <div>
                    {(index%2 == 0)? 
                      <p className="tag green" key="tag">{tag}</p>
                      :
                      <p className="tag blue" key="tag">{tag}</p>
                    }
                  </div>
                }
                </div>
              ) 
          
            })}
          </div>
          :
          <></>
          }
          <div className="address-res-card">
            <h5>
              ${props.price} {props.currency} 
            </h5>
          </div>
        </div>
        <div className="image-res-card">
          <img className="image-res" src={props.photo}></img>
        </div>
      </div>
    </div>
  </Link>
   
  )
}