import React from 'react';
import Title from './Title'

const LikePhotoApp = () => {
    return (
        <div className='container text-center'>
            <Title text={"Like Photo App"}/>
            <Title classes={"subtitle"} text={"Likes "}/> 

            <div className="card card-dark m-auto"
            style={{
                width:300,
                cursor:"pointer"
            }}>
                <div className="card-header fs-xl">
                 <small>
                    Dogdog
                 </small>
                </div>
              <img src=""  alt="" 
              style={{
                height:"fit-content "
              }}/>
              <div className='card-footer fs-xl d-flex' 
              style={{
                justifyContent:"space-between"
              }}>

              </div>
            </div>
        </div>
    )
}
export default LikePhotoApp;