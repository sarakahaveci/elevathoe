================
== initialize ==
================
# login
vercel login

# compile
vercel build

# run locally
npm run dev

# deploy to cloud
vercel deploy

================
== add module ==
================
1) navigation
src/navigation/vertical/index.ts

2) store
src/store/index.ts
src/store/apps/<moduleName>/

3) types
src/types/apps/<moduleType>.ts

4) @fake-db
src/@fake-db/index.ts
src/@fake-db/apps/

5) views
src/views/apps/<moduleName>/

6) pages
src/pages/apps/<moduleName>/list/index.ts
src/pages/apps/<moduleName>/view/[tab].tsx

===============
== auxiliary ==
===============
# change add-item menu
src/views/apps/<moduleName>/list/Add<Module>Drawer.tsx

# change item columns in line
src/pages/apps/elevator/list
