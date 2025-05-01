# Waiterapp API

Api for waiterapp.

### build docker

```
export const dockerbuild = `
docker build \
  --build-arg PORT=3333 \
  --build-arg NODE_ENV=development \
  --build-arg MONGODB_URI=mongodb://root:root@mongo:27017 \
  --build-arg AWS_ACCESS_KEY_ID= \
  --build-arg AWS_SECRET_ACCESS_KEY= \
  --build-arg AWS_REGION=us-east-1 \
  --build-arg AWS_BUCKET_NAME= \
  -f apps/api/Dockerfile \
  -t waiterapp-api .
`
```

### Run docker image (with mongo network name)

docker run -d \
 --network api_waiter-network \
 -p 3333:3333 \
 -e PORT=3333 \
 -e NODE_ENV=development \
 -e MONGODB_URI=mongodb://root:root@mongo:27017/admin \
 -e AWS_ACCESS_KEY_ID=... \
 -e AWS_SECRET_ACCESS_KEY=... \
 -e AWS_REGION=us-east-1 \
 -e AWS_BUCKET_NAME=waiterapp-application \
 waiterapp-api
