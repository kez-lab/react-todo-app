#!/usr/bin/env node
const semver = require('semver');
const requiredRange = '>=14.0.0 <=16.x';
const currentVersion = process.version;
if (!semver.satisfies(currentVersion, requiredRange)) {
  console.error(`현재 Node 버전(${currentVersion})은 지원되지 않습니다. 반드시 ${requiredRange} 범위의 Node 버전을 사용하세요.`);
  process.exit(1);
}
// ...existing code if any...
