/**
 * SPG Script Task: Send BPMN Export to n8n for AI Translation
 *
 * Place this code in a Script task inside your SPG workflow, immediately
 * after the "BPMN Export as XML" service task that produces the xmlFile variable.
 *
 * Required SPG workflow variables (mapped as script inputs):
 *   xmlFile   — file variable from the BPMN Export service task
 *   modelName — text variable (the process model name shown in SPM)
 *   modelId   — text variable (the SPG model ID, for the approval callback)
 *
 * CONFIGURATION — replace the placeholder below with your n8n webhook URL:
 */

var N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL';
// Example: 'https://your-n8n-host/webhook/scenario-b-translate-v2'

// ─── Script body (no changes needed below this line) ──────────────────────

if (!xmlFile) throw new Error('xmlFile is missing');

var files = require('files');
var fileContent = files.getContent(xmlFile);
var xmlString = fileContent.buffer.toString('utf-8');

request.post({
  url: N8N_WEBHOOK_URL,
  json: {
    xmlContent: xmlString,
    modelName: modelName || (xmlFile.name || '').replace('.bpmn', '') || '',
    modelId: modelId
  }
}, function(err, res) {
  if (err) throw new Error('n8n call failed: ' + err);
  console.info('HTTP ' + res.statusCode);
});
