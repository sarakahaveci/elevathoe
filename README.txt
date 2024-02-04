# initialize
vercel login

# compile
vercel build

# run locally
npm run dev

# deploy to cloud
vercel deploy

# add new module
1) navigation
src/navigation/vertical/index.ts

2) store
src/store/index.ts
src/store/apps/<moduleName>/

3) @fake-db
src/@fake-db/apps/

4) pages
src/pages/apps/<moduleName>/list/index.ts
src/pages/apps/<moduleName>/view/[tab].tsx

5) types
src/types/apps/<moduleType>.ts

6) views
src/views/apps/<moduleName>/
