import React from "react";
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function handleDelete(id) {
    console.log(id);
    const remainingTravels = travelPlans.filter((plan) => {
      return plan.id !== id;
    });
    setTravelPlans(remainingTravels);
  }

  return (
    <div className="TravelList">
      {travelPlans.map((plan) => {
        return (
          <article key={plan.id} className="OneTravel">
            <div>
              <img src={plan.image} alt={plan.destination} />
            </div>
            <div>
              <h2>
                {plan.destination} ({plan.days} Days)
              </h2>
              <p>{plan.description}</p>
              <p>
                <span>Price :</span>
                {plan.totalCost}
              </p>
              <p className="label-wrapper">
                {plan.totalCost <= 350 && (
                  <span className="Label">Great Deal</span>
                )}
                {plan.totalCost > 1500 ? (
                  <span className="Label premium">Premium</span>
                ) : null}
                {plan.allInclusive && (
                  <span className="Label premium">All Inclusive</span>
                )}
                {/* <Label>Great Deal</Label> */}
              </p>
              <button onClick={() => handleDelete(plan.id)}>Delete</button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

//   const [location, setLocation] = useState(travelPlansData);
//   function greatDeal(price) {
//     if (price <= 350) {
//       return true;
//     }
//   }

//   const travelListLocation = location.map((location, index) => (
//     <div class="location" key={index}>
//       <div class="img-location">
//         <img src={location.image} alt="image" />
//       </div>
//       <div class="info-location">
//         <h3>
//           {location.destination} ({location.days} Days)
//         </h3>
//         <p>{location.description}</p>
//         <p>
//           <strong>Price:</strong> {location.totalCost}
//         </p>
//         {greatDeal(location.totalCost) ? <span>Great Deal</span> : ""}
//       </div>
//     </div>
//   ));

//   return <div className="TravelList">{travelListLocation}</div>;
// }

export default TravelList;
