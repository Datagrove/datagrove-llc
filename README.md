# Datagrove
Website for [Datagrove INC](https://datagrove.com/)

The Datagrove main website is built using VitePress and Yarn.

Ensure that Modern Yarn is installed on your local computer:
```
yarn version
```
This should return a version greater than 1, if you have version 1.x.x then you have Yarn Classic installed. Install [Modern Yarn](https://yarnpkg.com/getting-started/install)

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

# Subdomains

## pawpaw.datagrove.com
  Source code: https://github.com/froov/pawpaw
  
## ironshop.datagrove.com
  Source code: https://github.com/ironshop
