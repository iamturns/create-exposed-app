rm -Rf examples
mkdir examples
cd examples

###
# default-server-side
###

mkdir default-server-side
cd default-server-side

npx create-exposed-app \
  --project-package-name="create-exposed-app" \
  --project-overview="Default server-side example of create-exposed-app" \
  --side="server" \
  --author-name="Matt Turnbull" \
  --author-email="matt@iamturns.com" \
  --author-github="iamturns" \
  --author-website="https://iamturns.com"

rm -Rf .git .eslintcache coverage dist node_modules package-lock.json
cd ../

###
# default-client-side
###

mkdir default-client-side
cd default-client-side

npx create-exposed-app \
  --project-package-name="create-exposed-app" \
  --project-overview="Default client-side example of create-exposed-app" \
  --side="client" \
  --author-name="Matt Turnbull" \
  --author-email="matt@iamturns.com" \
  --author-github="iamturns" \
  --author-website="https://iamturns.com"

rm -Rf .git .eslintcache coverage dist node_modules package-lock.json
cd ../
