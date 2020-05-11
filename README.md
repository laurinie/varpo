[![Netlify Status](https://api.netlify.com/api/v1/badges/e1a9aeb5-a57a-48f1-b5e4-9f8ce410bb18/deploy-status)](https://app.netlify.com/sites/varpofi/deploys)

# Devaus

 ### Asenna gatsby-cli globaalisti

``` npm install -g gatsby-cli ```

### Asenna paketit

``` npm install ```

Luo ``` .contentful.json ``` tiedosto joka sisältää ```spaceId ``` ja ``` accessToken ```. Luo avaimet Contentfulissa API KEYS osiossa.

### Käynnistä paikallinen kehitysympäristö

``` gatsby develop ```

# Tuotantoon

Netlify lataa contentful sisällön ja renderöi valmiit sivut. Netlify kuuntelee master branchiin muutoksia sekä contentfulin sisältö muutoksia.

