let expandGithubActionsChecks = function () {
  let actions = document.getElementsByClassName("merge-status-list").item(0);
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
      document.getElementsByClassName("merge-status-list") != null &&
      document.getElementsByClassName("merge-status-list").item(0) != null
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
