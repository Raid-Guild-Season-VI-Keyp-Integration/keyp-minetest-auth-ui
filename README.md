
<p align="center">
   <br/>
   <a href="https://www.usekeyp.com/" target="_blank">
   <img height="64" src="https://uploads-ssl.webflow.com/63b5a92988dfb03cc1e4d51b/63bd64ad5c5b0744e8bf496b_Keyp-Logo-White.svg" />
   </a>
   <a href="https://www.minetest.net/" target="_blank">
   <img height="64" src="https://www.minetest.net/media/icon.svg" />
   </a>
   <h3 align="center">Keyp & Minetest Integration</h3>
   <p align="center">
   Powerful Web3 Onboarding. Open Source. Simple.
   </p>
</p>

## Overview
This application is the frontend to an integration of Keyp and Minetest. It enables the user to create a Web3 compatible user account and login to a hosted [Minetest instance](https://github.com/Raid-Guild-Season-VI-Keyp-Integration/keyp-minetest-mod) using a [tiny authentication server](https://github.com/Raid-Guild-Season-VI-Keyp-Integration/auth-server) written in ExpressJS. For more information on this integration and who built it, checkout the project [README](https://github.com/Raid-Guild-Season-VI-Keyp-Integration)

### useKeyp
Improve onboarding and payments in your games & apps effortlessly with OAuth logins and credit card transactions. Use simple API calls to verify users, create, transfer & airdrop assets.

### MineTest
An open source voxel game engine. Play one of our many games, mod a game to your liking, make your own game, or play on a multiplayer server.

The deployed frontend can be found at [`keypmine.luxumbra.dev`](https://keypmine.luxumbra.dev/). To make use of the

Go to [docs.usekeyp.com](https://docs.usekeyp.com/) for more information and documentation.

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/Raid-Guild-Season-VI-Keyp-Integration/keyp-minetest-auth-ui
cd keyp-minetest-auth-ui // or whatever directory you named it
pnpm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for the Keyp provider. These details can be obtained from https://dev.usekeyp.com/ once you have signed up for a dev account and created a client in the portal.

### 2. Start the application

To run the app locally, use:

```
pnpm dev
```

To run it in production mode, use:

```
pnpm build
pnpm start
```

### 5. Preparing for Production

Follow the [Vercel Deployment documentation](https://authjs.dev/guides/basics/deployment) then the quickest way to deploy the frontend is to install the [Vercel command-line interface](https://vercel.com/docs/cli):

```
pnpm i -g vercel
```
Then run the vercel command which will log you into your vercel account and walk you through the deployment process and will automatically import your env vars.
```
vercel
```
Once deployed you can use `vercel` to deploy a preview or `vercel --prod` to deploy the production build.

## Acknowledgements

<a href="https://www.usekeyp.com/">
<img width="125px" src="https://uploads-ssl.webflow.com/63b5a92988dfb03cc1e4d51b/63b6e17a133ca72c671f0d89_Keyp-Logo.svg" alt="Authentication & Web3 Onboarding from Keyps " />
</a>
<p align="left">Thanks to @CupOJoseph of Keyp for the opportunity</p>

<a href="https://p2pcloud.io/">
<img width="125px" src="https://p2pcloud.io/design/img/logo.svg" alt="App hosted by P2PCloud" />
</a>
<p align="left">Thanks to P2PCloud for providing secure, decentralized hosting for this project and allowing it to be deployed for free on one of their encrypted VMs</p>