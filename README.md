# NFT Platform's Frontend

Backend docs: https://github.com/pedrobrun/nft-platform-backend

I planned on deploying this application to Heroku just like I did with the backend, but I had a bit of a hard time trying and ended up failing. https://nft-platform-frontend.herokuapp.com/
So you'll have to run it locally, unfortunately.

Considerations: I had never worked with React and probably there's lots of ugly code in here (I'm sorry) and a ton of things that work but could be improved.

### IMPORTANT NOTES:
- First request might take a while because backend is deployed on heroku. https://nft-platform-api.herokuapp.com/
- If something takes too long to work and looks like it really isn't going to work, send me a message please. I had a bizarre problem with CORS that I couldn't figure out the reason behind. Cors is correctly configured in backend, but for some reason sometimes when I tried making requests on frontend it would throw that Allow cross origin error from Cors. I just ran `heroku restart` all times and it worked normally after.

<br/>

### INSTRUCTIONS:
1. Clone the repo: `git clone https://github.com/pedrobrun/nft-platform-frontend.git`
2. Install dependencies: `yarn`
3. Run it: `yarn dev`
4. Access the port ON which it's running. It will be printed on the terminal anyway, but by default it's `http://localhost:3000`

