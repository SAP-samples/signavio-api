# BPMN Translation Pipeline — SAP Signavio SPG + n8n + SAP AI Core

Automate BPMN process model translation using SAP Signavio Process Governance (SPG), n8n, and SAP AI Core. A process owner triggers an SPG workflow, which exports the BPMN XML and sends it to n8n for AI translation and reimport into SAP Signavio Process Manager (SPM), with approval and Microsoft Teams notifications included.

---

## What's included

| File | Purpose |
|---|---|
| `n8n-workflows/step1-translate-import.json` | n8n: translate BPMN via AI Core, import to SPM, notify Teams |
| `n8n-workflows/step2-approval-result.json` | n8n: receive approval outcome, send Teams notification |
| `spg-scripts/spg-bpmn-export-trigger.js` | SPG Script task: reads the exported BPMN file and calls n8n |
| `spg-scripts/spg-approval-result-notify.js` | SPG Script task: notifies n8n of the approval decision (used twice: approved/rejected branches) |

---

## Architecture

```
[SPG Workflow]
  └─ BPMN Export service task  →  exports model as XML file
  └─ Script task               →  sends XML + metadata to n8n webhook
        │
        ▼
[n8n — Step 1: Translate & Import]
  ├─ Parse BPMN text elements
  ├─ SAP AI Core (LLM)  →  translate element names to target language
  ├─ Reconstruct BPMN XML with translations
  ├─ Authenticate to SPM  →  import translated model
  └─ Post Teams message: "Translation ready — review and submit for approval"
        │
        ▼
[Human] Reviews translated model in SPM → clicks "Submit for Approval"
        │
        ▼
[SPM] Triggers SPG approval workflow automatically (native approval lifecycle)
        │
        ▼
[Human approver] Approves or rejects in SPG
        │
        ▼
[n8n — Step 2: Approval Result]
  └─ Post Teams message: "✅ Translation APPROVED" / "❌ Translation REJECTED"
```


---

## Prerequisites

- **An SPG workflow with** BPMN Export service task → Script task → (Signavio Approval trigger for the result workflow)
- **SAP AI Core** a deployed LLM (e.g. GPT-4o via the generative-ai hub); note the deployment ID
- **n8n** with:
  - The SAP AI Core node installed
  - A Microsoft Teams credential configured
- **Microsoft Teams** — channel for approval requests and for the result notifications

---

## Setup

### 1. Import the n8n workflows

In n8n: **Settings → Import workflow** → import both JSON files.

After import, open **Step 1** (`step1-translate-import.json`) and update the **Config** node:

```javascript
return [{json:{
  spmBaseUrl:     'https://api.YOUR_SPM_REGION.signavio.cloud.sap',
  spmTenantId:    'YOUR_SPM_TENANT_ID',
  spmDirectory:   '/directory/YOUR_SPM_DIRECTORY_ID',
  spmUser:        'YOUR_SPM_USER',
  spmPassword:    'YOUR_SPM_PASSWORD',
  aiDeploymentId: 'YOUR_AI_CORE_DEPLOYMENT_ID',
  targetLanguage: 'German'   // or Spanish, French, Japanese, etc.
}}];
```

Also update the **Notify Requester** and **Send Result** (Step 2) Teams nodes with your team/channel ID.

### 2. Configure the SAP AI Core credential

In n8n: **Credentials → New → SAP AI Core**. Enter your AI Core service key details.

### 3. Activate the workflows

Activate both workflows. Note the webhook URLs: you'll need the Step 1 URL for the SPG script.

### 4. Add the SPG Script task

In your SPG workflow, add a **Script** task after the BPMN Export service task. Paste the contents of `spg-scripts/spg-bpmn-export-trigger.js` and replace `YOUR_N8N_WEBHOOK_URL` with the Step 1 webhook URL.

The script expects these SPG workflow variables as inputs:
- `xmlFile` — file output from the BPMN Export service task
- `modelName` — text variable with the model name
- `modelId` — text variable with the SPG model ID

### 5. Add the SPG approval result scripts

In your SPG approval workflow, add a Script task on the **approved** branch and another on the **rejected** branch. Paste `spg-scripts/spg-approval-result-notify.js` into each, replace `YOUR_N8N_WEBHOOK_URL` with the Step 2 webhook URL, and set `decision = 'approved'` or `decision = 'rejected'` accordingly.
