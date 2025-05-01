# Waiterapp API

Api for waiterapp.

### build docker

```
export const dockerbuild = `
docker build \
  --build-arg PORT=3333 \ # The port on which the application will run
  --build-arg NODE_ENV=development \ # The environment mode (e.g., development, production)
  --build-arg MONGODB_URI=mongodb://root:root@mongo:27017 \ # The MongoDB connection URI
  --build-arg AWS_ACCESS_KEY_ID= \ # AWS access key ID for accessing AWS services
  --build-arg AWS_SECRET_ACCESS_KEY= \ # AWS secret access key for accessing AWS services
  --build-arg AWS_REGION=us-east-1 \ # The AWS region where resources are located
  --build-arg AWS_BUCKET_NAME= \ # The name of the AWS S3 bucket to use
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
