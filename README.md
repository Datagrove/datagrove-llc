# Datagrove
Website for [Datagrove INC](https://datagrove.com/)

The Datagrove main website is built using VitePress and Yarn.

Ensure that Yarn is installed on your local computer:
```
yarn version
```
[Yarn Documentation](https://classic.yarnpkg.com/en/docs/install#mac-stable)

To install datagrove-main locally:
```
git clone https://github.com/datagrove/datagrove-main.git
yarn install 
```

To run datagrove-main locally:
```
yarn docs:dev
```

To build datagrove-main for production:
```
yarn docs:build
```

To deploy to datagrove-main:
The Datagrove website is hosted by Cloudflare, and any updates to the datagrovecr repo will deploy those updates to the website itself.
```
git add .
git commit -m "<insert message describing changes>"
git push
```
