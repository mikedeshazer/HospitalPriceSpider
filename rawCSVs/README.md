###Files/Folders in this folder have been sorted by `http://localhost:3007/api/sort-files` endpoint.
You may reload the page severally but it's meant to run and sort all in one full request

CONTENTS OF THIS FILE
---------------------

 * Folder Structure/Details
 * Contributing

FOLDER STRUCTURE
----------------

* `./` The root of this directory contains files staged for processing(thought to have no errors so far)

* `./unSortedFiles` Contains files unknown, ie the have no related hospital (savedTableRepoName is empty
in institutions/spreadsheet)

* `./missingDetails` This folder contains files with missing required fields ie `institution.itemColumnName`, `institution.avgPriceColumnName`, `institution.country`

* `./notProcessed` This folder contains files that were not processed during the latest commit(@TODO check names vs ext)

* `./processed` This folder contains files that were processed in the latest commit, sorted with total items count per
successful request, check the last one ie folder (`./Done from 442,551 to`) with errors, mostly database related memory(@TODO improve on db requests)
                 

CONTRIBUTING
-------------

To contribute and maybe test, move all folders to `./unSortedFiles` folder and go to `http://localhost:3007/api/sort-files`
if you have started your node js and mysql server locally as configured in `<project dir>/nodejsModule/database/config/config.json`