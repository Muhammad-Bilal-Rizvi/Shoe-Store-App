import React from 'react'
import { Link } from 'react-router-dom'


export const ProductIndex = () => {
    const shoes =  {
        "air-jordan-3-valor-blue": {
          "name": "VALOUR BLUE",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
          "name": "JORDAN MARS 270 LONDON",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
          "name": "RACER BLUE",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-3-valor-blue1": {
          "name": "VALOUR BLUE",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london2": {
          "name": "JORDAN MARS 270 LONDON",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue3": {
          "name": "RACER BLUE",
          "img":
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        }
      } 

    return (
        <div >
            <ul>
                <div className="productContainer">
                    {Object.entries(shoes).map(([productId,{name, img}]) =>  
                        (
                            <li key={productId}>
                                <Link to={productId}>
                                <h4>{name}</h4>
                                <img src={img} alt={name} height={150} alt="shoe" />
                                </Link>
                            </li>
                        )
                    )}
                    </div>
                </ul>
        </div>
    )
}
