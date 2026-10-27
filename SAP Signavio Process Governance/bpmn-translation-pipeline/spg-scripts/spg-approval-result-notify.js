/**
 * SPG Script Task: Notify n8n of Approval Decision
 *
 * Place this script in TWO separate Script tasks in your SPG approval workflow:
 *   - On the "Approved" path: set decision = 'approved'
 *   - On the "Rejected" path: set decision = 'rejected'
 *
 * Required SPG workflow variables as script inputs:
 *   modelId   — text variable (the SPG model ID)
 *   modelName — text variable (the model name)
 *
 * CONFIGURATION — replace the placeholder with your n8n webhook URL:
 */

var N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL';
// Example: 'https://your-n8n-host/webhook/scenario-b-result-v2'

var decision = 'approved'; // Change to 'rejected' in the rejection branch

// ─── Script body (no changes needed below this line) ──────────────────────

request.post({
  url: N8N_WEBHOOK_URL,
  json: {
    decision: decision,
    modelId: modelId,
    modelName: modelName
  }
}, function(err, res) {
  if (err) console.log('error: ' + err);
  else console.log('notified: ' + res.statusCode);
});
