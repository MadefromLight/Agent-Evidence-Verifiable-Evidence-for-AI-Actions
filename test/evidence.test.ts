import test from "node:test";
import assert from "node:assert/strict";
import {createEvidence,verifyEvidence,sha256} from "../src/index.js";
test("creates verifiable evidence",()=>{const r=createEvidence({agent:{id:"billing-agent"},request:{action:"payment.create",resource:"merchant:acme"},policy:{id:"payments",version:"1",decision:"allow"},action:{type:"payment",status:"succeeded"},occurredAt:"2026-01-01T00:00:00.000Z"});assert.equal(verifyEvidence(r),true);});
test("detects tampering",()=>{const r=createEvidence({agent:{id:"agent"},request:{action:"read"},action:{type:"read",status:"succeeded"}});r.action.status="failed";assert.equal(verifyEvidence(r),false);});
test("canonical hashing is order independent",()=>assert.equal(sha256({b:2,a:1}),sha256({a:1,b:2})));
