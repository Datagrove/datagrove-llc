# datagrove-main
Website for Datagrove INC

The Datagrove main website is built using VitePress.

To install locally:
```
git clone https://github.com/datagrove/datagrove-main.git
yarn install 
```

To run locally:
```
yarn docs:dev
```

To build for production:
```
yarn docs:build
```

To deploy:
The Datagrove website is hosted by Cloudflare, and any updates to the datagrovecr repo will deploy those updates to the website itself.
```
git add .
git commit -m "<insert message describing changes>"
git push
```
