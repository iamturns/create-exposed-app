# This script is awful (it makes some horrible assumptions)

npm run build

# Must be run in sibling directory to avoid node_module resolution issues

cd ../
mkdir create-exposed-app-manual-test
cd create-exposed-app-manual-test

HYGEN_OVERWRITE=1 node ../create-exposed-app/dist/index.js \
  --packageName="my-awesome-project" \
  --npmScope="@example" \
  --oneLiner="Does awesome stuff" \
  --authorName="Bruce Wayne" \
  --authorEmail="bruce.wayne@gmail.com" \
  --authorGithub="batman" \
  --authorTwitter="TheRealBatman" \
  --authorWebsite="https://batman.com"

npm install
npm run validate
