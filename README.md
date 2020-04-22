# Assignment

- There are two modules `root` and `car`
- `car` module is `lazy loaded`
- There are three routes `/home`, `/cars`, `/cars/:id`
- In `home` component, I manipulated `<img>` DOM element by changing its `src` after every 2s 
- `cars` component only shows list of car models
- `cars/:id` shows some details as `details` component
    - It has two children: `bidding-form` and `highest-bidder`
    - P2C: `details` sends `maxBidAmount` to `highest-bidder`
    - C2P: `bidding-form` emits events to send submitted form data or submission cancelled. If valid data submitted, response is stored in `localstorage` against random generated `bidId`
    - S2S: `bidding-form` sends currently being typed amount to `highest-bidder` via `car-service`. Whenever currently being typed amount is greater than `maxBidAmount`, it is displayed on browser
- `json-server` runs on default port `3000`
