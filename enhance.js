let expandGithubActionsChecks = function () {
  let actions = document.querySelector('[data-updatable-content-scroll-position-id="merge-status-list"]');
  actions.style.maxHeight = "1000px";
};

function waitForActionsListToDisplay(
  callback,
  checkFrequencyInMs,
  timeoutInMs
) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (
      document.querySelector('[data-updatable-content-scroll-position-id="merge-status-list"]') != null
    ) {
      callback();
      return;
    } else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs) return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

waitForActionsListToDisplay(expandGithubActionsChecks, 1000, 9000);
