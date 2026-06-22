#!/bin/bash

set -e

echo "======================================"
echo "Portfolio Deployment Started"
echo "======================================"

echo "[1/7] Saving current commit..."
CURRENT_COMMIT=$(git rev-parse HEAD)

echo "Current Commit: $CURRENT_COMMIT"

echo "[2/7] Pulling latest code..."
git pull origin main

echo "[3/7] Installing dependencies..."
npm install

echo "[4/7] Building application..."
npm run build

echo "[5/7] Restarting service..."
sudo systemctl restart portfolio

echo "[6/7] Waiting for startup..."
sleep 5

echo "[7/7] Verifying service..."
if systemctl is-active --quiet portfolio; then
    echo "✅ Portfolio service is running"
else
    echo "❌ Portfolio service failed"
    echo "Rollback Commit:"
    echo "$CURRENT_COMMIT"
    exit 1
fi

echo ""
echo "======================================"
echo "Deployment Successful"
echo "======================================"

echo "Portfolio URL:"
echo "https://rakeshsirvi.site"
