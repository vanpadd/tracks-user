# tracks-user

A react native app which allows users to create their own walking, running and/or hiking tracks

## usage

- First whiltelist your IP address by going to Mongo DB Cloud site and selecting Network Access.

- Run the track-server for it to connect to the Mongo instance.

```sh
npm run dev
```

- Run ngrok so it connects the app to the public interface of the express api

```sh
ngrok http 3000
```

- Run the app

```sh
npm run ios
```
