const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { spawn } = require('node:child_process');

test('application responds with HTTP 200', async () => {
  const child = spawn(process.execPath, ['server.js'], {
    env: { ...process.env, PORT: '3001' }
  });

  await new Promise(resolve => setTimeout(resolve, 500));

  const result = await new Promise((resolve, reject) => {
    const req = http.get('http://127.0.0.1:3001', res => {
      res.resume();
      res.on('end', () => resolve({ statusCode: res.statusCode }));
    });
    req.on('error', reject);
  });

  child.kill();
  assert.equal(result.statusCode, 200);
});
