# Agent Evidence

A TypeScript library for producing tamper-evident, machine-verifiable evidence records for AI agent actions.

The MVP uses canonical JSON plus SHA-256 content hashes. A hash proves integrity of the serialized record; it does not prove that the underlying event was truthful.

## Lifecycle
capture -> canonicalize -> hash -> verify -> export

## Quick start
npm install
npm test
npm run build

## Roadmap
Digital signatures, key rotation, trusted timestamps, chained evidence, policy decision receipts, and HTTP transport.

License: MIT
