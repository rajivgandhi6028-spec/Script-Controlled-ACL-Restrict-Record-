(function executeRule(current, previous) {
    if (gs.hasRole('admin')) return;
    var userRec = gs.getUser().getRecord();
    var branch = userRec.getValue('u_branch');
    if (branch) {
        current.addQuery('u_branch', branch);
    }
})(current, previous);