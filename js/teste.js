// Variaveis
// inputs
const numberT = document.querySelector("#number-table");
const rangeN = document.querySelector("#range-number");
// botões
const btnGenerateTable = document.querySelector("#btn-generate");
const btnReset = document.querySelector("#btn-reset");
const operation = document.querySelector("#operation");

const tableResult = document.querySelector("#table-result");
const tableTitle = document.querySelector("#table-title span");
const table = document.querySelector("#table");

// Funções
const generateTable = (rangeN, rangeNumber) => {
    table.innerHTML = "";
    tableResult.style.display = "flex";
    // let i;
    for (i = 1; i <= rangeNumber; i++) {
        // const result = rangeN * i;

        if (operation.value == "+") {
            result = rangeN + i;
        }
        else if (operation.value == "-") {
            result = rangeN - i;
        }
        else if (operation.value == "x") {
            result = rangeN * i;
        }
        else {
            result = rangeN / i;
            Number.isInteger(result);
        }
        console.log(result);
        // variavel que recebe um valor em formato de string.
        const template =
            `<div id="table-values">
                <div class="row">
                    <div class="operation">${rangeN} ${operation.value} ${i} =</div>
                    <div class="result">  ${result}</div>
                </div>
            </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        table.appendChild(row);
    }

    tableTitle.innerHTML = ": " + rangeN;
}

// Eventos
// gerar tabela
btnGenerateTable.addEventListener("click", (event) => {

    const numberTable = +numberT.value;
    const rangeNumber = +rangeN.value;

    // validação de campo vazio.
    if (!numberTable || !rangeNumber);

    if (numberTable > 10) {
        console.log("Numero maximo 100;");
    } else {
        generateTable(numberTable, rangeNumber);
    }
});

// zerar tabela
btnReset.addEventListener("click", () => {
    table.innerHTML = "";
    tableTitle.innerHTML = "";
    numberT.value = 1;
    rangeN.value = 10;
    tableResult.style.display = "none";
});