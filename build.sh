coffee -c oscurl.coffee
echo '#!/usr/bin/env node' | cat - oscurl.js > oscurl
mv oscurl oscurl.js
chmod +x oscurl.js