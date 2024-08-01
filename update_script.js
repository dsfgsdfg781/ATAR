document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var operationName = document.getElementById('operationName').value;
    var newTitle = document.getElementById('newTitle').value;
    var newDescription = document.getElementById('newDescription').value;
    var eliminated = document.getElementById('eliminated').value;
    var toEliminate = document.getElementById('toEliminate').value;
    var area = document.getElementById('area').value;
    var weaponsNotWorking = document.getElementById('weaponsNotWorking').value;
    var whichWeaponsNotWorking = document.getElementById('whichWeaponsNotWorking').value;
    var remaining = document.getElementById('remaining').value;
    var participants = document.getElementById('participants').value;
    var currentArea = document.getElementById('currentArea').value;
    var stage = document.getElementById('stage').value;

    localStorage.setItem(operationName + '-title', newTitle);
    localStorage.setItem(operationName + '-description', newDescription);
    localStorage.setItem(operationName + '-eliminated', eliminated);
    localStorage.setItem(operationName + '-toEliminate', toEliminate);
    localStorage.setItem(operationName + '-area', area);
    localStorage.setItem(operationName + '-weaponsNotWorking', weaponsNotWorking);
    localStorage.setItem(operationName + '-whichWeaponsNotWorking', whichWeaponsNotWorking);
    localStorage.setItem(operationName + '-remaining', remaining);
    localStorage.setItem(operationName + '-participants', participants);
    localStorage.setItem(operationName + '-currentArea', currentArea);
    localStorage.setItem(operationName + '-stage', stage);

    alert('הנתונים עודכנו בהצלחה!');
});
