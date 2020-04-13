import React from 'react'

function Avatar () {
  return (
    <figure>
      <img src="img/avatar.jpg"></img>
      <style jsx>{`
        figure {
          margin: 0;
          padding: 0;
          display: contents;
        }

        img {
          width: 50%;
          border-radius: 50%;
          border: 3px solid white;
        }
      `}</style>
    </figure>
  )
}

export default Avatar
