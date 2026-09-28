(function() {
    if (gs.hasRole('admin')) { answer = true; return; }
    var userGr = gs.getUser().getRecord();
    var userBranch = userGr.getValue('u_branch');
    if (userBranch == current.getValue('u_branch')) {
        answer = true;
    } else {
        answer = false;
    }
})();