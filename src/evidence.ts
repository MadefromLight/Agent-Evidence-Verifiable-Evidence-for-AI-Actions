import {randomUUID} from "node:crypto";
import {sha256} from "./hash.js";
import type {EvidenceInput,EvidenceRecord} from "./types.js";
export function createEvidence(input:EvidenceInput):EvidenceRecord {
  const base={schema:"agent-evidence/v0.1" as const,id:randomUUID(),occurredAt:input.occurredAt ?? new Date().toISOString(),...input};
  return {...base,payloadHash:sha256(base)};
}
export function verifyEvidence(record:EvidenceRecord):boolean {
  const {payloadHash,...payload}=record;
  return sha256(payload)===payloadHash;
}
