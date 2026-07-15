#!/bin/bash
set -e

if [ -z "$S3_BUCKET" ]; then
  echo "Error: S3_BUCKET environment variable is not set."
  exit 1
fi

if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
  echo "Error: CLOUDFRONT_DISTRIBUTION_ID environment variable is not set."
  exit 1
fi

echo "Uploading public assets to S3 bucket: $S3_BUCKET"
aws s3 sync .output/public s3://${S3_BUCKET}/ --delete --cache-control "public, max-age=3600"

echo "Invalidating CloudFront cache for distribution: $CLOUDFRONT_DISTRIBUTION_ID"
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*"

echo "Asset deployment complete."
