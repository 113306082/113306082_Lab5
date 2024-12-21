let rowCount = 0; // To keep track of the number of rows

document.getElementById('submit-button').addEventListener('click', () => {
    const mathInput = document.getElementById('math-grade');
    const englishInput = document.getElementById('english-grade');

    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid grades for both Math and English.');
        return;
    }

    // Add new row
    const tableBody = document.querySelector('#grades-table tbody');
    const newRow = tableBody.insertRow();
    rowCount++; // Increment the row count

    // Insert cells
    const indexCell = newRow.insertCell(0); // Row index
    const mathCell = newRow.insertCell(1); // Math grade
    const englishCell = newRow.insertCell(2); // English grade
    const averageCell = newRow.insertCell(3); // Row average

    // Fill in cell values
    indexCell.textContent = rowCount; // Assign row number
    mathCell.textContent = mathGrade.toFixed(2); // Math grade
    englishCell.textContent = englishGrade.toFixed(2); // English grade
    const rowAverage = ((mathGrade + englishGrade) / 2).toFixed(2);
    averageCell.textContent = rowAverage; // Row average

    // Update column averages
    updateAverages();

    // Clear inputs
    mathInput.value = '';
    englishInput.value = '';
});

function updateAverages() {
    const tableBody = document.querySelector('#grades-table tbody');
    const mathCells = Array.from(tableBody.querySelectorAll('td:nth-child(2)')); // Math column
    const englishCells = Array.from(tableBody.querySelectorAll('td:nth-child(3)')); // English column
    const averageCells = Array.from(tableBody.querySelectorAll('td:nth-child(4)')); // Row averages

    const mathAverage = mathCells.reduce((sum, cell) => sum + parseFloat(cell.textContent), 0) / mathCells.length;
    const englishAverage = englishCells.reduce((sum, cell) => sum + parseFloat(cell.textContent), 0) / englishCells.length;
    const overallAverage = averageCells.reduce((sum, cell) => sum + parseFloat(cell.textContent), 0) / averageCells.length;

    document.getElementById('math-average').textContent = mathAverage.toFixed(2);
    document.getElementById('english-average').textContent = englishAverage.toFixed(2);
    document.getElementById('overall-average').textContent = overallAverage.toFixed(2);
}