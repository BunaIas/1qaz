const { Octokit } = require("@octokit/rest");

async function triggerWorkflow() {
  try {
    const octokit = new Octokit({
      auth: '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'
    });

    await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
      owner: 'BunaIas',
      repo: '1qaz',
      event_type: 'start-workflow',
      client_payload: {
        unit: false,
        integration: true
      }
    });

    console.log("Workflow triggered successfully.");
  } catch (error) {
    console.error("Failed to trigger workflow:", error);
  }
}

triggerWorkflow();
