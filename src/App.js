import "./App.css";
import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "TOGGLE_SAME_AS_BILL":
      const same = !state.sameAsBill;
      return {
        ...state,
        sameAsBill: same,
        shipping_title: same ? state.title : "",
        shipping_firstName: same ? state.firstName : "",
        shipping_lastName: same ? state.lastName : "",
        shipping_address: same ? state.address : "",
      };
    default:
      throw new Error("No Handle reducer type: ", action.type);
  }
}

function BillForm() {
  const [user, dispatch] = React.useReducer(reducer, {
    title: "Mrs",
    firstName: "",
    lastName: "",
    address: "",
    sameAsBill: false,
    shipping_title: "Mr",
    shipping_firstName: "",
    shipping_lastName: "",
    shipping_address: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    console.log("user", user);
  }
  console.log("same as bill", user.sameAsBill);
  return (
    <>
      <h1>Bill</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <select
            value={user.title}
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FIELD",
                field: "title",
                value: e.target.value,
              });
            }}
          >
            <option value="Mr">Mr.</option>
            <option value="Ms">Ms.</option>
            <option value="Mrs">Mrs.</option>
          </select>
        </div>

        <div>
          <label htmlFor="form:FirstName">First Name</label>
          <input
            type="text"
            value={user.firstName}
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FIELD",
                field: "firstName",
                value: e.target.value,
              });
            }}
          ></input>
        </div>

        <div>
          <label htmlFor="form:LastName">Last Name</label>
          <input
            type="text"
            value={user.lastName}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_FIELD",
                field: "lastName",
                value: e.target.value,
              })
            }
          ></input>
        </div>

        <div>
          <label htmlFor="form:Address">Address</label>
          <textarea
            value={user.address}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_FIELD",
                field: "address",
                value: e.target.value,
              })
            }
          ></textarea>
        </div>
        <h1>Shipping Address</h1>
        <div>
          <input
            id="SAME_AS_BILL"
            type="checkbox"
            value={user.sameAsBill}
            onChange={(e) =>
              dispatch({
                type: "TOGGLE_SAME_AS_BILL",
              })
            }
          ></input>
          <label htmlFor="SAME_AS_BILL">Same as Bill Address</label>
        </div>
        {user.sameAsBill === false && (
          <>
            <div>
              <label htmlFor="title">Title</label>
              <select
                value={user.shipping_title}
                onChange={(e) => {
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "shipping_title",
                    value: e.target.value,
                  });
                }}
              >
                <option value="Mr">Mr.</option>
                <option value="Ms">Ms.</option>
                <option value="Mrs">Mrs.</option>
              </select>
            </div>

            <div>
              <label htmlFor="form:FirstName">First Name</label>
              <input
                type="text"
                value={user.shipping_firstName}
                onChange={(e) => {
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "shipping_firstName",
                    value: e.target.value,
                  });
                }}
              ></input>
            </div>

            <div>
              <label htmlFor="form:LastName">Last Name</label>
              <input
                type="text"
                value={user.shipping_lastName}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "shipping_lastName",
                    value: e.target.value,
                  })
                }
              ></input>
            </div>

            <div>
              <label htmlFor="form:Address">Address</label>
              <textarea
                value={user.shipping_address}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_FIELD",
                    field: "shipping_address",
                    value: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </>
        )}

        <button>Submit</button>
      </form>
    </>
  );
}

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <BillForm></BillForm>
    </div>
  );
}

export default App;
