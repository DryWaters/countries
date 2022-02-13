#TODO:

##Client
1. Filter by country name ✅
2. Change to name from countryName for route ✅
3. Update one container to FC with hooks ✅
4. Fix Select Dropdown to match screenshots
5. Encode/Decode URI to deal with names with spaces?  
   1. Why is this api not doing that??
   2. Why no pagination?  Really big API calls don't need 300 at a time
6. Styling
7. Mobile CSS Rules
8. DARK Mode??  Variables with SASS?  Can do like [theme].[component].[element]?
   1. What to do if we have a bunch of different themes?

##Server
1. Build out API
   1. /api/countries
   2. /api/countries/:name
2. Add middleware that uses inmemory-cache
   1. Proxy between front end and this other API service, ex. decode URIs
   2. Use cache, and check if already have in keystore and use that,
   3. Setup TTL days... can be months?  This is census style data
3. Do we need to repull the api for the country details?  It is the exact same information in the /all


##NoSQL Data Schema
1. Need to lookup what they mean?  Just a simple key/value pair like a Mongo schema?
